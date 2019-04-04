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
- path 任意图形 
> M 代表move L 代表 line Z代表闭合 Q代表曲线 
```
 <path d="
     M 10,10
     L 100,200
     L 230,240
     Z
      M 210,110
      L 200,200
      L 330,340
      Z

     " stroke="red" fill="none" stroke-width="3">
    </path>

    <path d="
     M 110,10
     L 100,200
     L 230,240
     Q 200,300 400,500
     " stroke="green" fill="none" stroke-width="3">
    </path>

```
- text
```
<a href="http://baidu.com">
        <text fill="blue" x="40" y="40" font-size="24">
            hello huahuadavids
            <tspan x="300" y="40">
                huaua
            </tspan>
        </text>
    </a>
    
// SVG的文本可以沿着一条自定义的Path来排布，比如曲线、圆形等等 

     <defs>
        <path id="MyPath"
              d="M 20 200
                 C 200 100 300   0 400 100
                 C 500 200 600 300 700 200
                 C 800 100 900 100 900 100" />
      </defs>
      
      <text font-family="Verdana" font-size="22.5" stroke="red">
        <textPath xlink:href="#MyPath">
          We go up, then we go down, then up again
        </textPath>
      </text>
    
```
- 重复利用元素
```
<defs>
        <rect id="rect" x="10" y="10" width="300" height="40">

        </rect>
    </defs>

    <use xlink:href="#rect">

    </use>
```



### 基本属性
- viewBox="0 0 500 500" 定义试图范围 
- opacity 是全部透明度 ， stroke-opacity fill-opacity 
- fill stroke stroke-width 
- transform
- 可以写style 属性都可以写里边 
- line的 stroke-linecap="round" 线头是圆的 
- stroke-linejoin = round 线条相交的处理，是圆的 
- circle 就是 ellipse的 rx = ry 

