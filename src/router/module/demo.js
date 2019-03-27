export default [

  {
    path: '/demo',
    name: 'demo',
    meta: { title: '案例', icon: 'table' },

    children: [
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/Home/Home'),
        meta: { title: '案例', icon: 'table' }
      },
    ]
  },

]
