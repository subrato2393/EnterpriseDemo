import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
//Product Management
{
  path: '',
  title: 'Product Management',
  moduleName: 'product-management',
  iconType: 'material-icons-two-tone',
  icon: 'person',
  class: 'menu-toggle',
  groupTitle: false,
  badge: '',
  badgeClass: '',
  role: ['Admin'],
  submenu: [
    {
      path: '/product-management/category-list',
      title: 'Category List',
      moduleName: 'product-management',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
    {
      path: '/product-management/add-category',
      title: 'Add Category',
      moduleName: 'product-management',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
    {
      path: '/product-management/add-product',
      title: 'Add Product',
      moduleName: 'product-management',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
    {
      path: '/product-management/product-list',
      title: 'Product List',
      moduleName: 'product-management',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
    {
      path: '/product-management/product-acceptance',
      title: 'Acceptance',
      moduleName: 'product-management',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
  ],
},

  // Admin Modules

  {
    path: '',
    title: 'MENUITEMS.HOME.TEXT',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/dashboard/main',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/dashboard2',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/teacher-dashboard',
        title: 'MENUITEMS.HOME.LIST.TEACHER-DASHBOARD',
        moduleName: 'teacher-dashboard',
        iconType: 'material-icons-two-tone',
        icon: '',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/student-dashboard',
        title: 'MENUITEMS.HOME.LIST.STUDENT-DASHBOARD',
        moduleName: 'student-dashboard',
        iconType: 'material-icons-two-tone',
        icon: '',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.TEACHERS.TEXT',
    moduleName: 'teachers',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/teachers/all-teachers',
        title: 'MENUITEMS.TEACHERS.LIST.ALL-TEACHERS',
        moduleName: 'teachers',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/teachers/add-teacher',
        title: 'MENUITEMS.TEACHERS.LIST.ADD-TEACHER',
        moduleName: 'teachers',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/teachers/edit-teacher',
        title: 'MENUITEMS.TEACHERS.LIST.EDIT-TEACHER',
        moduleName: 'teachers',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/teachers/about-teacher',
        title: 'MENUITEMS.TEACHERS.LIST.ABOUT-TEACHER',
        moduleName: 'teachers',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },

  // Teacher Modules

  {
    path: '/teacher/dashboard',
    title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/lectures',
    title: 'MENUITEMS.TEACHER.LIST.LECTURES',
    moduleName: 'lectures',
    iconType: 'material-icons-two-tone',
    icon: 'menu_book',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/leave-request',
    title: 'MENUITEMS.TEACHER.LIST.LEAVE-REQUEST',
    moduleName: 'leave-request',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/exam-schedule',
    title: 'MENUITEMS.TEACHER.LIST.EXAM-SCHEDULE',
    moduleName: 'exam-schedule',
    iconType: 'material-icons-two-tone',
    icon: 'history_edu',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/settings',
    title: 'MENUITEMS.TEACHER.LIST.SETTINGS',
    moduleName: 'settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },

  // Student Modules

  {
    path: '/student/dashboard',
    title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/homework',
    title: 'MENUITEMS.STUDENT.LIST.HOMEWORK',
    moduleName: 'homework',
    iconType: 'material-icons-two-tone',
    icon: 'article',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/leave-request',
    title: 'MENUITEMS.STUDENT.LIST.LEAVE-REQUEST',
    moduleName: 'leave-request',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/timetable',
    title: 'MENUITEMS.STUDENT.LIST.TIME-TABLE',
    moduleName: 'timetable',
    iconType: 'material-icons-two-tone',
    icon: 'table_chart',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/settings',
    title: 'MENUITEMS.STUDENT.LIST.SETTINGS',
    moduleName: 'settings',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  // {
  //   path: '',
  //   title: 'Authentication',
  //   moduleName: 'authentication',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'supervised_user_circle',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/authentication/signin',
  //       title: 'Sign In',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/signup',
  //       title: 'Sign Up',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/forgot-password',
  //       title: 'Forgot Password',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/locked',
  //       title: 'Locked',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page404',
  //       title: '404 - Not Found',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page500',
  //       title: '500 - Server Error',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // },
];
