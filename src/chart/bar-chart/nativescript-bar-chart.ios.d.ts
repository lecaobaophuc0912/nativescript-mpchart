import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPBarChart extends MPChartBase {
    nativeView: BarChartView;
    private showValueLabels;
    createNativeView(): BarChartView;
    onLoaded(): void;
    resetZoomLineChart(): void;
}
