import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  options: any = {};
  options2: any = {};
  data: any
  data2 : any
  settings: any
  themeSubscription: any;


  constructor(private theme: NbThemeService, private http: HttpClient) {




  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      
    this.http.get('http://localhost:3000/students').subscribe((res) => {
      this.data = res
      console.log("it works")
    })

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['SBA', 'SHSS', 'SSE'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Schools',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 420, name: 'SBA' },
              { value: 100, name: 'SHSS' },
              { value: 234, name: 'SSE' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };

      this.options2 = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Ws', 'WFs'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['Sep', 'Oct', 'Nov', 'Dec'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'Ws',
            type: 'line',
            smooth: true,
            data: [3, 90, 9, 5],
          },
          {
            name: 'WFs',
            type: 'line',
            smooth: true,
            data: [0, 2, 9, 5],
          },
        ],
      }

      this.settings = {
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true,
        },
          columns: {
            std_id: {
              title: 'Student ID'
            },
            first_name: {
              title: 'First Name'
            },
            last_name: {
              title: 'Last Name'
            },
            email: {
              title: 'Course Load'
            },
            currentGPA: {
              title: 'Current GPA'
            }, 
            currentStatus: {
              title: 'Current Status'
            }
          }
      }

      
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
