import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPLineChart extends MPChartBase {
    nativeView: LineChartView;
    createNativeView(): LineChartView;
    onLoaded(): void;
    resetZoomLineChart(): void;
}
