import { Observable } from 'tns-core-modules/data/observable';
import { Color } from "tns-core-modules/color/color";
import { DataLineChartInterface, DataSetChartInterface, DataSetLabelInterface } from "nativescript-mpchart";
export class HelloWorldModel extends Observable {
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
    public dataSet: Array<DataLineChartInterface>;
    public labels: Array<DataSetLabelInterface>;
    constructor() {
        super();
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
        let item: DataLineChartInterface = {
            dataSet: arrDataView1,
            lineColor: cyan,
            highlighColor: color,
            legendLabel: "arrDataView1"
        };
        let item1: DataLineChartInterface = {
            dataSet: arrDataView2,
            lineColor: color1,
            highlighColor: color,
        };
        this.dataSet = [];
        this.dataSet.push(item);
        // this.dataSet.push(item1);
        this.labels = arrLabel;
    }
}
