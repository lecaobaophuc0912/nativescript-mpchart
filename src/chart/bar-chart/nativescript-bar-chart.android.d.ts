import { MPChartBase } from "../nativescript-mpchart.common";
import { ChartMarkerConfig, ConfigDisplayData } from "../custom-marker-view/custom-marker-view.common";
export declare class MPBarChart extends MPChartBase {
    nativeView: com.github.mikephil.charting.charts.BarChart;
    private showValueLabels;
    resetZoomLineChart(): void;
    createNativeView(): com.github.mikephil.charting.charts.BarChart;
}
export declare class CustomChartMarkerView extends com.github.mikephil.charting.components.MarkerView {
    private textView;
    private context;
    backgroundViewColor: number;
    fontSize: number;
    textColor: number;
    minWidth: number;
    minHeight: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    textAlignment: number;
    borderRadius: number;
    displayData: ConfigDisplayData;
    xOffset: number;
    yOffset: number;
    packageName: any;
    constructor(context: android.content.Context, layoutResource: number);
    refreshContent(entry: com.github.mikephil.charting.data.Entry, highlight: com.github.mikephil.charting.highlight.Highlight): void;
    getOffset(): com.github.mikephil.charting.utils.MPPointF;
    setLabel(entry: com.github.mikephil.charting.data.Entry): void;
    setConfig(config: ChartMarkerConfig): void;
    setDefault(): void;
}
