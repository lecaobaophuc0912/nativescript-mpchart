import {
    MPChartBase,
    showLegendProperty,
    showGridLinesProperty,
    scaleEnableProperty,
    descriptionTextProperty,
    descriptionXOffsetProperty,
    descriptionYOffsetProperty,
    descriptionTextColorProperty,
    descriptionTextColorCssProperty,
    highlightPerDragEnabledProperty,
    highlightPerTapEnabledProperty,
    xAxisGranularityProperty,
    leftAxisGranularityProperty,
    rightAxisGranularityProperty,
    xAxisLabelPositionProperty,
    xAxisLineColorCssProperty,
    xAxisLineColorProperty,
    leftAxisLineColorProperty,
    leftAxisLineColorCssProperty,
    rightAxisLineColorProperty,
    rightAxisLineColorCssProperty,
    xAxisTextColorProperty,
    xAxisTextColorCssProperty,
    leftAxisTextColorProperty,
    leftAxisTextColorCssProperty,
    rightAxisTextColorProperty,
    rightAxisTextColorCssProperty,
    xAxisMinValueProperty,
    xAxisMaxValueProperty,
    leftAxisMinValueProperty,
    leftAxisMaxValueProperty,
    rightAxisMinValueProperty,
    rightAxisMaxValueProperty,
    leftAxisFormatterProperty,
    rightAxisFormatterProperty,
    showValueLabelsProperty,
    showLeftAxisProperty,
    showRightAxisProperty,
    itemsProperty,
    labelsProperty,
    markerProperty,
    DataBarChartInterface,
    DataSetChartInterface,
    DataSetLabelInterface,
    YAxisFormatterInterface
} from "../nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
import * as application from "tns-core-modules/application";
import { ChartMarkerConfig, ConfigDisplayData } from "../custom-marker-view/custom-marker-view.common";
var BarChart = com.github.mikephil.charting.charts.BarChart;
var BarDataSet = com.github.mikephil.charting.data.BarDataSet;
var BarData = com.github.mikephil.charting.data.BarData;
var BarEntry = com.github.mikephil.charting.data.BarEntry;
var ArrayList = java.util.ArrayList;
var XAxis = com.github.mikephil.charting.components.XAxis;
var IndexAxisValueFormatter = com.github.mikephil.charting.formatter.IndexAxisValueFormatter;
var DefaultValueFormatter = com.github.mikephil.charting.formatter.DefaultValueFormatter;
var IAxisValueFormatter = com.github.mikephil.charting.formatter.IAxisValueFormatter;
var Description = com.github.mikephil.charting.components.Description;
var IValueFormatter = com.github.mikephil.charting.formatter.IValueFormatter;

