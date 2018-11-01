import { YAxisFormatterInterface } from "../nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
export interface ChartMarkerSize {
    width: number;
    height: number;
}
export interface ChartMarkerPadding {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface ConfigDisplayData {
    showXValue: boolean;
    showYValue: boolean;
    fixedXValue?: YAxisFormatterInterface;
    fixedYValue?: YAxisFormatterInterface;
    formatter: string;
}
export interface ChartMarkerConfig {
    backgroundColor?: Color;
    textColor?: Color;
    font?: string;
    fontSize?: number;
    padding?: {
        x: number;
        y: number;
    };
    minimumSize?: ChartMarkerSize;
    textAlignment?: TextAlignment;
    borderRadius?: number;
    contentCenter?: boolean;
    displayData: ConfigDisplayData;
    xOffset?: number;
    yOffset?: number;
}
export declare type LabelPositionType = "leftOfValue" | "rightOfValue";
export declare type TextAlignment = "Left" | "Right" | "Center";
