import { Component, ViewChild, ElementRef, ChangeDetectorRef, Self } from "@angular/core";
import { Color } from "tns-core-modules/color/color";
import { DataLineChartInterface, DataBarChartInterface, DataSetChartInterface, DataSetLabelInterface, YAxisFormatterInterface} from "nativescript-mpchart";
// import { ChartMarkerConfig, ChartMarkerSize, ConfigDisplayData } from "nativescript-mpchart/chart/custom-marker-view/custom-marker-view.common"
import * as application from "application";
import { Page } from "ui/page"
// declare var UIFont: any;
declare var BarChartData: any;
declare var org: any;
declare var UIEdgeInsetsMake: any;
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
})

export class AppComponent {
    @ViewChild('lineChart') lineChart: ElementRef;
    @ViewChild('view') view: ElementRef;

    public setUp: any = {
        showGridLines: false,
        showLegend: true,
        scaleEnable: true,
        descriptionText: "Text for chart",
        descriptionXOffset: 0,
        descriptionYOffset: 0,
        descriptionTextColor: "#ff0000",
        highlightPerTapEnabled: true,
        highlightPerDragEnabled: true,
        xAxisGranularityProperty: 1,
        leftAxisGranularityProperty: 20,
        rightAxisGranularityProperty: 30,
        xAxisLineColor: "#ff0000",
        xAxisTextColor: "#ff0000",

        leftAxisLineColor: "#0000ff",
        leftAxisTextColor: "#0000ff",

        rightAxisLineColor: "#00ff00",
        rightAxisTextColor: "#00ff00",

        xAxisMinValue: -1,
        xAxisMaxValue: 3,

        leftAxisMinValue: 0,
        leftAxisMaxValue: 100,

        rightAxisMinValue: 0,
        rightAxisMaxValue: 70,

        font: "Papyrus",
        showValueLabels: false,
        showLeftAxis: true,
        showRightAxis: true,
        xAxisLabelPosition: "Bottom",
    };
    public leftAxisFormatter: any = {
        type: "Float",
        numberOfDigits: 1
    };
    public rightAxisFormatter: any = {
        type: "Float",
        numberOfDigits: 1
    };

    public markerConfig: any;
    public dataSet: Array<any>;
    public barDataSet: Array<DataBarChartInterface>;
    public labels: Array<any>;
    constructor(
        public changeDetectorRef: ChangeDetectorRef,
    ) {
        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<any> = [];
        let arrDataView2: Array<any> = [];
        let arrLabel: Array<any> = [];
        let arrDataView: Array<any> = [];
        for (let i = 0; i < 8; i++) {
            arrDataView1.push({
                x: i,
                y: i * 9.3,
            });
            arrDataView2.push({
                x: i,
                y: i + 30,
            });

            arrLabel.push({
                xAxisValue: i,
                label: `Tháng ` + (i + 1)
            })

        }
        let item: any = {
            dataSet: arrDataView1,
            lineColor: cyan,
            highlighColor: color,
            legendLabel: "arrDataView1"
        };
        let item1: any = {
            dataSet: arrDataView2,
            lineColor: color1,
            highlighColor: color,
        };
        this.dataSet = [];
        this.dataSet.push(item);
        this.dataSet.push(item1);
        this.barDataSet = [];
        this.barDataSet.push({
            dataSet: arrDataView1,
            legendLabel: "barChartView1",
            highlighColor: color,
            barColor: color1
        });
        // this.barDataSet.push({
        //     dataSet: arrDataView2,
        //     legendLabel: "barChartView2",
        //     highlighColor: color,
        //     barColor: cyan
        // });
        this.labels = arrLabel;
        this.markerConfig = {
            displayData: {
                showXValue: false,
                showYValue: true,
                formatter: "Yvalue: {{y}}",
            },
            contentCenter: true,
            xOffset: -30,
            yOffset: -30,
            backgroundColor: new Color("#0000ff"),
            textColor: new Color("#ffffff"),
            font: "Papyrus",
            fontSize: 12,
            padding: {
                x: 20,
                y: 10
            }
        }
    }

