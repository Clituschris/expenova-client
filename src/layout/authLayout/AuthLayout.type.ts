import type { ReactNode } from 'react';

export interface Props {
  layoutType: 'login' | 'signup' | 'forgotpassword';
  bannerTitle: string;
  bannerSummary: string;
  formTitle: string;
  formSubtitle: string;
  isChoiceVisible?: boolean;
  children: ReactNode;
}
