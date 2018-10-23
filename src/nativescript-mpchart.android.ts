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
    yAxisGranularityProperty,
    XAxisLabelPositionProperty,
    itemsProperty,
    labelsProperty,
    DataChartInterface,
    DataSetChartInterface,
    DataSetLabelInterface,
} from "./nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
var LineChart = com.github.mikephil.charting.charts.LineChart;
var LineDataSet = com.github.mikephil.charting.data.LineDataSet;
var LineData = com.github.mikephil.charting.data.LineData;
var Entry = com.github.mikephil.charting.data.Entry;
var ArrayList = java.util.ArrayList;
var XAxis = com.github.mikephil.charting.components.XAxis;
var IndexAxisValueFormatter = com.github.mikephil.charting.formatter.IndexAxisValueFormatter;
var IAxisValueFormatter = com.github.mikephil.charting.formatter.IAxisValueFormatter;
var Description = com.github.mikephil.charting.components.Description;
var IValueFormatter = com.github.mikephil.charting.formatter.IValueFormatter;
export class MPLineChart extends MPChartBase {
    public nativeView: com.github.mikephil.charting.charts.LineChart;
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

        xAxis.setDrawGridLines(false);
        yAxisLeft.setDrawGridLines(false);
        yAxisRight.setDrawGridLines(false);
        var description = new Description();
        lineChartView.setDescription(description);

        return lineChartView;
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
            console.log("set XAxis granularity ", value);
            this.nativeView.getXAxis().setGranularity(value);
        }
        else {
            throw new Error("Property 'xAxis' of Chart undefined");
        }
    }

    public [yAxisGranularityProperty.setNative](value: number) {
        if (this.nativeView.getAxisLeft() && this.nativeView.getAxisRight()) {
            this.nativeView.getAxisLeft().setGranularity(value);
            this.nativeView.getAxisRight().setGranularity(value);
        }
        else {
            throw new Error("Property 'leftAxis' or 'rightAxis' of Chart undefined");
        }
    }

    public [XAxisLabelPositionProperty.getDefault](): "Bottom" {
        return "Bottom";
    }

    public [XAxisLabelPositionProperty.setNative](value: "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside") {
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

    public [itemsProperty.setNative](items: Array<DataChartInterface>) {
        var lineDatasets: java.util.ArrayList<any> = new ArrayList();
        console.log("items length", items.length);
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
                    dataset.setDrawCircles(circleEnable);
                    if (i === 0) {
                        dataset.setHighlightEnabled(true);
                    }
                    else {
                        dataset.setHighlightEnabled(false);
                    }
                    if (items[i].highlighColor) {
                        dataset.setHighLightColor(items[i].highlighColor.android);
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














    // // RangeSeekbarChangeListener END

    // // RangeSeekbarFinalValueListener START
    // interface RangeSeekbarFinalValueListener extends java.lang.Object, com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {
    //     new(owner: WeakRef<RangeSeekBar>): RangeSeekbarFinalValueListener;
    // }

    // let RangeSeekbarFinalValueListener: RangeSeekbarFinalValueListener;

    // function initRangeSeekbarFinalValueListener() {
    //     if (RangeSeekbarFinalValueListener) {
    //         return;
    //     }

    //     @Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener])
    //     class RangeSeekbarFinalValueListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {

    //         constructor(private owner: WeakRef<RangeSeekBar>) {
    //             super();
    //             return global.__native(this);
    //         }

    //         public finalValue(minValue: any, maxValue: any): void {
    //             if (this.owner && this.owner.get()) {
    //                 let args = {
    //                     eventName: RangeSeekBarBase.rangeSeekBarFinalValueEvent,
    //                     object: this.owner,
    //                     value: {
    //                         minValue: minValue,
    //                         maxValue: maxValue
    //                     }
    //                 } as RangeSeekBarEventData;
    //                 this.owner.get().notify(args);
    //             }
    //         }
    //     }
    //     RangeSeekbarFinalValueListener = RangeSeekbarFinalValueListenerImpl as any;
}
// RangeSeekbarFinalValueListener END