    ngOnInit() {
        let self = this;
        setTimeout(function () {
            // console.log("ngOnInit ", self.lineChart.nativeElement.ios.leftAxis.axisMinimum);
        }, 500)

        // this.setUp.leftAxisMinValue = 0;
    }

    onTap(args) {
        this.leftAxisFormatter = {
            type: "Float",
            numberOfDigits: 2
        }
        this.rightAxisFormatter = {
            type: "Float",
            numberOfDigits: 2
        }
        this.setUp.scaleEnable = true;
        this.setUp.showLegend = !this.setUp.showLegend;

        this.setUp.showGridLines = true;
        this.setUp.descriptionText = "onTap Description";
        this.setUp.descriptionXOffset = 100;
        this.setUp.descriptionYOffset = 100;
        this.setUp.descriptionTextColor = "#ff0000";
        this.setUp.highlightPerTapEnabled = !this.setUp.highlightPerTapEnabled;
        this.setUp.highlightPerDragEnabled = !this.setUp.highlightPerDragEnabled;
        this.setUp.xAxisGranularityProperty = 3;
        this.setUp.rightAxisGranularityProperty = 15;
        this.setUp.leftAxisGranularityProperty = 15;
        this.setUp.leftAxisGranularityProperty = 20,
            this.setUp.rightAxisGranularityProperty = 30,
            this.setUp.xAxisLineColor = "#ff0000",
            this.setUp.xAxisTextColor = "#ff0000",
            this.setUp.leftAxisLineColor = "#00ff00",
            this.setUp.leftAxisTextColor = "#00ff00",
            this.setUp.rightAxisLineColor = "#0000ff",
            this.setUp.rightAxisTextColor = "#0000ff",
            this.setUp.xAxisLabelPosition = "Bottom";
        this.setUp.showValueLabels = !this.setUp.showValueLabels;
        this.setUp.showLeftAxis = !this.setUp.showLeftAxis;
        this.setUp.showRightAxis = !this.setUp.showRightAxis;
        this.setUp.xAxisMinValue = 1;
        this.setUp.xAxisMaxValue = 7;

        this.setUp.leftAxisMinValue = 9;
        this.setUp.leftAxisMaxValue = 40;

        this.setUp.rightAxisMinValue = 1;
        this.setUp.rightAxisMaxValue = 90;

        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<any> = [];
        let arrDataView2: Array<any> = [];
        let arrLabel: Array<any> = [];


        // let customChartMarkerView = new CustomChartMarkerView(application.android.context, packageName.R.layout.default_marker_view);
        // customChartMarkerView.setConfig(this.markerConfig);
        // this.lineChart.nativeElement.android.setMarker(customChartMarkerView);
        // this.lineChart.nativeElement.android.getAxisLeft().setAxisLineColor(color1.android);
        //     for (let i = 0; i < 9; i++) {
        //         arrDataView1.push({
        //             x: i,
        //             y: i * 9,
        //         });
        //         arrDataView2.push({
        //             x: i,
        //             y: i + 10,
        //         });

        //         arrLabel.push({
        //             xAxisValue: i,
        //             label: `Tháng ` + (i + 1)
        //         })

        //     }
        //     let item: DataLineChartInterface = {
        //         dataSet: arrDataView1,
        //         lineColor: cyan,
        //         highlighColor: color,
        //         circleColor: color,
        //         legendLabel: "arrDataView1"
        //     };
        //     let item1: DataLineChartInterface = {
        //         dataSet: arrDataView2,
        //         lineColor: color1,
        //         highlighColor: color,
        //     };
        //     this.dataSet = [];
        //     this.dataSet.push(item);
        //     // this.dataSet.push(item1);
        //     this.labels = arrLabel;
        this.lineChart.nativeElement.resetZoomLineChart();
        //     this.changeDetectorRef.detectChanges();
    }

