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
    showLeftAxisProperty,
    showRightAxisProperty,
    showValueLabelsProperty,
    DataLineChartInterface,
    DataSetChartInterface,
    DataSetLabelInterface,
    YAxisFormatterInterface
} from "../nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
import * as application from "tns-core-modules/application";
import { ChartMarkerConfig, ConfigDisplayData } from "../custom-marker-view/custom-marker-view.common";
var LineChart = com.github.mikephil.charting.charts.LineChart;
var LineDataSet = com.github.mikephil.charting.data.LineDataSet;
var LineData = com.github.mikephil.charting.data.LineData;
var Entry = com.github.mikephil.charting.data.Entry;
var ArrayList = java.util.ArrayList;
var XAxis = com.github.mikephil.charting.components.XAxis;
var IndexAxisValueFormatter = com.github.mikephil.charting.formatter.IndexAxisValueFormatter;
var DefaultValueFormatter = com.github.mikephil.charting.formatter.DefaultValueFormatter;
var IAxisValueFormatter = com.github.mikephil.charting.formatter.IAxisValueFormatter;
var Description = com.github.mikephil.charting.components.Description;
var IValueFormatter = com.github.mikephil.charting.formatter.IValueFormatter;



export class MPLineChart extends MPChartBase {
    public nativeView: com.github.mikephil.charting.charts.LineChart;
    private showValueLabels: boolean;
    public resetZoomLineChart() {
        this.nativeView.resetZoom();
    }
    public createNativeView() {
        var lineChartView = new LineChart(this._context);
        var xAxis = lineChartView.getXAxis();
        var yAxisLeft = lineChartView.getAxisLeft();
        var yAxisRight = lineChartView.getAxisRight();
        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);

        xAxis.setGranularity(1);
        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);

        yAxisLeft.setEnabled(true);
        yAxisRight.setEnabled(true);

        yAxisLeft.setDrawLabels(true);
        yAxisRight.setDrawLabels(true);
        var description = new Description();
        description.setText("");
        lineChartView.setDescription(description);
        lineChartView.setDoubleTapToZoomEnabled(false);
        lineChartView.setScaleEnabled(false);
        return lineChartView;
    }
    public [itemsProperty.setNative](items: Array<DataLineChartInterface>) {
        var lineDatasets: java.util.ArrayList<any> = new ArrayList();
        for (let i = 0; i < items.length; i++) {
            if (items[i].dataSet && items[i].dataSet.length) {
                let labelLegend = items[i].legendLabel ? items[i].legendLabel : "";
                let entries = [];
                for (let j = 0; j < items[i].dataSet.length; j++) {
                    let entrie = new Entry(items[i].dataSet[j].x, items[i].dataSet[j].y);
                    entries.push(entrie);
                }
                if (entries.length) {
                    let dataset: com.github.mikephil.charting.data.LineDataSet = new LineDataSet(new ArrayList(java.util.Arrays.asList(entries)), labelLegend);
                    dataset.setColor(items[i].lineColor.android);
                    let drawCircle = items[i].circleHoleEnabled ? !!items[i].circleHoleEnabled : false
                    dataset.setDrawCircleHole(drawCircle);
                    if (items[i].circleColor) {
                        dataset.setCircleColor(items[i].circleColor.android);
                    }
                    dataset.setCircleHoleRadius(3);
                    let circleEnable = items[i].circleEnable ? !!items[i].circleEnable : false
                    dataset.setHighlightEnabled(false);

                    if (items[i].highlighColor) {
                        dataset.setHighLightColor(items[i].highlighColor.android);
                    }
                    if (this.showValueLabels != undefined) {
                        dataset.setDrawValues(this.showValueLabels);
                    }
                    else {
                        dataset.setDrawValues(true);
                    }
                    lineDatasets.add(dataset);

                }
            }
            else {
                throw new Error("items number " + i + "do not have any item");
            }
        }
        let lineChartData = new LineData(lineDatasets);
        this.nativeView.setData(lineChartData);
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

}