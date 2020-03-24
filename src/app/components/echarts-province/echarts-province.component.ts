import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-province',
  templateUrl: './echarts-province.component.html',
  styleUrls: ['./echarts-province.component.css']
})
export class EchartsProvinceComponent implements OnInit {

  options: any;

  main1: any;
  main2: any;
  main3: any;

  constructor() { }

  ngOnInit() {
//     this.options = {
//       /*标题*/
//       title: {
//         text: '第一个 ECharts 实例'
//       },
//       tooltip: {
//         // trigger: 'axis'
//       },
//       legend: {
//         type: 'plain'
//       },
// /*      grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },*/
//       xAxis: {
//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//       },
//       yAxis: {
//
//       },
//       series: [
//         {
//           name: '昨日付费',
//           type: 'line',
//           stack: '总量',
//           areaStyle: {},
//           data: [820, 932, 901, 934, 1290, 1330]
//         }
//       ]
//     }

    this.options = {
      title: {  //标题: 为图表配置标题。
        text: '第一个 ECharts 实例'
      },
      tooltip: {  //提示信息: 配置提示信息。

      },
      legend: {//图例组件: 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
        data:['销量']
      },
      xAxis: {  //X 轴：配置要在 X 轴显示的项。
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },

      yAxis: {  //Y 轴：配置要在 Y 轴显示的项。

      },
      series: [{  //系列列表: 每个系列通过 type 决定自己的图表类型。
        name: '销量', //系列名称
        type: 'bar',  //系列图表类型
        data: [5, 20, 36, 10, 10, 20] //系列中的数据内容
      }]
    };

    this.main1 = {
      series : [
        {
          name: '访问来源',
          type: 'pie',    // 设置图表类型为饼图
          radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
          data:[          // 数据数组，name 为数据项名称，value 为数据项值
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ]
        }
      ]
    }

    this.main2 = {
      series : [
        {
          name: '访问来源',
          type: 'pie',  // 设置图表类型为饼图
          radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
          data:[  // 数据数组，name 为数据项名称，value 为数据项值
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ],
          roseType: 'angle',  //设置参数 roseType: 'angle' 把饼图显示成南丁格尔图。
          itemStyle: {  //阴影的配置: itemStyle 参数可以设置诸如阴影、透明度、颜色、边框颜色、边框宽度等。
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    this.main3 = {
      legend: {},
      tooltip: {},
      dataset: {
        // 提供一份数据。
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
      },
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
      xAxis: {type: 'category'},
      // 声明一个 Y 轴，数值轴。
      yAxis: {},
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
      ]
    }
  }

  onClick(ec) {
    // this.echartsIntance = ec;

    console.log('ss'+ec.name);
    console.log('ss'+ec.value);
  }
}