export class MPBarChart extends MPChartBase {
    public nativeView: com.github.mikephil.charting.charts.BarChart;
    private showValueLabels: boolean;
    public resetZoomLineChart() {
        this.nativeView.resetZoom();
    }
    public createNativeView() {
        var barChartView = new BarChart(this._context);
        var xAxis = barChartView.getXAxis();
        var yAxisLeft = barChartView.getAxisLeft();
        var yAxisRight = barChartView.getAxisRight();
        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);
        xAxis.setGranularity(1);
        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);

        xAxis.setAxisMinimum(0);
        yAxisLeft.setAxisMinimum(0);
        yAxisRight.setAxisMinimum(0);
        yAxisLeft.setDrawLabels(true);
        yAxisRight.setDrawLabels(true);
        yAxisLeft.setEnabled(true);
        yAxisRight.setEnabled(true);
        var description = new Description();
        description.setText("");
        barChartView.setDescription(description);
        barChartView.setDoubleTapToZoomEnabled(false);
        barChartView.setFitBars(true);
        barChartView.setScaleEnabled(false);
        return barChartView;
    }

    public [itemsProperty.setNative](items: Array<DataBarChartInterface>) {
        var barDatasets: java.util.ArrayList<any> = new ArrayList();
        for (let i = 0; i < items.length; i++) {
            if (items[i].dataSet && items[i].dataSet.length) {
                let labelLegend = items[i].legendLabel ? items[i].legendLabel : "";
                let entries = [];
                for (let j = 0; j < items[i].dataSet.length; j++) {
                    let entrie = new BarEntry(items[i].dataSet[j].x, items[i].dataSet[j].y);
                    entries.push(entrie);
                }
                if (entries.length) {
                    let dataset: com.github.mikephil.charting.data.BarDataSet = new BarDataSet(new ArrayList(java.util.Arrays.asList(entries)), labelLegend);
                    dataset.setColor(items[i].barColor.android);
                    if (items[i].highlighColor) {
                        dataset.setHighLightColor(items[i].highlighColor.android);
                    }
                    if (this.showValueLabels != undefined) {
                        dataset.setDrawValues(this.showValueLabels);
                    }
                    else {
                        dataset.setDrawValues(true);
                    }
                    barDatasets.add(dataset);
                }
            }
            else {
                throw new Error("items number " + i + "do not have any item");
            }
        }
        let barChartData = new BarData(barDatasets);
        this.nativeView.setData(barChartData);
    }

    public [labelsProperty.setNative](labels: Array<DataSetLabelInterface>) {
        let self = this;
        if (labels) {
            if (this.nativeView.getXAxis()) {
                this.nativeView.getXAxis().setValueFormatter(new IAxisValueFormatter({
                    getFormattedValue(value, entry) {
                        for (let i = 0; i < labels.length; i++) {
                            if (labels[i].xAxisValue == value) {
                                return labels[i].label + '';
                            }
                        }
                        return "";
                    }
                }));
            }
            else {
                throw new Error("xAxis in labels Property setup undefined");
            }
        }
        else {
            throw new Error("labels value undefined");
        }
    }

    public [showLegendProperty.setNative](value: boolean) {
        let legend = this.nativeView.getLegend();
        console.log("showLegend ", value);
        if (legend) {
            legend.setEnabled(value);
        }
        else {
            throw new Error("Property 'legend' of Chart undefined");
        }
    }

    public [showGridLinesProperty.setNative](value: boolean) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        xAxis = this.nativeView.getXAxis();
        leftAxis = this.nativeView.getAxisLeft();
        rightAxis = this.nativeView.getAxisRight();
        if (xAxis && leftAxis && rightAxis) {
            xAxis.setDrawGridLines(value);
            leftAxis.setDrawGridLines(value);
            rightAxis.setDrawGridLines(value);
        }
        else {
            throw new Error("Property 'xAxis' or 'leftAxis' or 'rightAxis' of Chart undefined");
        }
    }

    public [scaleEnableProperty.setNative](value: boolean) {
        this.nativeView.setScaleEnabled(value);
    }
    public [descriptionTextProperty.setNative](value: string) {
        let chartDescription = this.nativeView.getDescription().setText(value);
    }

    public [descriptionXOffsetProperty.setNative](value: number) {
        this.nativeView.getDescription().setXOffset(value);
    }

    public [descriptionYOffsetProperty.setNative](value: number) {
        this.nativeView.getDescription().setYOffset(value);
    }

    public [descriptionTextColorProperty.setNative](value: Color) {
        this.nativeView.getDescription().setTextColor(value.android);
    }
    public [descriptionTextColorCssProperty.setNative](value: Color) {
        this.nativeView.getDescription().setTextColor(value.android);
    }

    public [highlightPerTapEnabledProperty.setNative](value: boolean) {
        this.nativeView.setHighlightPerTapEnabled(value);
    }

    public [highlightPerDragEnabledProperty.setNative](value: boolean) {
        this.nativeView.setHighlightPerDragEnabled(value);
    }

    public [xAxisGranularityProperty.setNative](value: number) {
        if (this.nativeView.getXAxis()) {
            this.nativeView.getXAxis().setGranularity(value);
        }
        else {
            throw new Error("Property 'xAxis' of Chart undefined");
        }
    }

    public [leftAxisGranularityProperty.setNative](value: number) {
        if (this.nativeView.getAxisLeft()) {
            this.nativeView.getAxisLeft().setGranularity(value);
        }
        else {
            throw new Error("Property 'leftAxis' of Chart undefined");
        }
    }
    public [rightAxisGranularityProperty.setNative](value: number) {
        if (this.nativeView.getAxisRight()) {
            this.nativeView.getAxisRight().setGranularity(value);
        }
        else {
            throw new Error("Property 'rightAxis' of Chart undefined");
        }
    }

    public [xAxisLabelPositionProperty.getDefault](): "Bottom" {
        return "Bottom";
    }

    public [xAxisLabelPositionProperty.setNative](value: "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside") {
        let xAxis = this.nativeView.getXAxis();
        if (xAxis) {
            switch (value) {
                case "Top":
                    this.nativeView.getXAxis().setPosition(XAxis.XAxisPosition.TOP);
                    break;
                case "Bottom":
                    this.nativeView.getXAxis().setPosition(XAxis.XAxisPosition.BOTTOM);
                    break;
                case "BothSided":
                    this.nativeView.getXAxis().setPosition(XAxis.XAxisPosition.BOTH_SIDED);
                    break;
                case "TopInside":
                    this.nativeView.getXAxis().setPosition(XAxis.XAxisPosition.TOP_INSIDE);
                    break;
                case "BottomInside":
                    this.nativeView.getXAxis().setPosition(XAxis.XAxisPosition.BOTTOM_INSIDE);
                    break;
                default:
                    console.log("Value of xAxisLabelPosition property do not exist, default value will set Bottom");
                    break;
            }
        }
        else {
            throw new Error("Property 'xAxis' of Chart undefined");
        }
    }


    public [xAxisLineColorProperty.setNative](value: Color) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();

        if (xAxis && value) {
            xAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [xAxisLineColorCssProperty.setNative](value: Color) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();
        if (xAxis && value) {
            xAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }


    public [leftAxisLineColorProperty.setNative](value: Color) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis && value) {
            leftAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }
    public [leftAxisLineColorCssProperty.setNative](value: Color) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis && value) {
            leftAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }

    public [rightAxisLineColorProperty.setNative](value: Color) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis && value) {
            rightAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }
    public [rightAxisLineColorCssProperty.setNative](value: Color) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis && value) {
            rightAxis.setAxisLineColor(value.android);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [xAxisTextColorProperty.setNative](value: Color) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();
        if (xAxis && value) {
            xAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [xAxisTextColorCssProperty.setNative](value: Color) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();
        if (xAxis && value) {
            xAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }


    public [leftAxisTextColorProperty.setNative](value: Color) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis && value) {
            leftAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }
    public [leftAxisTextColorCssProperty.setNative](value: Color) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis && value) {
            leftAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }


    public [rightAxisTextColorProperty.setNative](value: Color) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis && value) {
            rightAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }
    public [rightAxisTextColorCssProperty.setNative](value: Color) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis && value) {
            rightAxis.setTextColor(value.android);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [xAxisMinValueProperty.setNative](value: number) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();
        if (xAxis) {
            console.log("xAxisMinValueProperty ", value);
            xAxis.setAxisMinimum(value);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [xAxisMaxValueProperty.setNative](value: number) {
        let xAxis: com.github.mikephil.charting.components.XAxis;
        xAxis = this.nativeView.getXAxis();
        if (xAxis) {
            console.log("xAxisMinValueProperty ", value);
            xAxis.setAxisMaximum(value);
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [leftAxisMinValueProperty.setNative](value: number) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis) {
            leftAxis.setAxisMinimum(value);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }

    public [leftAxisMaxValueProperty.setNative](value: number) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis) {
            leftAxis.setAxisMaximum(value);
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }

    public [leftAxisMaxValueProperty.setNative](value: number) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis) {
            rightAxis.setAxisMinimum(value);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [rightAxisMaxValueProperty.setNative](value: number) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis) {
            rightAxis.setAxisMaximum(value);
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [leftAxisFormatterProperty.setNative](formatterValue: YAxisFormatterInterface) {
        if (formatterValue) {
            let leftAxis: com.github.mikephil.charting.components.YAxis = this.nativeView.getAxisLeft();
            let formatter: com.github.mikephil.charting.formatter.IAxisValueFormatter;
            switch (formatterValue.type) {
                case "Int":
                    formatter = new IAxisValueFormatter({
                        getFormattedValue(value, entry) {
                            if (value == 0 || value) {
                                return value.toFixed();
                            }
                            else {
                                return "";
                            }
                        }
                    });
                    leftAxis.setValueFormatter(formatter);
                    break;
                case "Float":
                    formatter = new IAxisValueFormatter({
                        getFormattedValue(value, entry) {
                            if (value == 0 || value) {
                                return value.toFixed(formatterValue.numberOfDigits);
                            }
                            else {
                                return "";
                            }
                        }
                    });
                    leftAxis.setValueFormatter(formatter);
                    break;

                default:
                    break;
            }
        }
    }
    public [rightAxisFormatterProperty.setNative](formatterValue: YAxisFormatterInterface) {
        if (formatterValue) {
            let rightAxis: com.github.mikephil.charting.components.YAxis = this.nativeView.getAxisRight();
            let formatter: com.github.mikephil.charting.formatter.IAxisValueFormatter;
            switch (formatterValue.type) {
                case "Int":
                    formatter = new IAxisValueFormatter({
                        getFormattedValue(value, entry) {
                            if (value == 0 || value) {
                                return value.toFixed();
                            }
                            else {
                                return "";
                            }
                        }
                    });
                    rightAxis.setValueFormatter(formatter);
                    break;
                case "Float":
                    formatter = new IAxisValueFormatter({
                        getFormattedValue(value, entry) {
                            if (value == 0 || value) {
                                return value.toFixed(formatterValue.numberOfDigits);
                            }
                            else {
                                return "";
                            }
                        }
                    });
                    rightAxis.setValueFormatter(formatter);
                    break;

                default:
                    break;
            }
        }
    }

    public [showValueLabelsProperty.getDefault](): boolean {
        return true;
    }

    public [showValueLabelsProperty.setNative](value: boolean) {
        this.showValueLabels = value;
        if (this.nativeView.getData()) {
            let dataSets = this.nativeView.getData().getDataSets();
            if (dataSets) {
                for (let i = 0; i < dataSets.size(); i++) {
                    this.nativeView.getData().getDataSets().get(i).setDrawValues(value);
                }
            }
        }
    }

    public [showLeftAxisProperty.setNative](value: boolean) {
        let leftAxis: com.github.mikephil.charting.components.YAxis;
        leftAxis = this.nativeView.getAxisLeft();
        if (leftAxis) {
            leftAxis.setEnabled(value);
        }
        else {
            throw new Error("Property  'xAxis' in showLeftAxisProperty of Chart undefined");
        }
    }

    public [showRightAxisProperty.setNative](value: boolean) {
        let rightAxis: com.github.mikephil.charting.components.YAxis;
        rightAxis = this.nativeView.getAxisRight();
        if (rightAxis) {
            rightAxis.setEnabled(value);
        }
        else {
            throw new Error("Property  'xAxis' in showRightAxisProperty of Chart undefined");
        }
    }

    public [markerProperty.setNative](markerConfig: ChartMarkerConfig) {
        console.log("markerProperty");
        let marker: any = new CustomChartMarkerView(this._context, null);
        marker.setConfig(markerConfig);
        this.nativeView.setMarker(marker);
    }
}

export class CustomChartMarkerView extends com.github.mikephil.charting.components.MarkerView {
    private textView: android.widget.TextView;
    private context: android.content.Context;
    public backgroundViewColor: number;
    public fontSize: number;
    public textColor: number;
    public minWidth: number;
    public minHeight: number;
    public paddingTop: number;
    public paddingRight: number;
    public paddingBottom: number;
    public paddingLeft: number;
    public textAlignment: number;
    public borderRadius: number;
    public displayData: ConfigDisplayData;
    public xOffset: number;
    public yOffset: number;
    public packageName: any;
    constructor(context: android.content.Context, layoutResource: number) {
        let resourceLayout: number;
        var getPackageName = function () {
            let packageName = application.android.packageName;
            let arrSplitPackageName = [];
            arrSplitPackageName = packageName.split(".");
            let appResourceObject: any = global;
            for (let i = 0; i < arrSplitPackageName.length; i++) {
                appResourceObject = appResourceObject[arrSplitPackageName[i]]
            }

            if (appResourceObject == global) {
                throw new Error("Undefined package name R object");
            }
            return appResourceObject;
        }
        if (layoutResource) {
            resourceLayout = layoutResource;
        }
        else {
            let packageName = getPackageName()
            resourceLayout = packageName.R.layout.default_marker_view;
        }
        super(context, resourceLayout);
        this.packageName = getPackageName();
        this.context = context;
        this.setDefault();


    }



    refreshContent(entry: com.github.mikephil.charting.data.Entry, highlight: com.github.mikephil.charting.highlight.Highlight) {
        this.setLabel(entry);
        super.refreshContent(entry, highlight);
    }

    getOffset() {
        let self: any = this;
        let padding = new com.github.mikephil.charting.utils.MPPointF(-(self.getWidth() / 2 - this.xOffset), -(self.getHeight() - this.xOffset));
        return padding;
    }

    setLabel(entry: com.github.mikephil.charting.data.Entry) {
        let self: any = this;
        this.textView = self.findViewById(this.packageName.R.id.tvContent);
        let layout: android.widget.RelativeLayout = self.findViewById(this.packageName.R.id.marker_layout);
        if (this.textView && layout) {

            let text: string;
            if (this.displayData) {
                text = this.displayData.formatter;
                let indexX = this.displayData.formatter.indexOf("{{x}}");
                let indexY = this.displayData.formatter.indexOf("{{y}}");
                let x: string;
                let y: string;
                if (this.displayData.fixedXValue) {
                    switch (this.displayData.fixedXValue.type) {
                        case "Int":
                            x = entry.getX().toFixed();
                            break;
                        case "Float":
                            x = entry.getX().toFixed(this.displayData.fixedXValue.numberOfDigits);
                            break;
                        default:
                            break;
                    }
                }
                else {
                    x = entry.getX().toFixed();
                }

                if (this.displayData.fixedYValue) {
                    switch (this.displayData.fixedYValue.type) {
                        case "Int":
                            y = entry.getY().toFixed();
                            break;
                        case "Float":
                            y = entry.getY().toFixed(this.displayData.fixedYValue.numberOfDigits);
                            break;
                        default:
                            break;
                    }
                }
                else {
                    y = entry.getY().toFixed();
                }
                if (this.displayData.showXValue && indexX != -1) {
                    text = text.replace("{{x}}", x);
                }

                if (this.displayData.showYValue && indexY != -1) {
                    text = text.replace("{{y}}", y);
                    console.log("text if", text);
                }
            }
            else {
                text = "Y Value: " + entry.getY().toFixed();
            }
            this.textView.setText(text);
            this.textView.setTextColor(this.textColor);
            this.textView.setTextAlignment(this.textAlignment);
            let drawable: android.graphics.drawable.GradientDrawable = new android.graphics.drawable.GradientDrawable();
            drawable.setCornerRadius(this.borderRadius);
            drawable.setColor(this.backgroundViewColor);
            layout.setBackground(drawable);
            layout.setPadding(this.paddingLeft, this.paddingTop, this.paddingRight, this.paddingBottom);
        }
        else {
            throw new Error("textView or layout undefined.. Check layoutResource input must be wrong");
        }
    }

    setConfig(config: ChartMarkerConfig) {
        console.log("setConfig");
        if (config.backgroundColor) {
            this.backgroundViewColor = config.backgroundColor.android;
        }

        if (config.textColor) {
            this.textColor = config.textColor.android;
        }

        if (config.fontSize) {
            this.fontSize = config.fontSize;
        }

        if (config.borderRadius) {
            this.borderRadius = config.borderRadius;
        }

        if (config.padding) {
            let x = config.padding.x ? config.padding.x : 0;
            let y = config.padding.y ? config.padding.y : 0;
            this.paddingTop = this.paddingBottom = y;
            this.paddingLeft = this.paddingRight = x;
        }

        if (config.minimumSize) {
            this.minWidth = config.minimumSize.width
            this.minHeight = config.minimumSize.height
        }
        if (config.displayData) {
            this.displayData = config.displayData;
        }

        if (config.xOffset) {
            this.xOffset = config.xOffset;
        }

        if (config.yOffset) {
            this.yOffset = config.yOffset;
        }
    }

    setDefault() {
        this.backgroundViewColor = new Color("#cccccc").android;
        this.textColor = new Color("#000000").android;
        this.minWidth = 40;
        this.minHeight = 20;
        this.paddingTop = 5;
        this.paddingRight = 5;
        this.paddingBottom = 5;
        this.paddingLeft = 5;
        this.fontSize = 12;
        this.borderRadius = 5;
        this.textAlignment = 4;
        this.displayData = {
            showXValue: false,
            showYValue: true,
            fixedXValue: {
                type: "Int",
                numberOfDigits: 0
            },
            fixedYValue: {
                type: "Float",
                numberOfDigits: 2
            },
            formatter: "Y value: {{y}}"
        }
        this.xOffset = 0;
        this.yOffset = 0;
    }
}