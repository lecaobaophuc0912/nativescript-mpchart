import { Component, ViewChild, ElementRef, ChangeDetectorRef, Self } from "@angular/core";
import { Color } from "tns-core-modules/color/color";
import { DataChartInterface, DataSetChartInterface, DataSetLabelInterface, YAxisFormatterInterface } from "nativescript-mpchart";
declare var UIFont: any;
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
})

export class AppComponent {
    @ViewChild('lineChart') lineChart: ElementRef;

    public setUp: any = {
        showGridLines: false,
        showLegend: true,
        scaleEnable: true,
        descriptionText: "Text for chart",
        descriptionXOffset: 0,
        descriptionYOffset: 0,
        descriptionTextColor: "#ffff00",
        highlightPerTapEnabled: true,
        highlightPerDragEnabled: true,
        xAxisGranularityProperty: 1,
        leftAxisGranularityProperty: 20,
        rightAxisGranularityProperty: 30,
        xAxisLineColor: "#ff0000",
        xAxisTextColor: "#ff0000",

        leftAxisLineColor: "#ff0000",
        leftAxisTextColor: "#ff0000",

        rightAxisLineColor: "#00ff00",
        rightAxisTextColor: "#00ff00",

        xAxisMinValue: 1,
        xAxisMaxValue: 7,

        leftAxisMinValue: 9,
        leftAxisMaxValue: 100,

        rightAxisMinValue: 9,
        rightAxisMaxValue: 70,

        font: "Papyrus",
        xAxisLabelPosition: "Bottom",
    };
    public leftAxisFormatter: YAxisFormatterInterface = {
        type: "Float",
        numberOfDigits: 1
    };
    public rightAxisFormatter: YAxisFormatterInterface = {
        type: "Float",
        numberOfDigits: 1
    };
    public dataSet: Array<DataChartInterface>;
    public labels: Array<DataSetLabelInterface>;
    constructor(
        public changeDetectorRef: ChangeDetectorRef
    ) {
        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];
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
        let item: DataChartInterface = {
            dataSet: arrDataView1,
            lineColor: cyan,
            highlighColor: color,
            legendLabel: "arrDataView1"
        };
        let item1: DataChartInterface = {
            dataSet: arrDataView2,
            lineColor: color1,
            highlighColor: color,
        };
        this.dataSet = [];
        this.dataSet.push(item);
        this.dataSet.push(item1);
        this.labels = arrLabel;
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

        this.setUp.xAxisMinValue = 1;
        this.setUp.xAxisMaxValue = 7;

        this.setUp.leftAxisMinValue = 9;
        this.setUp.leftAxisMaxValue = 40;

        this.setUp.rightAxisMinValue = 1;
        this.setUp.rightAxisMaxValue = 90;

        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];
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
        //     let item: DataChartInterface = {
        //         dataSet: arrDataView1,
        //         lineColor: cyan,
        //         highlighColor: color,
        //         circleColor: color,
        //         legendLabel: "arrDataView1"
        //     };
        //     let item1: DataChartInterface = {
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

            leftAxisMinValue: 0,
            leftAxisMaxValue: 50,

            rightAxisMinValue: 0,
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
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];
        console.log("color1 -09-0-0-0-0-0-0-0-- ", color1);

        for (let i = 0; i < 7; i++) {
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
        let item: DataChartInterface = {
            dataSet: arrDataView1,
            lineColor: cyan,
            highlighColor: color,
            legendLabel: "arrDataView1"
        };
        let item1: DataChartInterface = {
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
}

