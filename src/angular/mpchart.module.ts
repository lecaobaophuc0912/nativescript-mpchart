import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MPLineChart", () => require("../chart").MPLineChart);
registerElement("MPBarChart", () => require("../chart").MPBarChart);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptMPLineChartModule {

}