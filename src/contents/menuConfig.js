let menuList =  [
  {
    title: '运营管理',
    key: '/home',
    children: [
      {
        title: '用户管理',
        key: '/order',
        btnList: [
          {aa:'123'}
        ]
      },
      {
        title: '认证管理',
        key: '/order1',
        btnList: [
        ]
      },
      {
        title: '身份审核',
        key: '/order2',
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
    children: [
      {
        title: '活动管理',
        key: '/ativity',
        children: [
          {
            title: '活动管理',
            key: '/activity/manage',
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
      }
    ]
  },
]
export default menuList;