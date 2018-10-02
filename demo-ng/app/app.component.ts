import { Component } from "@angular/core";

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

    ngOnInit() {
        console.log("ngOnInit");
    }

    onTap(args) {
        console.log("onTap");
    }

}
