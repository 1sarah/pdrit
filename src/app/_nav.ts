import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/home/dashboard/dashboard',
    icon: 'fa fa-th-large'
  },
  {
    divider: true,
  },
  
  {
    name: 'Users',
    url: '/home/cma-management',
     icon: 'fa fa-users',
    children: [
      {
        name: 'Users',
        url: '/home/cma-management/users',
         icon: 'fa fa-caret-right'
      }
      
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Data',
    url: '/home/cma-management',
     icon: 'fa fa-database',
    children: [
      {
        name: 'Plants',
        url: '/home/cma-management/plants',
        // icon: 'fa fa-caret-right'
      },
      {
        name: 'Pests',
        url: '/home/cma-management/pests',
        // icon: 'fa fa-caret-right'
      },
      {
        name: 'Diseases',
        url: '/home/cma-management/diseases',
        // icon: 'fa fa-caret-right'
      }
      
    ],
  },  
 
];
