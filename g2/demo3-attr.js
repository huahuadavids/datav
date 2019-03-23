/**
 *@author zhangyuhua
 *@DATE 2019-03-22 16:38
 */
/**
// g2 没有特别的图表类型 是几何标识决定的
const geom = chart.point().xx().xx(); // 这里使用了 point 类型的 geom，该方法会返回 geom 对象
 */


$.getJSON('/assets/data/avg-temp.json', function(data) {
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: [ 'New York', 'San Francisco', 'Austin' ],
    key: 'city',
    value: 'value'
  });
  const chart = new G2.Chart({
    container: 'c1',
    forceFit: true,
    height : 400,
    padding: [ 20, 120, 80, 80 ]
  });
  chart.source(dv, {
    date: {
      type: 'time',
      mask: 'YYYY.MM',
      tickCount: 12
    },
    value: {
      alias: 'Temperature, ºF'
    }
  });
  chart.axis('date', {
    line: null,
    tickLine: {
      stroke: '#000',
      length: 6 // 刻度线长度
    }
  });
  chart.axis('value', {
    tickLine: {
      stroke: '#000',
      length: 6 // 刻度线长度
    },
    label: {
      textStyle: {
        fill: '#000'
      }
    },
    line: {
      stroke: '#000'
    },
    grid: null
  });
  chart.line()
    .position('date*value')
    .color('city', [ '#1f77b4', '#ff7f0e', '#2ca02c' ])
    .shape('spline')
    .size(2);
  chart.render();
});








