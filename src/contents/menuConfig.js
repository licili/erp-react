export default [
  {
    title: '运营管理',
    key: '/home',
    chilren: [
      {
        title: '用户管理',
        key: '/order',
        btnList: [
          {aa:'123'}
        ]
      },
      {
        title: '认证管理',
        key: '/use/bike',
        btnList: [
        ]
      },
      {
        title: '身份审核',
        key: '/order',
        btnList: [
          // 这个按钮和权限有关系。有就开放，没有就不开放
          {aa:'123'}
        ]
      },
    ]
  },
  {
    title: '营销管理',
    key: '/platform/market',
    chilren: [
      {
        title: '活动管理',
        key: '/acmamager',
        chilren: [
          {
            title: '活动管理',
            key: '/activity',
            btnList:[]
          }
        ]
      },
      {
        title: '认证管理',
        key: '/use/bike',
        btnList: [
        ]
      },
      {
        title: '身份审核',
        key: '/order',
        btnList: [
          {aa:'123'}
        ]
      },
    ]
  },
]