    onTapDefault(args) {
        this.leftAxisFormatter = {
            type: "Int"
        }
        this.rightAxisFormatter = {
            type: "Int"
        }
        this.setUp = {
            showGridLines: false,
            showLegend: true,
            scaleEnable: false,
            descriptionText: "Text for chart",
            descriptionXOffset: 0,
            descriptionYOffset: 0,
            descriptionTextColor: "#ffff00",
            highlightPerTapEnabled: false,
            highlightPerDragEnabled: false,
            xAxisGranularityProperty: 1,
            leftAxisGranularityProperty: 20,
            rightAxisGranularityProperty: 30,
            xAxisLineColor: "#00ffff",
            xAxisTextColor: "#00ffff",

            leftAxisLineColor: "#ffff00",
            leftAxisTextColor: "#ffff00",

            rightAxisLineColor: "#ff00ff",
            rightAxisTextColor: "#ff00ff",

            xAxisLabelPosition: "Bottom",

            xAxisMinValue: 0,
            xAxisMaxValue: 6,

            leftAxisMinValue: 9,
            leftAxisMaxValue: 50,

            rightAxisMinValue: 9,
            rightAxisMaxValue: 80,
        };
        // this.setUp = {
        //     showGridLines: false,
        //     showLegend: true,
        //     scaleEnable: true,
        //     descriptionText: "Text for chart",
        //     descriptionXOffset: 0,
        //     descriptionYOffset: 0,
        //     descriptionTextColor: "#ffff00",
        //     highlightPerTapEnabled: true,
        //     highlightPerDragEnabled: true,
        //     xAxisGranularityProperty: 1,
        //     leftAxisGranularityProperty: 20,
        //     rightAxisGranularityProperty: 30,
        //     xAxisLineColor: "#0000ff",
        //     leftAxisLineColor: "#ff0000",
        //     rightAxisLineColor: "#00ff00",
        //     xAxisLabelPosition: "Bottom"
        // };
        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<any> = [];
        let arrDataView2: Array<any> = [];
        let arrLabel: Array<any> = [];
        console.log("color1 -09-0-0-0-0-0-0-0-- ", color1);

        for (let i = 0; i < 8; i++) {
            arrDataView1.push({
                x: i,
                y: i * 9,
            });
            arrDataView2.push({
                x: i,
                y: i + 10,
            });

            arrLabel.push({
                xAxisValue: i,
                label: `Tháng ` + (i + 1)
            })

        }
        let item: any = {
            dataSet: arrDataView1,
            lineColor: cyan,
            highlighColor: color,
            legendLabel: "arrDataView1"
        };
        let item1: any = {
            dataSet: arrDataView2,
            lineColor: color1,
            highlighColor: color,
        };
        this.dataSet = [];
        this.dataSet.push(item);
        // this.dataSet.push(item1);
        this.labels = arrLabel;
        this.lineChart.nativeElement.resetZoomLineChart();
    }


    onTapFont() {
        var retFonts = [];
        var familyNames = UIFont.familyNames;
        for (var i = 0; i < familyNames.count; ++i) {
            if (familyNames[i] == 'Material Icons') {
            }
            var famName = familyNames[i];
            var fontNamesForFamily = UIFont.fontNamesForFamilyName(famName);
            for (var k = 0; k < fontNamesForFamily.count; ++k) {
                var fontName = fontNamesForFamily[k];
                retFonts.push(fontName);
            }
        }
        this.lineChart.nativeElement.ios.leftAxis.labelFont = UIFont.fontWithNameSize("Papyrus", this.lineChart.nativeElement.ios.xAxis.labelFont.pointSize);
        console.log("onTapFont ", this.lineChart.nativeElement.ios.leftAxis.labelFont.fontName);
        this.lineChart.nativeElement.resetZoomLineChart();
    }

    onTapTest() {
        // let barChartView = BarChartView.new();
        // let barChartData = BarChartData.new();
        // let entries: NSMutableArray<any> = NSMutableArray.new();
        // let entrie = BarChartDataEntry.alloc().initWithXY(0, 1);
        // entries.addObject(entrie);
        // let dataset: BarChartDataSet = BarChartDataSet.alloc().initWithValuesLabel(entries, "labelLegend");
        // try {
        //     console.log('before');
        //     barChartData.addDataSet(dataset);
        //     this.lineChart.nativeElement.ios.barChartData = barChartData;
        //     this.lineChart.nativeElement.ios.setData();
        //     console.log('after');
        // }
        // catch (ex) {
        //     console.log("ex ", ex);
        // }

        // console.log("onTapTest");
    }
}

