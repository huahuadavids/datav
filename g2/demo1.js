const data = [
  {name: 'Sports', sold: 275},
  {name: 'Strategy', sold: 115},
  {name: 'Action', sold: 120},
  {name: 'Shooter', sold: 350},
  {name: 'Other', sold: 150}
];

const data1 = [
  {name: 'xfoot', sold: 275},
  {name: 'adidas', sold: 300},
  {name: 'nike', sold: 120},
  {name: 'newbee', sold: 350},
  {name: 'Other', sold: 150}
];


const chartConfig = {
  container: 'app', // container
  width: 600, // 指定图表宽度
  height: 400, // 指定图表高度
  background: '#ccc',
  animate: true,  // 关闭图表动画
  forceFit: true, // 自适应宽度 width 就没有意义了 chart.forceFit();手动调用函数也可以
  padding: [20, 20, 95, 80] // 上，右，下，左
}

const chart = new G2.Chart(chartConfig);

// Step 2: 载入数据源
chart.source(data,
  {
    sold: {
      min: 0,
      max: 400
    }
  });

// Step 3：创建图形语法，绘制柱状图，由 name 和 sold 两个属性决定图形位置，name 映射至 x 轴，sold 映射至 y 轴
chart.interval().position('name*sold').color('name')


// Step 4: 渲染图表
chart.render();

/**
 * @换数据
 */

setTimeout(() => {
  chart.changeData(data1);
}, 2000)

/**
 * @name 重新绘制chart
 *
 * @code
 * chart.clear(); // 清理所有
 chart.source(newData); // 重新加载数据
 chart.interval().position('x*y').color('z');
 chart.render();
 */


/**
 * @name dataset
 * 先内置的数据处理模块 frame 从 G2 包中抽离出来，独立成为 DataSet
 *
 * @feature
 * - 源数据的解析，将 CSV, DSV, GeoJSON 转成标准的JSON，查看 Connector
 - 加工数据，包括 filter, map, fold(补数据) 等操作，查看 Transform
 - 统计函数，汇总统计、百分比、封箱 等统计函数，查看 Transform
 - 特殊数据处理，包括 地理数据、矩形树图、桑基图、文字云 的数据处理，查看 Transform
 *
 */




