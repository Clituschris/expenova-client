import type { NamedExoticComponent } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  path: string;
  icon: NamedExoticComponent<{ color: string }>;
}
