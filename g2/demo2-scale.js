/**
 * @name scale 度量
 * 原始数据到 【0，1】的转变

 * @name 度量类型

 连续
 linear、 数值之间跳跃不大 0，1，3，4
 log、 数值之间跳跃very大 0 ，200， 100000
 pow、
 time
 分类（非连续） cat、timeCat
 */



const chartConfig = {
  container: 'app', // container
  width: 1000, // 指定图表宽度
  height: 400, // 指定图表高度
}

const chart = new G2.Chart(chartConfig);

/**
 * @linear
 * const data = [
 { name: '张三', score: 53 },
 { name: '王五', score: 92 }
 ];

   chart.source(data, {
    score: {
      min: 0,
      max: 100,
      type: 'linear', //默认就是
      maxLimit:100,
      tickCount: 4 //有几个间隔点 4个就是3段 就是超了100 max就没作用那个了
    }
  });
 chart.point().position('name*score').color('name');
 *
 */

/**
 *@name log
const data = [
  { site: '站点1', pv: 10 },
  { site: '站点2', pv: 99 },
  { site: '站点3', pv: 10000 }
];


chart.source(data, {
  pv: {
    type: 'log',
    base: 10
  }
})

chart.point().position('site*pv').color('pv');
*/

/**
 *@NAME POW
const data = [
  { site: '站点1', pv: 2 },
  { site: '站点2', pv: 4 },
  { site: '站点3', pv: 8 },
  { site: '站点4', pv: 16 }
];


chart.source(data, {
  pv: {
    type: 'pow'
  }
})

chart.point().position('site*pv').color('pv');

*/


/**
 *@name time
const data = [
  { time: '2015-03-01', pv: 2 },
  { time: '2015-03-02', pv: 4 },
  { time: '2015-03-03', pv: 8 },
  { time: '2015-03-05', pv: 16 }
];


chart.source(data, {
  pv: {
    type: 'time',
    mask: {string}, // 指定时间的显示格式，默认：'YYYY-MM-DD'
  }
})

chart.point().position('time*pv').color('pv');

chart.render();

*/

/**
 * @NAME CAT
 * const data  = [
 { a: 'a1', b:'b1', type: '最小' },
 { a: 'a2', b:'b2', type: '最大' },
 { a: 'a3', b:'b3', type: '适中' }
 ];

 const config = {}
 chart.source(data, config)

 // 此方法会覆盖 config的配置
 chart.scale('type', {
  type: 'cat',
  values: [ '最小', '适中', '最大' ],
  alias: '类型'
});
 chart.point().position('a*type').color('type')
 */

/**
 * @name 自定义列
 * @type {*[]}
 */


const data = [
  { value: 10, time: '2015-03-01T16:00:00.000Z' },
  { value: 15, time: '2015-03-01T16:10:00.000Z' },
  { value: 26, time: '2015-03-01T16:20:00.000Z' },
  { value: 9, time: '2015-03-01T16:30:00.000Z' },
  { value: 12, time: '2015-03-01T16:40:00.000Z' },
  { value: 23, time: '2015-03-01T16:50:00.000Z' },
  { value: 18, time: '2015-03-01T17:00:00.000Z' },
  { value: 21, time: '2015-03-01T17:10:00.000Z' },
  { value: 22, time: '2015-03-01T17:20:00.000Z' }
];

chart.source(data, {
  'time': {
    type: 'time',
    nice: false,
    mask: 'HH:mm'
  },
  'value': {
    formatter: val => {
      return val + ' k';
    },
    min: 0,
    max: 50
  }
});
chart.line().position('time*value').size(2);





chart.render();