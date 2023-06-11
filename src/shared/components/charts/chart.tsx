import { HighchartsReact } from "highcharts-react-official";
import * as HighCharts from 'highcharts';
import { ChartProps } from "../../models/chart.interface";

export const Chart = (props: ChartProps) => {
    return <HighchartsReact highcharts={HighCharts} {...props} />
}
