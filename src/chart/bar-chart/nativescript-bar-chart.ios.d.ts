import { MPChartBase } from "../nativescript-mpchart.common";
import { ChartMarkerConfig, ConfigDisplayData } from "../custom-marker-view/custom-marker-view.common";
export declare class MPBarChart extends MPChartBase {
    nativeView: any;
    private showValueLabels;
    createNativeView(): BarChartView;
    onLoaded(): void;
    resetZoomLineChart(): void;
}
export declare class CustomChartMarkerView extends ChartMarkerView {
    label: UILabel;
    backgroundViewColor: UIColor;
    font: UIFont;
    fontSize: number;
    textColor: UIColor;
    minimumSize: CGSize;
    insets: UIEdgeInsets;
    textAlignment: NSTextAlignment;
    borderRadius: number;
    contentCenter: boolean;
    displayData: ConfigDisplayData;
    xOffset: number;
    yOffset: number;
    private nsStringLabel;
    private labelSize;
    private paragraphStyle;
    private drawAttributes;
    initWithFrame(frame: CGRect): this;
    refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
    removeAllSubview(): void;
    setLabel(entry: ChartDataEntry): void;
    setConfig(config: ChartMarkerConfig): void;
    setDefault(): void;
}
