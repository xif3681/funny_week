/*
 * 首页 对应 标签 数据项
 */
function getListData() {
  var arr = [{
    id:1,
    images: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2171555034,1431371250&fm=27&gp=0.jpg'],
    name: '作品11',
    author:'小明11',
    people: '通用人群11',
    tec:'创意11',
    place: '家居11',
    gong: '功能11',
    show: '这是摘要信息11',
    rj:'人机交互11',
    cmf: 'CMF11',
    biSai: "醒狮杯"

  },
  {
    id:2,
    images: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2281659694,309144934&fm=27&gp=0.jpg'],
    name: '作品22',
    author: '小明22',
    people: '通用人群22',
    tec: '创意22',
    place: '家居22',
    gong: '功能22',
    show: '这是摘要信息22',
    rj: '人机交互22',
    cmf: 'CMF22',
    biSai: "和丰杯"
  },
  {
    id:3,
    images: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1637728026,1065969856&fm=27&gp=0.jpg'],
    name: '作品33',
    author: '小明33',
    people: '通用人群33',
    tec: '创意33',
    place: '家居33',
    gong: '功能33',
    show: '这是摘要信息33',
    rj: '人机交互33',
    cmf: 'CMF33',
    biSai: "和丰杯"
  },
  {
    id:4,
    images: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2171555034,1431371250&fm=27&gp=0.jpg'],
    name: '作品44',
    author: '小明44',
    people: '通用人群44',
    tec: '创意44',
    place: '家居44',
    gong: '功能44',
    show: '这是摘要信息44',
    rj: '人机交互44',
    cmf: 'CMF44',
    biSai: "之新大赛"
  },
  {
    id:5,
    images: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2281659694,309144934&fm=27&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2171555034,1431371250&fm=27&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1637728026,1065969856&fm=27&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2281659694,309144934&fm=27&gp=0.jpg'],
    name: '作品55',
    author: '小明55',
    people: '通用人群55',
    tec: '创意55',
    place: '家居55',
    gong: '功能55',
    show: '这是摘要信息55',
    rj: '人机交互55',
    cmf: 'CMF55',
    biSai: "醒狮杯"
  },
  {
    id:6,
    images: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1637728026,1065969856&fm=27&gp=0.jpg'],
    name: '作品66',
    author: '小明66',
    people: '通用人群66',
    tec: '创意66',
    place: '家居66',
    gong: '功能66',
    show: '这是摘要信息66',
    rj: '人机交互66',
    cmf: 'CMF66',
    biSai: "和丰杯"
  }
  ]
  return arr
}

/*
  对外暴露接口
*/
module.exports = {
  getListData:getListData
}