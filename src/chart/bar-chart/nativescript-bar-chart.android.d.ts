import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPBarChart extends MPChartBase {
    nativeView: com.github.mikephil.charting.charts.BarChart;
    private showValueLabels;
    resetZoomLineChart(): void;
    createNativeView(): com.github.mikephil.charting.charts.BarChart;
}
