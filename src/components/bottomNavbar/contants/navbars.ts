import ROUTES from '@app/routes';

import { Dashboard, Reports, Add, List, More } from '@app/icons';

export default [
  {
    id: 'dashboard',
    path: ROUTES.DASHBOARD,
    icon: Dashboard
  },
  {
    id: 'transactions',
    path: ROUTES.TRANSACTIONS,
    icon: List
  },
  {
    id: 'add',
    icon: Add,
    isButton: true
  },
  {
    id: 'reports',
    path: ROUTES.REPORTS,
    icon: Reports
  },
  {
    id: 'more',
    icon: More,
    isButton: true
  }
];
