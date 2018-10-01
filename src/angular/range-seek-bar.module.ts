import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("RangeSeekBar", () => require("../").RangeSeekBar);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptUIRangeSeekBarModule {

}