import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPLineChart extends MPChartBase {
    nativeView: LineChartView;
    private showValueLabels;
    createNativeView(): LineChartView;
    onLoaded(): void;
    resetZoomLineChart(): void;
}
