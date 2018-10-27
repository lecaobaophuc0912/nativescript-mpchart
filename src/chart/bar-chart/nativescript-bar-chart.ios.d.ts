import { MPChartBase } from "../nativescript-mpchart.common";
export declare class MPBarChart extends MPChartBase {
    nativeView: BarChartView;
    createNativeView(): BarChartView;
    onLoaded(): void;
    resetZoomLineChart(): void;
}
