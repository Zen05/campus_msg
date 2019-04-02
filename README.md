# campus_msg
this is my project for learn Android 
> version id :3bc3c696(3.3)
> 启动本人设备上的安卓虚拟机命令
D:\Android\sdk\tools\emulator.exe -netdelay none -netspeed full -avd my_phone
> 启动项目
npm start

## 待完成事项
1. 下一步开发留言板块√ 
2. 问卷调查板块问卷调查
3. 管理员模块的开发
>1. 数据库的搭建√
>2. 服务器的搭建√——> 目前只完成了获取数据的功能，设置数据属于管理员端，暂时还未完成。
>3. 前端页面的展示√->提交数据有待完成(目前不能对所选的问题进行定位)√ ->发送数据出错
4. 管理员模块中的发布文章模块
5. 管理员模块中的发布问卷模块

## 问题待解决事项
1. notificationDetail 下点赞功能尚未完善，handlerZan位于102行，问题:点击点赞图片时该函数不执行 
2. 评论的功能已经完成，但任有一个问题：评论成功后返回上一个页面后页面的评论内容没有刷新，该功能放入待解决事项中
## 已经解决的问题
1. value 中的属性读取不了。以至于不能按需求显示选项 试着使用一下散播语法 --》 用style的display

this is this.state.data: Array [
 Object {
   "A": "采取国务院发布的放假方案调休，共四天假期",
   "B": "在上述方案下再将前一周的周六调至五一假期中，共五天假期",
   "C": null,
   "D": null,
   "E": null,
   "F": null,
   "G": null,
   "H": null,
   "I": null,
   "qid": 1,
   "tid": 1,
   "title": "五一即将来临，我们将对五一的休假计划做意见收集",
 },
 Object {
   "A": "不补假",
   "B": "补周一的假",
   "C": "补周二的假",
   "D": "补周3的假",
   "E": "补周四的假",
   "F": "补周五的假",
   "G": null,
   "H": null,
   "I": null,
   "qid": 1,
   "tid": 2,
   "title": "五一补假方案",
 },
 Object {
   "A": "参加",
   "B": "不参加",
   "C": null,
   "D": null,
   "E": null,
   "F": null,
   "G": null,
   "H": null,
   "I": null,
   "qid": 1,
   "tid": 3,
   "title": "五一是否参加学校组织的活动",
 },
 Object {
   "A": "不去玩，认真学习",
   "B": "在家自己玩",
   "C": "找朋友玩",
   "D": "出去玩",
   "E": "自己一个人玩",
   "F": null,
   "G": null,
   "H": null,
   "I": null,
   "qid": 1,
   "tid": 4,
   "title": "五一不参加活动你去哪里玩",
 },
]