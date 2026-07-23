import type { ReactNode, RefObject } from 'react';

export type DropBoxPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface Props {
  isOpen: boolean;
  targetRef: RefObject<HTMLElement | null>;
  position?: DropBoxPosition;
  offset?: number;
  viewportPadding?: number;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
  children: ReactNode;
  portal?: 'popup';
}
