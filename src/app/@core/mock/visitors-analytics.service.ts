import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { OutlineData, VisitorsAnalyticsData } from '../data/visitors-analytics';

@Injectable()
export class VisitorsAnalyticsService extends VisitorsAnalyticsData {

  constructor(private periodService: PeriodsService) {
    super();
  }

  private pieChartValue = 75;
  private innerLinePoints: number[] = [
   12,36,20
  ];
  private outerLinePoints: number[] = [
    14,20,35
  ];
  private generateOutlineLineData(): OutlineData[] {
    const months = this.periodService.getMonths();
    const outerLinePointsLength = this.outerLinePoints.length;
    const monthsLength = months.length;

    return this.outerLinePoints.map((p, index) => {
      const monthIndex = Math.round(index / 4);
      const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
        ? months[monthIndex]
        : '';

      return {
        label,
        value: p,
      };
    });
  }

  getInnerLineChartData(): Observable<number[]> {
    return observableOf(this.innerLinePoints);
  }

  getOutlineLineChartData(): Observable<OutlineData[]> {
    return observableOf(this.generateOutlineLineData());
  }

  getPieChartData(): Observable<number> {
    return observableOf(this.pieChartValue);
  }
}
