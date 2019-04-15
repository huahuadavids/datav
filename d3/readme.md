# My note

### d3 modules
- [d3-shape](https://github.com/d3/d3-shape#arcs) 图形
- [d3-zoom](https://github.com/d3/d3-zoom)
- [d3-drag](https://github.com/d3/d3-drag)
- [d3-ease](https://github.com/d3/d3-ease) 缓动动画 
- [d3-geo](https://github.com/d3/d3-geo-projection)

### geoJson
- [geojson](http://geojson.org/) 官网 
- [geojson.io](http://geojson.io/ )可以在线查看，绘制，修改GeoJSON数据
- [mapshaper](https://mapshaper.org/) 可以查看较大的geojson，还能够简化GeoJSON数据
- [geojson-maps](http://geojson-maps.ash.ms/) 获取国家的geojson 
  
 
### blogs
- [React, D3, SVG and Animation](https://codepen.io/clindsey/post/animating-svg-charts-built-with-react-and-d3)
- [d3 入门到精通系列](https://blog.csdn.net/tianxuzhang/article/list/4?)

### notes
- 和<svg>元素相比，g元素不支持定位属性x和y，需要定位的时候可以用变换属性代替: transform="translate(x,y)
```
var scale_x = d3.scaleBand()
.domain(d3.range(data.length))
.rangeRound([0, barchart_width])
.paddingInner(0.1); // 返回值乘以 1.1 
.paddingOuter(0.1); // 给左右两边留点间距  
```
- range and bands bands是某些特定数据，按照某种模式的集合，range只是一个简单的范围 
- bandWidth rangeBand数组中，两个数的间距，可定义为柱状图的宽度 
- scale的 range 改为 rangeRound，可以让视图域，只取整数，因为d3对svg的小数处理不精确
- paddingInner 是中间的两个bandWidth的距离 可以把返回值增大
- paddingOuter 是边上的两个的
- defined 方法 ，过滤合适的数据 ，图形会断开
