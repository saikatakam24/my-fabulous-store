import * as HighCharts from 'highcharts';

export const BAR_CHART_OPTIONS: HighCharts.Options = {
    title: {
        align: 'left'
    },
    subtitle: {
        align: 'left'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    legend: {
        enabled: true
    }
}