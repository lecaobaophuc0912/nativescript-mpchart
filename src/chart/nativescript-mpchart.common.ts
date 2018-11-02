import { View, Property, EventData, booleanConverter } from "tns-core-modules/ui/core/view";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { Color } from "tns-core-modules/color";
import { ChartMarkerConfig } from "../chart/custom-marker-view/custom-marker-view.common"

export class MPChartBase extends View {
    public resetZoomLineChart() {
    }
}
export interface DataSetChartInterface {
    x: number;
    y: number;
}

export interface DataSetLabelInterface {
    xAxisValue: number,
    label: string
}

export interface YAxisFormatterInterface {
    type: TypeFormatter,
    numberOfDigits?: number
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
    highlighColor?: Color,
    barColor?: Color;
}
// Type
export type XAxisLabelPosition = "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside";
export type TypeFormatter = "Int" | "Float"

// Property

export const itemsProperty = new Property<MPChartBase, Array<DataLineChartInterface>>({
    name: "items"
});
itemsProperty.register(MPChartBase);

export const labelsProperty = new Property<MPChartBase, Array<DataSetLabelInterface>>({
    name: "labels"
});
labelsProperty.register(MPChartBase);

export const showLegendProperty = new Property<MPChartBase, boolean>({
    name: "showLegend",
    defaultValue: true,
    valueConverter: booleanConverter
});
showLegendProperty.register(MPChartBase);

export const showGridLinesProperty = new Property<MPChartBase, boolean>({
    name: "showGridLines",
    defaultValue: false,
    valueConverter: booleanConverter
});
showGridLinesProperty.register(MPChartBase);

export const scaleEnableProperty = new Property<MPChartBase, boolean>({
    name: "scaleEnable",
    defaultValue: false,
    valueConverter: booleanConverter
});
scaleEnableProperty.register(MPChartBase);


export const descriptionTextProperty = new Property<MPChartBase, string>({
    name: "descriptionText",
    defaultValue: "",
    valueConverter: (v) => {
        if (v || v === '') {
            return v.toString();
        }
        else {
            return "";
        }
    }
});
descriptionTextProperty.register(MPChartBase);

export const descriptionXOffsetProperty = new Property<MPChartBase, number>({
    name: "descriptionXOffset",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'descriptionXOffset' must be a number");
    }
});
descriptionXOffsetProperty.register(MPChartBase);

export const descriptionYOffsetProperty = new Property<MPChartBase, number>({
    name: "descriptionXOffset",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'descriptionYOffset' must be a number");
    }
});
descriptionYOffsetProperty.register(MPChartBase);


