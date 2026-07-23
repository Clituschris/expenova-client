import type { NamedExoticComponent } from 'react';

export interface NavbarItem {
  id: string;
  icon: NamedExoticComponent<{ color: string; size: number }>;
  path?: string;
  isButton?: boolean;
}
