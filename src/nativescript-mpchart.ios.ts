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
import { layout } from "tns-core-modules/utils/utils";

export class MPLineChart extends MPChartBase {
    nativeView: LineChartView;
    public createNativeView() {
        let dataset: LineChartDataSet;
        let lineChartView = LineChartView.new();
        // set some default value of chart when init view
        let description: ChartDescription = ChartDescription.new();
        lineChartView.chartDescription = description;
        lineChartView.xAxis.labelPosition = XAxisLabelPosition.Bottom;
        lineChartView.xAxis.drawGridLinesEnabled = false;
        lineChartView.leftAxis.drawGridLinesEnabled = false;
        lineChartView.rightAxis.drawGridLinesEnabled = false;
        lineChartView.highlightPerDragEnabled = false;
        lineChartView.highlightPerTapEnabled = false;

        return lineChartView;
    }

    public onLoaded() {
        this.nativeView.frame = CGRectMake(0, 0, this.nativeView.superview.frame.size.width, this.nativeView.superview.frame.size.height);
        super.onLoaded();
    }


    public resetZoomLineChart() {
        this.nativeView.resetZoom();
    }

    public [showLegendProperty.setNative](value: boolean) {
        let legend = this.nativeView.legend;
        console.log("showLegend ", value);
        if (legend) {
            legend.enabled = value;
        }
        else {
            throw new Error("Property 'legend' of Chart undefined");
        }
    }

    public [showGridLinesProperty.setNative](value: boolean) {
        let xAxis: ChartXAxis;
        let leftAxis: ChartYAxis;
        let rightAxis: ChartYAxis;
        xAxis = this.nativeView.xAxis;
        leftAxis = this.nativeView.leftAxis;
        rightAxis = this.nativeView.rightAxis;
        if (xAxis && leftAxis && rightAxis) {
            xAxis.drawGridLinesEnabled = value;
            leftAxis.drawGridLinesEnabled = value;
            rightAxis.drawGridLinesEnabled = value;
        }
        else {
            throw new Error("Property 'xAxis' or 'leftAxis' or 'rightAxis' of Chart undefined");
        }
    }

    public [scaleEnableProperty.setNative](value: boolean) {
        this.nativeView.setScaleEnabled(value);
    }
    public [descriptionTextProperty.setNative](value: string) {
        this.nativeView.chartDescription.text = value;
    }

    public [descriptionXOffsetProperty.setNative](value: number) {
        this.nativeView.chartDescription.xOffset = value;
    }

    public [descriptionYOffsetProperty.setNative](value: number) {
        this.nativeView.chartDescription.yOffset = value;
    }

    public [descriptionTextColorProperty.setNative](value: Color) {
        this.nativeView.chartDescription.textColor = value.ios;
    }

    public [descriptionTextColorCssProperty.setNative](value: Color) {
        this.nativeView.chartDescription.textColor = value.ios;
    }

    public [highlightPerTapEnabledProperty.setNative](value: boolean) {
        this.nativeView.highlightPerTapEnabled = value;
    }

    public [highlightPerDragEnabledProperty.setNative](value: boolean) {
        this.nativeView.highlightPerDragEnabled = value;
    }

