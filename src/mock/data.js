const MenuList=[
  {
    name: '全仓数据监控',
    view: 'totalWarehouseData',
    ishidden:false,
    iconCls:'fa fa-table',
    children:[
      {
        name: 'WMS全仓数据监控',
        view: 'totalWarehouseData',
        ishidden:false
      }
    ]
  },
  {
    name:'仓库生产情况',
    view:'',
    ishidden:false,
    iconCls:'fa fa-hourglass-2',
    children:[
        {
          name:'全仓生产效率',
          view: 'table',
          ishidden:false
        },
        {
          name: '单仓生产效率',
          view: 'form',
          ishidden:false
        },
        {
          name: '生产效率对比',
          view: 'user',
          ishidden:false
        }
    ]
  },
  {
    name: '导航二',
    view: '',
    ishidden:false,
    iconCls:'fa fa-id-card-o',
    children:[
      {
        name:'vuex测试页面',
        view:'page4',
        ishidden:false
      }
    ]
  },
  {
    name: '导航三',
    view:'',
    ishidden:false,
    iconCls:'fa fa-bar-chart',
    children:[
      {
        name: '图表echarts',
        view: '/echarts',
        ishidden:false
      }
    ]
  }
]

export {MenuList};