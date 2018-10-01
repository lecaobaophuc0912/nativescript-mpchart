# NativeScript Range Seek Bar
A NativeScript Range Seek Bar widget.
### Based on
[TTRangeSlider ](https://github.com/TomThorpe/TTRangeSlider) for iOS

[Crystal Range Seekbar](https://github.com/syedowaisali/crystal-range-seekbar) for Android
## Installation
Run `tns plugin add nativescript-range-seek-bar`
## API
### Events
* **rangeSeekBarChanged**  
Triggered when user has changed minimum value or maximum value on the Range Seek Bar.
* **rangeSeekBarFinalValue**  
Triggered when user has finished touch on the Range Seek Bar.
### Instance Properties
* **minValue** - *Number*  
Gets or sets minimum value of the Range Seek Bar.
* **maxValue** - *Number*  
Gets or sets maximum value of the Range Seek Bar.
* **minStartValue** - *Number*  
Gets or sets minimum start value of the Range Seek Bar.
* **maxStartValue** - *Number*  
Gets or sets maximum start value of the Range Seek Bar.
* **minRange** - *Number*  
Gets or sets minimum range of two thumb.
* **step** - *Number*  
Gets or sets minimum steps between range, default is 1.
* **cornerRadius** - *Number*  
Gets or sets corner radius of two thumb.
* **barHeight** - *Number*  
Gets or sets bar height of the Range Seek Bar.
* **barColor** - *Color*  
Gets or sets bar color of the Range Seek Bar.
* **barHighlightColor** - *Color*  
Gets or sets bar highlight color of the Range Seek Bar.
* **thumbColor** - *Color*  
Gets or sets color of two thumb.
## Usage in Angular
- Import `NativeScriptUIRangeSeekBarModule` in `NgModule`:
```typescript
import { NativeScriptUIRangeSeekBarModule } from "nativescript-range-seek-bar/angular";
//......
@NgModule({
	//......
	imports: [
        //......
		NativeScriptUIRangeSeekBarModule,
        //......
	],
    //......
})
```
```html
<!-- app.component.html -->
<StackLayout>
    <RangeSeekBar [minValue]="rangeSeekBarProp.minValue" [maxValue]="rangeSeekBarProp.maxValue" [minStartValue]="rangeSeekBarProp.minStartValue"
        [maxStartValue]="rangeSeekBarProp.maxStartValue" [minRange]="rangeSeekBarProp.minRange" [step]="rangeSeekBarProp.step"
        (rangeSeekBarChanged)="rangeSeekBarChanged($event)" (rangeSeekBarFinalValue)="rangeSeekBarFinalValue($event)" class="range-seek-bar"></RangeSeekBar>
</StackLayout>
```
```css
/*app.css*/
.range-seek-bar {
    bar-color: #8990C4;
    bar-highlight-color: #2434AD;
    thumb-color: #1A246D;
    bar-height: 10;
    corner-radius: 30;
}
```
```ts
// app.component.ts
import { Component } from "@angular/core";
import { RangeSeekBarEventData } from "nativescript-range-seek-bar";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public rangeSeekBarProp = {
        minValue: 0,
        maxValue: 100,
        minStartValue: 0,
        maxStartValue: 100,
        minRange: 0,
        step: 1
    };

    constructor() { }

    rangeSeekBarChanged(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarChanged: ", event.value);
    }

    rangeSeekBarFinalValue(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarFinalValue: ", event.value);
    }
}

```
## Demos
This repository includes both Angular and plain NativeScript demos. In order to run those execute the following in your shell:
```shell
$ git clone https://github.com/HoangJK/nativescript-range-seek-bar.git
$ cd nativescript-range-seek-bar/src
$ npm install
$ npm run demo.ios
```
This will run the plain NativeScript demo project on iOS. If you want to run it on Android simply use the .android instead of the .ios sufix.

If you want to run the Angular demo simply use the demo.ios.ng.
