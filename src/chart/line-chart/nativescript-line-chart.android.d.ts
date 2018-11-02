import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPLineChart extends MPChartBase {
    nativeView: com.github.mikephil.charting.charts.LineChart;
    private showValueLabels;
    resetZoomLineChart(): void;
    createNativeView(): com.github.mikephil.charting.charts.LineChart;
}
