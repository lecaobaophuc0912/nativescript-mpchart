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
    xAxisLineColorProperty,
    xAxisLineColorCssProperty,
    xAxisLabelPositionProperty,
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
    fontProperty,
    showValueLabelsProperty,
    showLeftAxisProperty,
    showRightAxisProperty,
    itemsProperty,
    labelsProperty,
    DataBarChartInterface,
    DataSetChartInterface,
    DataSetLabelInterface,
    YAxisFormatterInterface,
} from "../nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
import { layout } from "tns-core-modules/utils/utils";

export class MPBarChart extends MPChartBase {
    nativeView: BarChartView;
    private showValueLabels: boolean;
    public createNativeView() {
        let barChartView = BarChartView.new();
        // set some default value of chart when init view
        let description: ChartDescription = ChartDescription.new();
        description.text = "";
        barChartView.chartDescription = description;
        barChartView.xAxis.labelPosition = XAxisLabelPosition.Bottom;
        barChartView.xAxis.drawGridLinesEnabled = false;
        barChartView.leftAxis.drawGridLinesEnabled = false;
        barChartView.rightAxis.drawGridLinesEnabled = false;
        barChartView.leftAxis.enabled = false;
        barChartView.rightAxis.enabled = false;
        // barChartView.highlightPerDragEnabled = false;
        // barChartView.highlightPerTapEnabled = false;

        barChartView.xAxis.axisMinimum = 0;
        barChartView.leftAxis.axisMinimum = 0;
        barChartView.rightAxis.axisMinimum = 0;
        barChartView.doubleTapToZoomEnabled = false;
        barChartView.fitBars = true;
        return barChartView;
    }

    public onLoaded() {
        this.nativeView.frame = CGRectMake(0, 0, this.nativeView.superview.frame.size.width, this.nativeView.superview.frame.size.height);
        super.onLoaded();
    }


    public resetZoomLineChart() {
        this.nativeView.resetZoom();
    }

    public [itemsProperty.setNative](items: Array<DataBarChartInterface>) {
        let barChartData = BarChartData.new();
        for (let i = 0; i < items.length; i++) {
            if (items[i].dataSet && items[i].dataSet.length) {
                let labelLegend = items[i].legendLabel ? items[i].legendLabel : "";
                let entries: NSMutableArray<any> = NSMutableArray.new();
                for (let j = 0; j < items[i].dataSet.length; j++) {
                    let entrie = BarChartDataEntry.new().initWithXY(items[i].dataSet[j].x, items[i].dataSet[j].y);

                    entries.addObject(entrie);
                }
                let dataset: BarChartDataSet = BarChartDataSet.alloc().initWithValuesLabel(entries, labelLegend);
                dataset.setColor(items[i].barColor.ios);
                dataset.highlightColor = items[i].highlighColor.ios;
                dataset.highlightEnabled = true;
                if (this.showValueLabels != undefined) {
                    dataset.drawValuesEnabled = this.showValueLabels;
                }
                else {
                    dataset.drawValuesEnabled = true;
                }
                barChartData.addDataSet(dataset);
            }
            else {
                throw new Error("items number " + i + "do not have any item");
            }
        }
        this.nativeView.barChartData = barChartData;
        this.nativeView.setData();
    }

