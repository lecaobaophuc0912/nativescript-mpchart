# NativeScript MPChart UI 
A NativeScript MPChart for Android and iOS.
This plugin in develop and will update more type chart and feature in future.
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
### Method
* **resetZoomLineChart()** - *Function -> void*

Method will reset chart. Call it if some property is change but not apply in UI.

### Data setup Properties
* **items** - *Array<DataChartInterface>*
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

DataChartInterface {
    dataSet: Array<DataSetChartInterface>;
    lineColor: Color;
    highlighColor?: Color;
    circleHoleEnabled?: boolean;
    circleColor?: Color;
    circleEnable?: boolean;
    legendLabel?: string;
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
<StackLayout>
    <MPLineChart *ngIf="dataSet" [showLegend]="setUp.showLegend" [showGridLines]="setUp.showGridLines" [scaleEnable]="setUp.scaleEnable"
            [descriptionText]="setUp.descriptionText" [descriptionXOffset]="setUp.descriptionXOffset" [descriptionYOffset]="setUp.descriptionYOffset"
            [highlightPerTapEnabled]="setUp.highlightPerTapEnabled" [highlightPerDragEnabled]="setUp.highlightPerDragEnabled"
            [xAxisGranularity]="setUp.xAxisGranularityProperty" [yAxisGranularity]="setUp.yAxisGranularityProperty" [xAxisLabelPosition]="setUp.xAxisLabelPosition"
            [items]="dataSet" [labels]="labels" #lineChart class="mp-chart"></MPLineChart>
</StackLayout>
```
```css
/*app.css*/
.mp-chart {
   description-text-color: #00ff00;
}
```
```ts
// app.component.ts
import { Component } from "@angular/core";
import { DataChartInterface, DataSetChartInterface, DataSetLabelInterface } from "nativescript-mpchart";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public setUp = {
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
    public dataSet: Array<DataChartInterface>;
    public labels: Array<DataSetLabelInterface>;
    constructor() { 
        let arrDataView1: Array<DataSetChartInterface> = [];
        let color = new Color("#FF0000");

        for (let i = 0; i < 8; i++) {
            arrDataView1.push({
                x: i,      // this is value in xAxis
                y: i * 3,  // this is value in yAxis
            });
            arrLabel.push({
                xAxisValue: i, // THIS IS IMPORTANT.  xAxisValue must be equal value in xAxis. In case it is "i".
                label: `Tháng ` + (i + 1)
            })

        }
        let item: DataChartInterface = {
            dataSet: arrDataView1,
            lineColor: color,
            highlighColor: color,
            legendLabel: "Legend text arrDataView1"
        };
        this.dataSet.push(item);
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
