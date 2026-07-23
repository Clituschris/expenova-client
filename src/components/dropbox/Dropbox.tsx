import { useEffect, useLayoutEffect, useRef, useState, type FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './Dropbox.module.css';
import type { Props, DropBoxPosition } from './Dropbox.type';

const DEFAULT_OFFSET = 12;
const DEFAULT_PADDING = 8;

// order to try when the preferred position doesn't fit
const FALLBACK_ORDER: DropBoxPosition[] = [
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'top-left',
  'top-center',
  'top-right',
  'right-top',
  'right-center',
  'right-bottom',
  'left-top',
  'left-center',
  'left-bottom'
];

interface Coords {
  top: number;
  left: number;
}

interface Size {
  width: number;
  height: number;
}

const calculateCoords = (
  targetRect: DOMRect,
  popupRect: Size,
  position: DropBoxPosition,
  offset: number
): Coords => {
  const [primary, secondary] = position.split('-') as [string, string];

  let top;
  let left;

  if (primary === 'top' || primary === 'bottom') {
    top =
      primary === 'top'
        ? targetRect.top - popupRect.height - offset
        : targetRect.bottom + offset;

    if (secondary === 'left') left = targetRect.left;
    else if (secondary === 'right') left = targetRect.right - popupRect.width;
    else left = targetRect.left + targetRect.width / 2 - popupRect.width / 2;
  } else {
    left =
      primary === 'left'
        ? targetRect.left - popupRect.width - offset
        : targetRect.right + offset;

    if (secondary === 'top') top = targetRect.top;
    else if (secondary === 'bottom') top = targetRect.bottom - popupRect.height;
    else top = targetRect.top + targetRect.height / 2 - popupRect.height / 2;
  }

  return { top, left };
};

const fitsInViewport = (coords: Coords, popupRect: Size, padding: number) =>
  coords.top >= padding &&
  coords.left >= padding &&
  coords.top + popupRect.height <= window.innerHeight - padding &&
  coords.left + popupRect.width <= window.innerWidth - padding;

const clampToViewport = (
  coords: Coords,
  popupRect: Size,
  padding: number
): Coords => ({
  top: Math.min(
    Math.max(coords.top, padding),
    window.innerHeight - popupRect.height - padding
  ),
  left: Math.min(
    Math.max(coords.left, padding),
    window.innerWidth - popupRect.width - padding
  )
});

const getPortalRoot = (portalId?: string): HTMLElement => {
  if (!portalId) {
    return document.body;
  }
  const el = document.querySelector<HTMLElement>(`[data-portal="${portalId}"]`);

  if (!el) {
    // eslint-disable-next-line no-console
    console.warn(
      `DropBox: no element found for "${portalId}", falling back to document.body`
    );
  }

  return el ?? document.body;
};

const DropBox: FC<Props> = ({
  isOpen,
  targetRef,
  position = 'bottom-left',
  offset = DEFAULT_OFFSET,
  viewportPadding = DEFAULT_PADDING,
  onClose,
  closeOnOutsideClick = true,
  children,
  portal
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<Coords | null>(null);
  const [isMeasured, setIsMeasured] = useState(false);

  const reposition = () => {
    const target = targetRef.current;
    const popup = popupRef.current;

    if (!target || !popup) return;

    const targetRect = target.getBoundingClientRect();
    const popupRect: Size = {
      width: popup.offsetWidth,
      height: popup.offsetHeight
    };

    const order = [position, ...FALLBACK_ORDER.filter((p) => p !== position)];

    let finalCoords: Coords | null = null;

    for (const candidate of order) {
      const candidateCoords = calculateCoords(
        targetRect,
        popupRect,
        candidate,
        offset
      );

      if (fitsInViewport(candidateCoords, popupRect, viewportPadding)) {
        finalCoords = candidateCoords;
        break;
      }
    }

    if (!finalCoords) {
      finalCoords = clampToViewport(
        calculateCoords(targetRect, popupRect, position, offset),
        popupRect,
        viewportPadding
      );
    }

    setCoords(finalCoords);
    setIsMeasured(true);
  };

  useLayoutEffect(() => {
    if (!isOpen) {
      setIsMeasured(false);
      setCoords(null);
      return;
    }

    reposition();
  }, [isOpen, position]);

  useEffect(() => {
    if (!isOpen) return;

    const handleReposition = () => reposition();

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClick = (event: MouseEvent) => {
      const targetEl = event.target as Node;

      if (
        popupRef.current?.contains(targetEl) ||
        targetRef.current?.contains(targetEl)
      ) {
        return;
      }

      onClose?.();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, closeOnOutsideClick, onClose, targetRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={popupRef}
      className={styles.dropBox}
      style={{
        top: coords?.top ?? 0,
        left: coords?.left ?? 0,
        visibility: isMeasured ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>,
    getPortalRoot(portal)
  );
};

export default DropBox;
