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

        var colors = Highcharts.getOptions().colors,
        categories = [
          this.props.cat_1,
          this.props.cat_2,
        ],
        data = [
          {
            "y": this.props.clicked,
            "color": colors[2],
            "drilldown": {
              "name": "Chrome",
              "categories": [
                "match",
                "interestingness",
              ],
              "data": [
                this.props.subClickedMatch,
                this.props.subClickedInterestingness
              ]
            }
          },
          {
            "y":this.props.notClicked,
            "color": colors[1],
            "drilldown": {
              "name": "Firefox",
              "categories": [
                "match",
                "intrestingness",
              ],
              "data": [
                this.props.subMatch,
                this.props.subInterestingness
              ]
            }
          },
        ],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
      
      
      // Build the data arrays
      for (i = 0; i < dataLen; i += 1) {
      
        // add browser data
        browserData.push({
          name: categories[i],
          y: data[i].y,
          color: data[i].color
        });
      
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - (j / drillDataLen) / 5;
          versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
          });
        }
      }
      
          
        const values = this.props.categories
        console.log(values)
        var myChart = Highcharts.chart(this.props.id, {
            chart: {
                type: 'pie',
                width: this.props.width,
                height: this.props.height,
                margin: 0,
              },
              title: {
                text: this.props.title
              },
              subtitle: {
                text: ''
              },
              yAxis: {
                title: {
                  text: ''
                }
              },
              pie: {
                slicedOffset: 0,
              },
              plotOptions: {
                pie: {
                  shadow: false,
                  center: ['50%', '50%']
                }
              },
              tooltip: {
                valueSuffix: '%'
              },
              series: [{
                name: this.props.subTitle,
                data: browserData,
                size: '60%',
                dataLabels: {
                  formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                  },
                  color: '#ffffff',
                  distance: -30
                }
              }, {
                name: 'Interestingness / Match',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                  formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                      this.y + '%' : null;
                  }
                },
                id: 'versions'
              }],
              responsive: {
                rules: [{
                  condition: {
                    maxWidth: 1000
                  },
                  chartOptions: {
                    series: [{
                      id: 'versions',
                      dataLabels: {
                        enabled: false
                      }
                    }]
                  }
                }]
              }
            });}
  
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
