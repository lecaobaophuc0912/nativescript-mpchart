import { View, Property, EventData, booleanConverter } from "tns-core-modules/ui/core/view";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { Color } from "tns-core-modules/color";


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

export interface DataChartInterface {
    dataSet: Array<DataSetChartInterface>;
    lineColor: Color;
    highlighColor?: Color;
    circleHoleEnabled?: boolean;
    circleColor?: Color;
    circleEnable?: boolean;
    legendLabel?: string;
}
// Type
export type XAxisLabelPosition = "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside";

// Property
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
    valueConverter: (v) => new Color(v)
});
descriptionTextColorProperty.register(MPChartBase);


export const descriptionTextColorCssProperty = new CssProperty<Style, Color>({
    name: "descriptionTextColor",
    cssName: "description-text-color",
    valueConverter: (v) => new Color(v)
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

export const yAxisGranularityProperty = new Property<MPChartBase, number>({
    name: "yAxisGranularity",
    defaultValue: 1,
    valueConverter: (v) => {
        if (parseFloat(v) !== NaN) {
            return parseFloat(v);
        }
        throw new Error("Property 'yAxisGranularity' must be a number");
    }
});
yAxisGranularityProperty.register(MPChartBase);

export const XAxisLabelPositionProperty = new Property<MPChartBase, XAxisLabelPosition>({
    name: "xAxisLabelPosition",
    defaultValue: "Bottom"
});
XAxisLabelPositionProperty.register(MPChartBase);

export const itemsProperty = new Property<MPChartBase, Array<DataChartInterface>>({
    name: "items"
});
itemsProperty.register(MPChartBase);

export const labelsProperty = new Property<MPChartBase, Array<DataSetLabelInterface>>({
    name: "labels"
});
labelsProperty.register(MPChartBase);
