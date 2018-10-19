import { Component, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";
import { Color } from "tns-core-modules/color/color";
import { DataChartInterface, DataSetChartInterface, DataSetLabelInterface } from "nativescript-mpchart";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    @ViewChild('lineChart') lineChart: ElementRef;
    public setUp: any = {
        showGridLines: false,
        showLegend: false,
        scaleEnable: false,
        descriptionText: "Text for chart",
        descriptionXOffset: 0,
        descriptionYOffset: 0,
        descriptionTextColor: "#ffff00",
        highlightPerTapEnabled: true,
        highlightPerDragEnabled: true,
        xAxisGranularityProperty: 1,
        yAxisGranularityProperty: 40,
        xAxisLabelPosition: "Bottom"
    };
    public rangeSeekBarProp = {
        minValue: 0,
        maxValue: 100,
        minStartValue: 0,
        maxStartValue: 100,
        minRange: 0,
        step: 1
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
        // this.dataSet.push(item1);
        this.labels = arrLabel;
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    onTap(args) {
        console.log("onTap ");
        this.setUp.scaleEnable = !this.setUp.scaleEnable;
        this.setUp.showLegend = !this.setUp.showLegend;

        this.setUp.showGridLines = !this.setUp.showGridLines;
        this.setUp.descriptionText = "onTap Description";
        this.setUp.descriptionXOffset = 100;
        this.setUp.descriptionYOffset = 100;
        this.setUp.descriptionTextColor = "#ff0000";
        this.setUp.highlightPerTapEnabled = !this.setUp.highlightPerTapEnabled;
        this.setUp.highlightPerDragEnabled = !this.setUp.highlightPerDragEnabled;
        this.setUp.xAxisGranularityProperty = 3;
        this.setUp.yAxisGranularityProperty = 20;
        this.setUp.xAxisLabelPosition = "Bottom";



        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];

        for (let i = 0; i < 9; i++) {
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
            circleColor: color,
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
        this.changeDetectorRef.detectChanges();
    }

    onTapDefault(args) {
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
            yAxisGranularityProperty: 40,
            xAxisLabelPosition: "Top"
        };
        console.log("xAxisGranularityProperty ", this.setUp.xAxisGranularityProperty);
        let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];

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
}
