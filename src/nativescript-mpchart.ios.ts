import {
    RangeSeekBarBase,
    RangeSeekBarEventData,
    minValueProperty,
    maxValueProperty,
    minStartValueProperty,
    maxStartValueProperty,
    minRangeProperty,
    stepProperty,
    cornerRadiusProperty,
    cornerRadiusCssProperty,
    barHeightProperty,
    barHeightCssProperty,
    barColorProperty,
    barColorCssProperty,
    barHighlightColorProperty,
    barHighlightColorCssProperty,
    thumbColorProperty,
    thumbColorCssProperty,
    leftThumbColorProperty,
    leftThumbColorCssProperty,
    rightThumbColorProperty,
    rightThumbColorCssProperty,
    leftThumbHighlightProperty,
    leftThumbHighlightCssProperty,
    rightThumbHighlightProperty,
    rightThumbHighlightCssProperty,
} from "./nativescript-mpchart.common";
import { Color } from "tns-core-modules/color";
import { layout } from "tns-core-modules/utils/utils";

export class RangeSeekBar extends RangeSeekBarBase {
    nativeView: TTRangeSlider;
    rangeSeekBarDelegate: TTRangeSliderDelegateImpl;

    public createNativeView() {
        const rangeSlider = TTRangeSlider.new();
        rangeSlider.hideLabels = true;
        rangeSlider.enableStep = true;
        rangeSlider.step = 1;
        rangeSlider.handleDiameter = layout.toDeviceIndependentPixels(20 * 2);
        rangeSlider.lineHeight = layout.toDeviceIndependentPixels(5);
        rangeSlider.selectedMinimum = 0;
        rangeSlider.selectedMaximum = 0;
        rangeSlider.selectedHandleDiameterMultiplier = 1.0;
        return rangeSlider;
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.frame = CGRectMake(0, 0, this.nativeView.superview.frame.size.width, 30);
        this.nativeView.delegate = this.rangeSeekBarDelegate = TTRangeSliderDelegateImpl.initWithOwner(new WeakRef<RangeSeekBar>(this));
    }

    public [minValueProperty.setNative](value: number) {
        this.nativeView.minValue = value;
    }

    public [maxValueProperty.setNative](value: number) {
        this.nativeView.maxValue = value;
    }

    public [minStartValueProperty.setNative](value: number) {
        this.nativeView.selectedMinimum = value;
    }

    public [maxStartValueProperty.setNative](value: number) {
        this.nativeView.selectedMaximum = value;
    }

    public [minRangeProperty.setNative](value: number) {
        this.nativeView.minDistance = value;
    }

    public [stepProperty.setNative](value: number) {
        this.nativeView.step = value;
    }

    public [cornerRadiusProperty.setNative](value: number) {
        this.nativeView.handleDiameter = layout.toDeviceIndependentPixels(value * 2);
    }

    public [cornerRadiusCssProperty.setNative](value: number) {
        this.nativeView.handleDiameter = layout.toDeviceIndependentPixels(value * 2);
    }

    public [barHeightProperty.setNative](value: number) {
        this.nativeView.lineHeight = layout.toDeviceIndependentPixels(value);
    }

    public [barHeightCssProperty.setNative](value: number) {
        this.nativeView.lineHeight = layout.toDeviceIndependentPixels(value);
    }

    public [barColorProperty.setNative](value: Color) {
        this.nativeView.tintColor = value.ios;
    }

    public [barColorCssProperty.setNative](value: Color) {
        this.nativeView.tintColor = value.ios;
    }

    public [barHighlightColorProperty.setNative](value: Color) {
        this.nativeView.tintColorBetweenHandles = value.ios;
    }

    public [barHighlightColorCssProperty.setNative](value: Color) {
        this.nativeView.tintColorBetweenHandles = value.ios;
    }

    public [thumbColorProperty.setNative](value: Color) {
        this.nativeView.handleColor = value.ios;
    }

    public [thumbColorCssProperty.setNative](value: Color) {
        this.nativeView.handleColor = value.ios;
    }
}

@ObjCClass(TTRangeSliderDelegate)
export class TTRangeSliderDelegateImpl extends NSObject implements TTRangeSliderDelegate {
    public owner: WeakRef<RangeSeekBar>;

    public static initWithOwner(owner: WeakRef<RangeSeekBar>): TTRangeSliderDelegateImpl {
        let delegate = TTRangeSliderDelegateImpl.new() as TTRangeSliderDelegateImpl;
        delegate.owner = owner;
        return delegate;
    }

    public rangeSliderDidChangeSelectedMinimumValueAndMaximumValue(sender: TTRangeSlider, selectedMinimum: number, selectedMaximum: number): void {
        if (this.owner && this.owner.get()) {
            let args = {
                eventName: RangeSeekBarBase.rangeSeekBarChangedEvent,
                object: sender,
                value: {
                    minValue: sender.selectedMinimum,
                    maxValue: sender.selectedMaximum
                }
            } as RangeSeekBarEventData;
            this.owner.get().notify(args);
        }
    }

    public didEndTouchesInRangeSlider(sender: TTRangeSlider): void {
        if (this.owner && this.owner.get()) {
            let args = {
                eventName: RangeSeekBarBase.rangeSeekBarFinalValueEvent,
                object: sender,
                value: {
                    minValue: sender.selectedMinimum,
                    maxValue: sender.selectedMaximum
                }
            } as RangeSeekBarEventData;
            this.owner.get().notify(args);
        }
    }
}