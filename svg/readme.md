# svg
- 计算机的图形系统分为栅格图形（位图，像素点）和矢量图形（矢量图）
- svg 是xml表示的矢量文件，可以升级的，超强颜色控制的图像，gml表示地理位置的， 微软的vml，
svg和flash，后者是公司的，基于内部dom的二进制流文件


### 基本图形 
- line x1 y1 => x2 y2 
- rect (x y width height rx ry 是圆角)
- circle （cx xy 是圆心位置 r) 
- ellipse 椭圆 (cx xy rx ry)
> polygon 和 polyine 是完全一样的，就是polyline不闭合
```
<polygon points="10,10 100,199, 120,200 130,30" stroke="red" stroke-width="3">

</polygon>
```
- path 其他图形 

### 基本属性
- fill stroke stroke-width transform 
