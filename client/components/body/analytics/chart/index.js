import React from 'react';
import styles from './chart.scss';

var Highcharts = require('highcharts');

require('highcharts/modules/exporting')(Highcharts);


export default class Chart extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }


    line = () => {
        var myChart = Highcharts.chart(this.props.id, 
            {
                chart: {
                    type: this.props.type,
                    width: this.props.width,
                    height: this.props.height
                },
                colors: this.props.color,
                title: {
                    text: this.props.title
                },
                subtitle: {
                    text: this.props.subTitle
                },
                xAxis: {
                    type: 'datetime',
                    // maxZoom:  100 * 24 * 3600000, // fourteen days
                    // labels: {
                    //     formatter: function() {
                    //         console.log(extraValues())
                    //         return values[this.value]//extraValues().range[this.value];
                    //     }
                    // },
                    
                    startOnTick: false,
                    endOnTick: false,
                    minPadding: 0,
                    maxPadding: 0,
                    
                    gridLineWidth: 0
                },
                yAxis: {
                    tickmarkPlacement: 'on',
                    // gridLineWidth: 0,
                    // type: 'linear',
                    
                    title: {
                        text: this.props.yAxisTitle
                    }
                },
                plotOptions: {
                    column: {
                        // pointPlacement: 'on'
                    },
                    series: {
                        lineWidth: 1.2
                    },
                    line: {
                        dataLabels: {
                        enabled: false
                        },
                        enableMouseTracking: true
                    }
                },
                series: this.props.series
            }
        );
    };
    
    bar = () => {
        const direction = this.props.direction;
        let type;
        if(direction === 'leftToRight') 
            type ='bar'
        else
            type ='column'

        var myChart = Highcharts.chart(this.props.id, {
            chart: {
                type: type,
                // Edit chart spacing
                // spacingBottom: 15,
                // spacingTop: 10,
                // spacingLeft: 10,
                // spacingRight: 10,

                // Explicitly tell the width and height of a chart
                width: this.props.width,
                height: this.props.height
            },
            colors: this.props.color,    
            
            title: {
                text: this.props.title
            },
            subtitle: {
                text: this.props.subTitle
            },
            xAxis: {
                categories: this.props.categories
            },
            yAxis: {
                title: {
                    text:  this.props.yAxisTitle
                }
            },
            series: this.props.series
        }

        )
    }

     area = () => {
        const values = this.props.categories
        console.log(values)
        var myChart = Highcharts.chart(this.props.id, {
            chart: {
                type: this.props.type,
                // Edit chart spacing
                // spacingBottom: 15,
                // spacingTop: 10,
                // spacingLeft: 10,
                // spacingRight: 10,

                // Explicitly tell the width and height of a chart
                width: this.props.width,
                height: this.props.height
            },
            colors: this.props.color, //['#0052CC', '#0051ca99'],    
            title: {
                text: this.props.title //'Fruit Consumption'
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return values[this.value];
                    }
                },
                
                startOnTick: false,
                endOnTick: false,
                minPadding: 0,
                maxPadding: 0,
                
                gridLineWidth: 1
            },
            yAxis: {
                title: {
                    text: this.props.yAxisTitle//'Fruit eaten'
                }
            },
            series: this.props.series
        }

        );
     }

     pie = () => {
        const values = this.props.categories
        console.log(values)
        var myChart = Highcharts.chart(this.props.id, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: this.props.width,
                height: this.props.height
            },
            title: {
                text: ''
            },
            // colors: this.props.color, //['#0052CC', '#0051ca99'],    
              
              tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                }
              },
              series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                  name: 'Chrome',
                  y: 80,
                  sliced: true,
                  selected: true
                }, {
                  name: 'Internet Explorer',
                  y: 20
                },
                ]
              }]
            });
        }
  
     componentDidMount(){
        if(this.props.type=== 'line')
            this.line();  
        else if(this.props.type === 'area')
            this.area();
        else if(this.props.type === 'bar')
            this.bar();
        else if(this.props.type === 'pie')
            this.pie();
    }


    render(){
        return(
            <div id={this.props.id} className={styles.chart} ></div>
        )
    }
}