    public [xAxisGranularityProperty.setNative](value: number) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis) {
            xAxis.granularity = value;
        }
        else {
            throw new Error("Property 'xAxis' of Chart undefined");
        }
    }

    public [yAxisGranularityProperty.setNative](value: number) {
        let leftAxis: ChartYAxis;
        let rightAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        rightAxis = this.nativeView.rightAxis;
        if (leftAxis && rightAxis) {
            leftAxis.granularity = value;
            rightAxis.granularity = value;
        }
        else {
            throw new Error("Property 'leftAxis' or 'rightAxis' of Chart undefined");
        }
    }

    public [XAxisLabelPositionProperty.getDefault](): "Bottom" {
        return "Bottom";
    }

    public [XAxisLabelPositionProperty.setNative](value: "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside") {
        let xAxis = this.nativeView.xAxis;
        if (xAxis) {
            switch (value) {
                case "Top":
                    this.nativeView.xAxis.labelPosition = XAxisLabelPosition.Top;
                    break;
                case "Bottom":
                    this.nativeView.xAxis.labelPosition = XAxisLabelPosition.Bottom;
                    break;
                case "BothSided":
                    this.nativeView.xAxis.labelPosition = XAxisLabelPosition.BothSided;
                    break;
                case "TopInside":
                    this.nativeView.xAxis.labelPosition = XAxisLabelPosition.TopInside;
                    break;
                case "BottomInside":
                    this.nativeView.xAxis.labelPosition = XAxisLabelPosition.BottomInside;
                    break;
                default:
                    console.log("Value of xAxisLabelPosition property do not exist, default value will set Bottom");
                    break;
            }
            this.nativeView.frame = CGRectMake(0, 0, this.nativeView.superview.frame.size.width, this.nativeView.superview.frame.size.height);
        }
        else {
            throw new Error("Property 'xAxis' of Chart undefined");
        }
    }
    public [itemsProperty.setNative](items: Array<DataChartInterface>) {
        let lineChartData = LineChartData.new();
        console.log("items length", items.length);
        for (let i = 0; i < items.length; i++) {
            if (items[i].dataSet && items[i].dataSet.length) {
                let labelLegend = items[i].legendLabel ? items[i].legendLabel : "";
                let entries: NSMutableArray<any> = NSMutableArray.new();
                for (let j = 0; j < items[i].dataSet.length; j++) {
                    let entrie = ChartDataEntry.new().initWithXY(items[i].dataSet[j].x, items[i].dataSet[j].y);
                    entries.addObject(entrie);
                }
                let dataset: LineChartDataSet = LineChartDataSet.new().initWithValuesLabel(entries, labelLegend);
                dataset.lineColor = items[i].lineColor.ios;
                dataset.setLineColor();
                dataset.drawCircleHoleEnabled = items[i].circleHoleEnabled ? !!items[i].circleHoleEnabled : false;
                let colorCircle: NSMutableArray<any> = NSMutableArray.new();
                if (items[i].circleColor) {
                    colorCircle.addObject(items[i].circleColor.ios);
                }
                dataset.circleColors = colorCircle;
                dataset.circleHoleRadius = 3;
                dataset.drawCirclesEnabled = items[i].circleEnable;
                if (i === 0) {
                    dataset.highlightEnabled = true;
                }
                else {
                    dataset.highlightEnabled = true;
                }
                if (items[i].highlighColor) {
                    dataset.highlightColor = items[i].highlighColor.ios;
                }
                lineChartData.addDataSet(dataset);
            }
            else {
                throw new Error("items number " + i + "do not have any item");
            }
        }
        this.nativeView.lineChartData = lineChartData;
        this.nativeView.setData();
    }

    public [labelsProperty.setNative](labels: Array<DataSetLabelInterface>) {
        if (labels) {
            let formatter: any = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                for (let i = 0; i < labels.length; i++) {
                    if (labels[i].xAxisValue == value) {
                        return labels[i].label
                    }
                }
                return "";
            })
            let xAxis = this.nativeView.xAxis;
            if (xAxis) {
                xAxis.valueFormatter = formatter;
            }
            else {
                throw new Error("xAxis in labels Property setup undefined");
            }
        }
        else {
            throw new Error("labels value undefined");
        }
    }

    // @ObjCClass(TTRangeSliderDelegate)
    // export class TTRangeSliderDelegateImpl extends NSObject implements TTRangeSliderDelegate {
    //     public owner: WeakRef<RangeSeekBar>;

    //     public static initWithOwner(owner: WeakRef<RangeSeekBar>): TTRangeSliderDelegateImpl {
    //         let delegate = TTRangeSliderDelegateImpl.new() as TTRangeSliderDelegateImpl;
    //         delegate.owner = owner;
    //         return delegate;
    //     }

    //     public rangeSliderDidChangeSelectedMinimumValueAndMaximumValue(sender: TTRangeSlider, selectedMinimum: number, selectedMaximum: number): void {
    //         if (this.owner && this.owner.get()) {
    //             let args = {
    //                 eventName: RangeSeekBarBase.rangeSeekBarChangedEvent,
    //                 object: sender,
    //                 value: {
    //                     minValue: sender.selectedMinimum,
    //                     maxValue: sender.selectedMaximum
    //                 }
    //             } as RangeSeekBarEventData;
    //             this.owner.get().notify(args);
    //         }
    //     }

    //     public didEndTouchesInRangeSlider(sender: TTRangeSlider): void {
    //         if (this.owner && this.owner.get()) {
    //             let args = {
    //                 eventName: RangeSeekBarBase.rangeSeekBarFinalValueEvent,
    //                 object: sender,
    //                 value: {
    //                     minValue: sender.selectedMinimum,
    //                     maxValue: sender.selectedMaximum
    //                 }
    //             } as RangeSeekBarEventData;
    //             this.owner.get().notify(args);
    //         }
    //     }
}