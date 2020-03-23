// 折线图组件
import React, { Component } from 'react'
import { Card } from 'antd'
//按需导入
//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

class ChartConfig extends Component {
    getOption = () => {
        let option = {
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'transparent',
                textStyle: {
                    color: '#000'
                },
                position: function (point, params, dom, rect, size) {
                    //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
                    let x = point[0];//
                    let y = point[1];
                    let viewWidth = size.viewSize[0];
                    let viewHeight = size.viewSize[1];
                    let boxWidth = size.contentSize[0];
                    let boxHeight = size.contentSize[1];
                    let posX = 0;//x坐标位置
                    let posY = 0;//y坐标位置

                    if (x < boxWidth) {//左边放不开
                        posX = 5;
                    } else {//左边放的下
                        posX = x - boxWidth;
                    }

                    if (y < boxHeight) {//上边放不开
                        posY = 5;
                    } else {//上边放得下
                        posY = y - boxHeight;
                    }

                    return [posX, posY];

                },
                formatter(params) {
                    for (let x in params) {
                        return params[x].data.value + "/" + params[x].data.date;
                    }

                },

            },

            xAxis: {
                show: true,
                boundaryGap: false,
                data: ['2019-01', '2019-02', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01', '2019-01'
                ],
                axisLabel: {
                    show: false,
                },

            },
            yAxis: {
                show: false,
            },
            grid: {
                x: 0,
                x2: 0,
                y: 0,
                y2: 0,
            },

            series: [
                {
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    symbolSize: 8,
                    data: [{ 'date': '2019-01', 'value': '2.0' }, { 'date': '2019-02', 'value': '4.9' }, { 'date': '2019-01', 'value': '7.0' }, { 'date': '2019-01', 'value': '23.2' }, { 'date': '2019-01', 'value': '25.6' }, { 'date': '2019-01', 'value': '76.7' }, { 'date': '2019-01', 'value': '135.6' }, { 'date': '2019-01', 'value': '162.2' }, { 'date': '2019-01', 'value': '32.6' }, { 'date': '2019-01', 'value': '20.0' }, { 'date': '2019-01', 'value': '6.4' }, { 'date': '2019-01', 'value': '3.3' }],
                    areaStyle: {
                        normal: {
                            color: "rgba(0, 45, 194, 0.1)"//区域颜色
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#002DC2',
                            lineStyle: {

                                color: 'rgba(0, 45, 194, 0.25)' //改变折线颜色
                            }
                        }
                    }
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <Card.Grid className="line_b" >
                <ReactEcharts style={{ height: "15em" }} option={this.getOption()} />
            </Card.Grid>
        )
    }
}
export default ChartConfig;