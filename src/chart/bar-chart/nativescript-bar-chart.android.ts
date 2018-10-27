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
    itemsProperty,
    labelsProperty,
    DataBarChartInterface,
    DataSetChartInterface,
    DataSetLabelInterface,
    YAxisFormatterInterface
} from "../nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
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

        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);

        xAxis.setAxisMinimum(0);
        yAxisLeft.setAxisMinimum(0);
        yAxisRight.setAxisMinimum(0);
        yAxisLeft.setDrawLabels(true);
        yAxisRight.setDrawLabels(true);
        var description = new Description();
        barChartView.setDescription(description);
        barChartView.setDoubleTapToZoomEnabled(false);
        barChartView.setFitBars(true);
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
                    dataset.setHighLightColor(items[i].highlighColor.android);
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
                                return labels[i].label
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
}