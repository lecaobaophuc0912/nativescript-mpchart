import { View, Property } from "tns-core-modules/ui/core/view";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { Color } from "tns-core-modules/color";
import { ChartMarkerConfig } from "../chart/custom-marker-view/custom-marker-view.common";
export declare class MPChartBase extends View {
    resetZoomLineChart(): void;
}
export interface DataSetChartInterface {
    x: number;
    y: number;
}
export interface DataSetLabelInterface {
    xAxisValue: number;
    label: string;
}
export interface YAxisFormatterInterface {
    type: TypeFormatter;
    numberOfDigits?: number;
}
export interface DataLineChartInterface {
    dataSet: Array<DataSetChartInterface>;
    lineColor: Color;
    highlighColor?: Color;
    circleHoleEnabled?: boolean;
    circleColor?: Color;
    circleEnable?: boolean;
    legendLabel?: string;
}
export interface DataBarChartInterface {
    dataSet: Array<DataSetChartInterface>;
    legendLabel?: string;
    highlighColor?: Color;
    barColor?: Color;
}
export declare type XAxisLabelPosition = "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside";
export declare type TypeFormatter = "Int" | "Float";
export declare const itemsProperty: Property<MPChartBase, DataLineChartInterface[]>;
export declare const labelsProperty: Property<MPChartBase, DataSetLabelInterface[]>;
export declare const showLegendProperty: Property<MPChartBase, boolean>;
export declare const showGridLinesProperty: Property<MPChartBase, boolean>;
export declare const scaleEnableProperty: Property<MPChartBase, boolean>;
export declare const descriptionTextProperty: Property<MPChartBase, string>;
export declare const descriptionXOffsetProperty: Property<MPChartBase, number>;
export declare const descriptionYOffsetProperty: Property<MPChartBase, number>;
export declare const descriptionTextColorProperty: Property<MPChartBase, Color>;
export declare const descriptionTextColorCssProperty: CssProperty<Style, Color>;
export declare const highlightPerTapEnabledProperty: Property<MPChartBase, boolean>;
export declare const highlightPerDragEnabledProperty: Property<MPChartBase, boolean>;
export declare const xAxisGranularityProperty: Property<MPChartBase, number>;
export declare const leftAxisGranularityProperty: Property<MPChartBase, number>;
export declare const rightAxisGranularityProperty: Property<MPChartBase, number>;
export declare const xAxisLabelPositionProperty: Property<MPChartBase, XAxisLabelPosition>;
export declare const xAxisLineColorProperty: Property<MPChartBase, Color>;
export declare const xAxisLineColorCssProperty: CssProperty<Style, Color>;
export declare const leftAxisLineColorProperty: Property<MPChartBase, Color>;
export declare const leftAxisLineColorCssProperty: CssProperty<Style, Color>;
export declare const rightAxisLineColorProperty: Property<MPChartBase, Color>;
export declare const rightAxisLineColorCssProperty: CssProperty<Style, Color>;
export declare const xAxisTextColorProperty: Property<MPChartBase, Color>;
export declare const xAxisTextColorCssProperty: CssProperty<Style, Color>;
export declare const leftAxisTextColorProperty: Property<MPChartBase, Color>;
export declare const leftAxisTextColorCssProperty: CssProperty<Style, Color>;
export declare const rightAxisTextColorProperty: Property<MPChartBase, Color>;
export declare const rightAxisTextColorCssProperty: CssProperty<Style, Color>;
export declare const xAxisMinValueProperty: Property<MPChartBase, number>;
export declare const xAxisMaxValueProperty: Property<MPChartBase, number>;
export declare const leftAxisMinValueProperty: Property<MPChartBase, number>;
export declare const leftAxisMaxValueProperty: Property<MPChartBase, number>;
export declare const rightAxisMinValueProperty: Property<MPChartBase, number>;
export declare const rightAxisMaxValueProperty: Property<MPChartBase, number>;
export declare const leftAxisFormatterProperty: Property<MPChartBase, YAxisFormatterInterface>;
export declare const rightAxisFormatterProperty: Property<MPChartBase, YAxisFormatterInterface>;
export declare const fontProperty: Property<MPChartBase, string>;
export declare const showValueLabelsProperty: Property<MPChartBase, boolean>;
export declare const showLeftAxisProperty: Property<MPChartBase, boolean>;
export declare const showRightAxisProperty: Property<MPChartBase, boolean>;
export declare const markerProperty: Property<MPChartBase, ChartMarkerConfig>;