export const descriptionTextColorProperty = new Property<MPChartBase, Color>({
    name: "descriptionTextColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
descriptionTextColorProperty.register(MPChartBase);


export const descriptionTextColorCssProperty = new CssProperty<Style, Color>({
    name: "descriptionTextColor",
    cssName: "description-text-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
descriptionTextColorCssProperty.register(Style);

export const highlightPerTapEnabledProperty = new Property<MPChartBase, boolean>({
    name: "highlightPerTapEnabled",
    defaultValue: false,
    valueConverter: booleanConverter
});
highlightPerTapEnabledProperty.register(MPChartBase);

export const highlightPerDragEnabledProperty = new Property<MPChartBase, boolean>({
    name: "highlightPerDragEnabled",
    defaultValue: false,
    valueConverter: booleanConverter
});
highlightPerDragEnabledProperty.register(MPChartBase);


export const xAxisGranularityProperty = new Property<MPChartBase, number>({
    name: "xAxisGranularity",
    defaultValue: 1,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'xAxisGranularity' must be a number");
    }
});
xAxisGranularityProperty.register(MPChartBase);

export const leftAxisGranularityProperty = new Property<MPChartBase, number>({
    name: "leftAxisGranularity",
    defaultValue: 1,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'leftAxisGranularity' must be a number");
    }
});
leftAxisGranularityProperty.register(MPChartBase);

export const rightAxisGranularityProperty = new Property<MPChartBase, number>({
    name: "rightAxisGranularity",
    defaultValue: 1,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'rightAxisGranularity' must be a number");
    }
});
rightAxisGranularityProperty.register(MPChartBase);


export const xAxisLabelPositionProperty = new Property<MPChartBase, XAxisLabelPosition>({
    name: "xAxisLabelPosition",
});
xAxisLabelPositionProperty.register(MPChartBase);

export const xAxisLineColorProperty = new Property<MPChartBase, Color>({
    name: "xAxisLineColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

xAxisLineColorProperty.register(MPChartBase);

export const xAxisLineColorCssProperty = new CssProperty<Style, Color>({
    name: "xAxisLineColor",
    cssName: "x-axis-line-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
xAxisLineColorCssProperty.register(Style);


export const leftAxisLineColorProperty = new Property<MPChartBase, Color>({
    name: "leftAxisLineColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

leftAxisLineColorProperty.register(MPChartBase);

export const leftAxisLineColorCssProperty = new CssProperty<Style, Color>({
    name: "leftAxisLineColor",
    cssName: "left-axis-line-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
leftAxisLineColorCssProperty.register(Style);

export const rightAxisLineColorProperty = new Property<MPChartBase, Color>({
    name: "rightAxisLineColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

rightAxisLineColorProperty.register(MPChartBase);

export const rightAxisLineColorCssProperty = new CssProperty<Style, Color>({
    name: "rightAxisLineColor",
    cssName: "right-axis-line-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
rightAxisLineColorCssProperty.register(Style);


export const xAxisTextColorProperty = new Property<MPChartBase, Color>({
    name: "xAxisTextColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

xAxisTextColorProperty.register(MPChartBase);

export const xAxisTextColorCssProperty = new CssProperty<Style, Color>({
    name: "xAxisTextColor",
    cssName: "x-axis-text-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
xAxisTextColorCssProperty.register(Style);

export const leftAxisTextColorProperty = new Property<MPChartBase, Color>({
    name: "leftAxisTextColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

leftAxisTextColorProperty.register(MPChartBase);

export const leftAxisTextColorCssProperty = new CssProperty<Style, Color>({
    name: "leftAxisTextColor",
    cssName: "left-axis-text-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
leftAxisTextColorCssProperty.register(Style);

export const rightAxisTextColorProperty = new Property<MPChartBase, Color>({
    name: "rightAxisTextColor",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});

rightAxisTextColorProperty.register(MPChartBase);

export const rightAxisTextColorCssProperty = new CssProperty<Style, Color>({
    name: "rightAxisTextColor",
    cssName: "right-axis-text-color",
    valueConverter: (v) => {
        if (v) {
            return new Color(v)
        }
        else {
            return new Color("#000000");
        }
    }
});
rightAxisTextColorCssProperty.register(Style);

export const xAxisMinValueProperty = new Property<MPChartBase, number>({
    name: "xAxisMinValue",
    defaultValue: 0,
    valueConverter: (v) => {
        console.log("xAxisMinValueProperty common", v);
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'xAxisMinValue' must be a number");
    }
});
xAxisMinValueProperty.register(MPChartBase);


export const xAxisMaxValueProperty = new Property<MPChartBase, number>({
    name: "xAxisMaxValue",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'xAxisMaxValue' must be a number");
    }
});
xAxisMaxValueProperty.register(MPChartBase);

export const leftAxisMinValueProperty = new Property<MPChartBase, number>({
    name: "leftAxisMinValue",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'leftAxisMaxValue' must be a number");
    }
});
leftAxisMinValueProperty.register(MPChartBase);

export const leftAxisMaxValueProperty = new Property<MPChartBase, number>({
    name: "leftAxisMaxValue",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'leftAxisMaxValue' must be a number");
    }
});
leftAxisMaxValueProperty.register(MPChartBase);

export const rightAxisMinValueProperty = new Property<MPChartBase, number>({
    name: "rightAxisMinValue",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'rightAxisMaxValue' must be a number");
    }
});
rightAxisMinValueProperty.register(MPChartBase);

export const rightAxisMaxValueProperty = new Property<MPChartBase, number>({
    name: "rightAxisMaxValue",
    defaultValue: 0,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'rightAxisMaxValue' must be a number");
    }
});
rightAxisMaxValueProperty.register(MPChartBase);

export const leftAxisFormatterProperty = new Property<MPChartBase, YAxisFormatterInterface>({
    name: "leftAxisFormatter",
    valueChanged: function (value) {
        console.log("value Change ", value);
    }
});
leftAxisFormatterProperty.register(MPChartBase);
export const rightAxisFormatterProperty = new Property<MPChartBase, YAxisFormatterInterface>({
    name: "rightAxisFormatter",
});
rightAxisFormatterProperty.register(MPChartBase);

export const fontProperty = new Property<MPChartBase, string>({
    name: "font",
});
fontProperty.register(MPChartBase);

export const showValueLabelsProperty = new Property<MPChartBase, boolean>({
    name: "showValueLabels",
    defaultValue: false,
    valueConverter: booleanConverter
});
showValueLabelsProperty.register(MPChartBase);

export const showLeftAxisProperty = new Property<MPChartBase, boolean>({
    name: "showLeftAxis",
    defaultValue: true,
    valueConverter: booleanConverter
});
showLeftAxisProperty.register(MPChartBase);

export const showRightAxisProperty = new Property<MPChartBase, boolean>({
    name: "showRightAxis",
    defaultValue: true,
    valueConverter: booleanConverter
});
showRightAxisProperty.register(MPChartBase);

export const markerProperty = new Property<MPChartBase, ChartMarkerConfig>({
    name: "marker",
});
markerProperty.register(MPChartBase);