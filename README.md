# datav 

### 数据和信息
> 数据是纯粹的事实，纯粹意味着这种事实没有任何处理，意义也没有得到揭示
，但是信息是数据处理的结果，它揭示了数据的意义，而且是数据的可视化表示 

### 大数据 
- 抛弃不精确的样本数据，分析全部数据（小数据时代 随机采样分析 依赖随机性，很难做到 ）
- 着眼数据的完整性，弱化单条数据精确性 


http://geojson.io/    可以在线查看，绘制，修改GeoJSON数据

https://mapshaper.org/ 可以查看较大的geojson，还能够简化GeoJSON数据

### d3
> d3是data driven documents 数据驱动文档的缩写
- [d3中文教程](https://blog.csdn.net/qq_34414916/article/details/80026029)
- [d3官方教程](https://github.com/d3/d3/wiki/tutorials)
- [d3插件](https://github.com/d3/d3-plugins)


#### d3把数据和图形关联的模式叫做 enter-update-exit 模式 ，
- 如数据领域a（数据）和图形领域b（图形）的交集 A∩B ，我们用selection.data(data) 表示这个交集 ，函数的返回值
表示绑定了数据的D3对象集合，我们就可以处理新集合，这个新集合的状态叫做更新（update mode）状态,
- 没有被可视化的数据，记做A和B的差集，A\B ,为了得到这个结果，我们需要selection.data(data).enter()，
这个函数返回一个全新的D3对象集合，表示没有被可视化的数据 ，在这个集合上的函数操作且关联图形，这个状态叫做 进入状态（enter mode）
- 没有数据管理的图形，B\A，表示删除数据后，失去数据关联的图形集合，可以通过函数 selection.exit得到，当我们在这个新的集合调用相关
函数操作更新或者删除不需要的图形，这个状态叫做exit mode 退出状态 

#### d3其他操作
- selection.sort 是排序，
- selection.filter 是过滤 
- d3.json 可以从服务端拉取json数据  

#### d3之函数和映射
> 函数F，是集合A到集合B的映射，如果A是数据域，B是图形域，函数f就是把集合
A映射到B的一个尺度(scale)












