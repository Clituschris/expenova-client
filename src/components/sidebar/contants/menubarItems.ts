import ROUTES from '@app/routes';

import { Dashboard, Reports, List } from '@app/icons';

export default [
  {
    id: 'dashboard',
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: Dashboard
  },
  {
    id: 'transactions',
    name: 'Transactions',
    path: ROUTES.TRANSACTIONS,
    icon: List
  },
  {
    id: 'reports',
    name: 'reports',
    path: ROUTES.REPORTS,
    icon: Reports
  }
];
