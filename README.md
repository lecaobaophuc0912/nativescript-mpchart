# NativeScript MPChart UI 
A NativeScript MPChart for Android and iOS.
This plugin still in develop and will update more type chart and feature in future.
Because I don't have much time so it only have demo-ng is detail But it can work in core.
Now, a plugin have simple LineChart.
### Based on
[Charts](https://github.com/LeCaoPhuc/Charts) for iOS

[MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) for Android
## Installation
Run `tns plugin add nativescript-mpchart`
## API
### Events
************************
### Instance Properties
* **showLegend** - *Boolean*  
Show or hide legend under chart. Default is false.
* **showGridLines** - *Boolean*  
Show or hide grid lines in chart. Default is false.
* **scaleEnable** - *Boolean*  
Enable or Disable zoom in chart. Default is false.
* **descriptionText** - *String*  
Gets or sets  description text inside chart. Default is empty.
* **descriptionXOffset** - *Number*  
Gets or sets description text offset from right. Default is 0;
* **descriptionYOffset** - *Number*  
Gets or sets description text offset from bottom. Default is 0.
* **descriptionTextColor** - *Color*  
Gets or sets description text color. Css property 'description-text-color'. 
* **highlightPerTapEnabled** - *Boolean*  
Enable or Disable show hight light when tap in line. Default is false.
* **highlightPerDragEnabled** - *Color*  
Enable or Disable show hight light when drag in line. Default is false.
* **xAxisGranularity** - *Number*  
Gets or sets granularity (A simple, this is like step of value in yAxis). Default value is 1.
* **yAxisGranularity** - *Number*  
Gets or sets granularity (A simple, this is like step of value in yAxis). Default value is auto equally divided.
* **xAxisLabelPosition** - *String*  
Gets or sets position of xAxis of chart.
Value :  "Top" | "Bottom" | "BothSided" | "TopInside" | "BottomInside".
Default value is "Bottom."
* **xAxisLineColor, leftAxisLineColor, rightAxisLineColor** - *Color*  
Gets or sets line color of Axis color. Css property 'x-axis-line-color', 'right-axis-line-color','left-axis-line-color'. 
* **xAxisTextColor, leftAxisTextColor, rightAxisTextColor** - *Color*  
Gets or sets text color of Axis color. Css property 'x-axis-text-color', 'right-axis-text-color','left-axis-text-color'. 
* **xAxisMinValue, leftAxisMinValue, rightAxisMinValue** - *number*  
Gets or sets min value of Axis. 
* **xAxisMaxValue, leftAxisMaxValue, rightAxisMaxValue** - *number*  
Gets or sets max value of Axis. 
* **leftAxisFormatter, rightAxisFormatter** - *YAxisFormatterInterface*  
Gets or sets formatter value for left and right Axis. Now, the plugin support two type is:  "Int" | "Float".
Default value not format it show like input.
SEE DETAIL IN DEMO.
* **font** - *string* 
Only iOS - this is Name of Font Name.
Gets or sets font of all text in chart such as legend text, axis label text, description text, value in line text..etc.etc... 
To use it you need add file .ttf from app/fonts/font-name.ttf. 
WATCH DETAIL IN DEMO.

### Method
* **resetZoomLineChart()** - *Function -> void*

Method will reset chart. Call it if some property is change but not apply in UI.

### Data setup Properties
* **items** - *Array<DataLineChartInterface>*
set Items to render chart. This is important. See more in demo and demo-ng (app.component).
* **labels** - *Array<DataSetLabelInterface>*
set list value will display in xAxis because default is show x value. A property will convert to value you want display. This is important. See more in demo and demo-ng (app.component).

### Interface

```typescript
DataSetChartInterface {
    x: number;
    y: number;
}

DataSetLabelInterface {
    xAxisValue: number,
    label: string
}

DataLineChartInterface {
    dataSet: Array<DataSetChartInterface>;
    lineColor: Color;
    highlighColor?: Color;
    circleHoleEnabled?: boolean;
    circleColor?: Color;
    circleEnable?: boolean;
    legendLabel?: string;
}

YAxisFormatterInterface {
    type: TypeFormatter,
    numberOfDigits?: number
}
DataBarChartInterface {
    dataSet: Array<DataSetChartInterface>;
    legendLabel?: string;
    highlighColor?: Color,
    barColor?: Color;
}
```

## Usage in Angular
- Import `NativeScriptMPLineChartModule` in `NgModule`:
```typescript
import { NativeScriptMPLineChartModule } from "nativescript-mpchart/angular";
//......
@NgModule({
	//......
	imports: [
        //......
		NativeScriptMPLineChartModule,
        //......
	],
    //......
})
```
- iOs: width and height will auto full in parent layout.
- Android: height is auto so you need set 
```html 
    height="100%"
```
to full in parent layout.

```html
<!-- app.component.html -->
    <!-- line chart -->
    <StackLayout height="500">
        <MPLineChart *ngIf="dataSet" #lineChart [showLegend]="setUp.showLegend" [showGridLines]="setUp.showGridLines" [scaleEnable]="setUp.scaleEnable"
            [descriptionText]="setUp.descriptionText" [descriptionXOffset]="setUp.descriptionXOffset" [descriptionYOffset]="setUp.descriptionYOffset"
            [descriptionTextColor]="setUp.descriptionTextColor" [highlightPerTapEnabled]="setUp.highlightPerTapEnabled" [highlightPerDragEnabled]="setUp.highlightPerDragEnabled"
            [xAxisGranularity]="setUp.xAxisGranularityProperty" [leftAxisGranularity]="setUp.leftAxisGranularityProperty" [rightAxisGranularity]="setUp.rightAxisGranularityProperty"
            [xAxisLineColor]="setUp.xAxisLineColor" [leftAxisLineColor]="setUp.leftAxisLineColor" [rightAxisLineColor]="setUp.rightAxisLineColor"
            [xAxisTextColor]="setUp.xAxisTextColor" [leftAxisTextColor]="setUp.leftAxisTextColor" [rightAxisTextColor]="setUp.rightAxisTextColor"
            [xAxisMinValue]="setUp.xAxisMinValue" [leftAxisMinValue]="setUp.leftAxisMinValue" [rightAxisMinValue]="setUp.rightAxisMinValue"
            [leftAxisMaxValue]="setUp.leftAxisMaxValue" [rightAxisMaxValue]="setUp.rightAxisMaxValue" [xAxisLabelPosition]="setUp.xAxisLabelPosition"
            [leftAxisFormatter]="leftAxisFormatter" [rightAxisFormatter]="rightAxisFormatter" [items]="dataSet" [labels]="labels"
            [font]="setUp.font" class="mp-chart"></MPLineChart>
    </StackLayout>
    <!-- bar chart -->
     <StackLayout height="500">
        <MPBarChart height="400" #lineChart *ngIf="barDataSet" [items]="barDataSet" [labels]="labels" [showLegend]="setUp.showLegend"
            [showGridLines]="setUp.showGridLines" [scaleEnable]="setUp.scaleEnable" [descriptionText]="setUp.descriptionText"
            [descriptionXOffset]="setUp.descriptionXOffset" [descriptionYOffset]="setUp.descriptionYOffset" [descriptionTextColor]="setUp.descriptionTextColor"
            [xAxisGranularity]="setUp.xAxisGranularityProperty" [leftAxisGranularity]="setUp.leftAxisGranularityProperty" [rightAxisGranularity]="setUp.rightAxisGranularityProperty"
            [xAxisLineColor]="setUp.xAxisLineColor" [leftAxisLineColor]="setUp.leftAxisLineColor" [rightAxisLineColor]="setUp.rightAxisLineColor"
            [xAxisTextColor]="setUp.xAxisTextColor" [leftAxisTextColor]="setUp.leftAxisTextColor" [rightAxisTextColor]="setUp.rightAxisTextColor"
            [xAxisMinValue]="setUp.xAxisMinValue" [leftAxisMinValue]="setUp.leftAxisMinValue" [rightAxisMinValue]="setUp.rightAxisMinValue"
            [leftAxisMaxValue]="setUp.leftAxisMaxValue" [rightAxisMaxValue]="setUp.rightAxisMaxValue" [xAxisLabelPosition]="setUp.xAxisLabelPosition"
            [leftAxisFormatter]="leftAxisFormatter" [rightAxisFormatter]="rightAxisFormatter" [font]="setUp.font" class="mp-chart"></MPBarChart>
    </StackLayout>

```
```css
/*app.css*/
.mp-chart {
    description-text-color: #00ff00;
    x-axis-line-color: #ff0000;
    left-axis-line-color: #005500;
    right-axis-line-color: #ff00ff;
    x-axis-text-color: #ff0000;
    left-axis-text-color: #005500;
    right-axis-text-color: #ff00ff;
}
```
```ts
// app.component.ts
import { Component } from "@angular/core";
import { DataLineChartInterface, DataSetChartInterface, DataSetLabelInterface,YAxisFormatterInterface } from "nativescript-mpchart";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

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
        type: "Int"
    };
    public dataSet: Array<DataLineChartInterface>;
    public barDataSet: Array<DataBarChartInterface>;
    public labels: Array<DataSetLabelInterface>;
    constructor() { 
       let cyan = new Color("#00FFFF");
        let color = new Color("#FF0000");
        let color1 = new Color("#00FF00");
        let arrDataView1: Array<DataSetChartInterface> = [];
        let arrDataView2: Array<DataSetChartInterface> = [];
        let arrLabel: Array<DataSetLabelInterface> = [];
        let arrDataView: Array<DataSetChartInterface> = [];
        for (let i = 0; i < 8; i++) {
            arrDataView1.push({
                x: i,
                y: i * 9,
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
        this.dataSet.push(item1);
        this.barDataSet = [];
        this.barDataSet.push({
            dataSet: arrDataView1,
            legendLabel: "barChartView1",
            highlighColor: color,
            barColor: color1
        });
        this.labels = arrLabel;
    }
}

```
## Demos
This repository includes both Angular and plain NativeScript demos. In order to run those execute the following in your shell:
```shell
$ git clone https://github.com/LeCaoPhuc/nativescript-mpchart
$ cd nativescript-mpchart/src
$ npm install
$ npm run demo
```
This will run the plain NativeScript demo project on iOS. If you want to run it on Android simply use the .android instead of the .ios sufix.

If you want to run the Angular demo simply use the demo.ios.ng.