    public [labelsProperty.setNative](labels: Array<DataSetLabelInterface>) {
        console.log("labelsProperty labels", labels.length);
        if (labels) {
            let formatter: any = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                for (let i = 0; i < labels.length; i++) {
                    if (labels[i].xAxisValue == value) {
                        return labels[i].label
                    }
                }
                return "";
            })
            let xAxis = this.nativeView.xAxis; if (xAxis) {

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

    public [leftAxisGranularityProperty.setNative](value: number) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.granularity = value;
        }
        else {
            throw new Error("Property 'leftAxis' of Chart undefined");
        }
    }

    public [rightAxisGranularityProperty.setNative](value: number) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.granularity = value;
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [xAxisLabelPositionProperty.getDefault](): "Bottom" {
        return "Bottom";
    }

    public [xAxisLabelPositionProperty.setNative](value: "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside") {
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

    public [xAxisLineColorProperty.setNative](value: Color) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis) {
            xAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [xAxisLineColorCssProperty.setNative](value: Color) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis) {
            xAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [leftAxisLineColorProperty.setNative](value: Color) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }
    public [leftAxisLineColorCssProperty.setNative](value: Color) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }

    public [rightAxisLineColorProperty.setNative](value: Color) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }
    public [rightAxisLineColorCssProperty.setNative](value: Color) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.axisLineColor = value.ios;
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [xAxisTextColorProperty.setNative](value: Color) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis && value) {
            xAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [xAxisTextColorCssProperty.setNative](value: Color) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis && value) {
            xAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }


    public [leftAxisTextColorProperty.setNative](value: Color) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis && value) {
            leftAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }
    public [leftAxisTextColorCssProperty.setNative](value: Color) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis && value) {
            leftAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'leftAxis' of Chart undefined");
        }
    }


    public [rightAxisTextColorProperty.setNative](value: Color) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis && value) {
            rightAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }
    public [rightAxisTextColorCssProperty.setNative](value: Color) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis && value) {
            rightAxis.labelTextColor = value.ios;
        }
        else {
            throw new Error("Property  'rightAxis' of Chart undefined");
        }
    }

    public [xAxisMinValueProperty.setNative](value: number) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis) {
            xAxis.axisMinimum = value
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [xAxisMaxValueProperty.setNative](value: number) {
        let xAxis: ChartXAxis;
        xAxis = this.nativeView.xAxis;
        if (xAxis) {
            xAxis.axisMaximum = value;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [leftAxisMinValueProperty.setNative](value: number) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.axisMinimum = value;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [leftAxisMaxValueProperty.setNative](value: number) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.axisMaximum = value;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }
    public [rightAxisMinValueProperty.setNative](value: number) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.axisMinimum = value;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [rightAxisMaxValueProperty.setNative](value: number) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.axisMaximum = value;
        }
        else {
            throw new Error("Property  'xAxis' of Chart undefined");
        }
    }

    public [leftAxisFormatterProperty.setNative](formatterValue: YAxisFormatterInterface) {
        if (formatterValue) {
            let leftAxis: ChartYAxis = this.nativeView.leftAxis;
            switch (formatterValue.type) {
                case "Int":
                    var formatter: ChartDefaultAxisValueFormatter = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                        if (value == 0 || value) {
                            return value.toFixed();
                        }
                        else {
                            return "";
                        }
                    })
                    leftAxis.valueFormatter = formatter;
                    break;
                case "Float":
                    var formatter: ChartDefaultAxisValueFormatter = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                        if (value == 0 || value) {
                            return value.toFixed(formatterValue.numberOfDigits);
                        }
                        else {
                            return "";
                        }
                    })
                    leftAxis.valueFormatter = formatter;
                    break;

                default:
                    break;
            }
        }
    }

    public [rightAxisFormatterProperty.setNative](formatterValue: YAxisFormatterInterface) {
        if (formatterValue) {
            let rightAxis: ChartYAxis = this.nativeView.rightAxis;
            switch (formatterValue.type) {
                case "Int":
                    var formatter: ChartDefaultAxisValueFormatter = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                        if (value == 0 || value) {
                            return value.toFixed();
                        }
                        else {
                            return "";
                        }
                    })
                    rightAxis.valueFormatter = formatter;
                    break;
                case "Float":
                    var formatter: ChartDefaultAxisValueFormatter = ChartDefaultAxisValueFormatter.alloc().initWithBlock(function (value, axis) {
                        if (value == 0 || value) {
                            return value.toFixed(formatterValue.numberOfDigits);
                        }
                        else {
                            return "";
                        }
                    })
                    rightAxis.valueFormatter = formatter;
                    break;

                default:
                    break;
            }
        }
    }

    public [fontProperty.setNative](fontName: string) {
        let font: string;
        let familyNames = UIFont.familyNames;
        let xAxis = this.nativeView.xAxis;
        let leftAxis = this.nativeView.leftAxis;
        let rightAxis = this.nativeView.rightAxis;
        for (var i = 0; i < familyNames.count; ++i) {
            if (familyNames[i] == fontName) {
                font = fontName;
                break;
            }
            var famName = familyNames[i];
            var fontNamesForFamily = UIFont.fontNamesForFamilyName(famName);
            for (var k = 0; k < fontNamesForFamily.count; ++k) {
                if (fontName == fontNamesForFamily[k]) {
                    font = fontName;
                    break;
                }
            }
        }
        if (font) {
            //set font for axis
            if (xAxis) {
                console.log(" xAxis.labelFont ", xAxis.labelFont.fontName);
                xAxis.labelFont = UIFont.fontWithNameSize(font, xAxis.labelFont.pointSize);
            }
            if (leftAxis) {
                leftAxis.labelFont = UIFont.fontWithNameSize(font, leftAxis.labelFont.pointSize);
            }
            if (rightAxis) {
                rightAxis.labelFont = UIFont.fontWithNameSize(font, rightAxis.labelFont.pointSize);
            }
            //set font for value in line
            if (this.nativeView.data) {
                let dataSets = this.nativeView.data.dataSets;
                if (dataSets) {
                    for (let i = 0; i < dataSets.count; i++) {
                        dataSets[i].valueFont = UIFont.fontWithNameSize(font, dataSets[i].valueFont.pointSize);
                    }
                }
            }
            //set font for legend
            if (this.nativeView.legend) {
                this.nativeView.legend.font = UIFont.fontWithNameSize(font, this.nativeView.legend.font.pointSize);
            }
            //set font for description
            if (this.nativeView.description) {
                this.nativeView.chartDescription.font = UIFont.fontWithNameSize(font, this.nativeView.chartDescription.font.pointSize);
            }
        }
        else {
            throw new Error("xAxisFontProperty Font " + fontName + " Do not exist");
        }
    }
    public [showValueLabelsProperty.getDefault](): boolean {
        return true;
    }

    public [showValueLabelsProperty.setNative](value: boolean) {
        this.showValueLabels = value;
        if (this.nativeView.data) {
            let dataSets = this.nativeView.data.dataSets;
            if (dataSets) {
                for (let i = 0; i < dataSets.count; i++) {
                    dataSets[i].drawValuesEnabled = value;
                }
            }
        }
    }

    public [showLeftAxisProperty.setNative](value: boolean) {
        let leftAxis: ChartYAxis;
        leftAxis = this.nativeView.leftAxis;
        if (leftAxis) {
            leftAxis.enabled = value;
        }
        else {
            throw new Error("Property  'xAxis' in showLeftAxisProperty of Chart undefined");
        }
    }

    public [showRightAxisProperty.setNative](value: boolean) {
        let rightAxis: ChartYAxis;
        rightAxis = this.nativeView.rightAxis;
        if (rightAxis) {
            rightAxis.enabled = value;
        }
        else {
            throw new Error("Property  'xAxis' in showRightAxisProperty of Chart undefined");
        }
    }
}