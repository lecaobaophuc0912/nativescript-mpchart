import { Component } from "@angular/core";
import { RangeSeekBarEventData } from "nativescript-mpchart";

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
