// 折线图组件
import React,{Component} from 'react'
import {Card} from 'antd'
//按需导入
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

class ChartConfig extends Component {
    getOption = ()=>{
        let option = {
            tooltip:{
                trigger: 'axis'
            },
            xAxis: {
                show:true,
                boundaryGap: false,
                
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                axisLabel: {
                    show: false,}
            },
            yAxis: {
                show:true,
                data: [1,3,4],
                type: 'value', //数值轴，适用于连续数据
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: false,}
            },
            grid: {
                x: 0,
                x2: 0,
                y: 0,
                y2: 0,
            },

            series : [
                {type:'line',
                smooth:true,
                showSymbol: false,
                symbolSize: 8,
                    data:[1.1,1.2,1.3,1.4,1.5,2.1,2.2,2.6,1.1,1.2,1.3,1.4,1.5,2.1,2.2,2.6,],
                    areaStyle: {
                        normal:{
                            color:"rgba(0, 45, 194, 0.1)"//区域颜色
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:'#002DC2',
                            lineStyle:{ 

                                color:'rgba(0, 45, 194, 0.25)' //改变折线颜色
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
                <ReactEcharts style={{height:"15em"}} option={this.getOption()}/>
            </Card.Grid>
        )
    }
}
export default ChartConfig;