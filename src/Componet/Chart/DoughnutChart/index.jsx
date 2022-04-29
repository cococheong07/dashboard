
import React from "react";
import CanvasJSReact from './canvasjs.react';

//import {Chart as ChartJS} from "chart.js/auto";
React = require('react');
const Component = React.Component;
CanvasJSReact = require('./canvasjs.react');

CanvasJSReact.CanvasJS = undefined;
CanvasJSReact.CanvasJSChart = undefined;
// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart; 
class DoughnutChart extends Component {
        render() {
            const options = {
                animationEnabled: true,
                title: {
                    text: "Customer Satisfaction"
                },
                subtitles: [{
                    text: "71% Positive",
                    verticalAlign: "center",
                    fontSize: 24,
                    dockInsidePlotArea: true
                }],
                data: [{
                    type: "doughnut",
                    showInLegend: true,
                    indexLabel: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [
                        { name: "Unsatisfied", y: 5 },
                        { name: "Very Unsatisfied", y: 31 },
                        { name: "Very Satisfied", y: 40 },
                        { name: "Satisfied", y: 17 },
                        { name: "Neutral", y: 7 }
                    ]
                }]
            }
            return (
                <div>
                    <CanvasJSChart options = {options}
                        /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            );
        }
}
export default DoughnutChart;