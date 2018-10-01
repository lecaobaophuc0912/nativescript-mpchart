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

export class RangeSeekBar extends RangeSeekBarBase {
    nativeView: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;

    public createNativeView() {
        const crystalRangeSeekBar = new com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar(this._context);
        crystalRangeSeekBar.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        crystalRangeSeekBar.setSteps(1);
        crystalRangeSeekBar.setCornerRadius(20);
        crystalRangeSeekBar.setBarHeight(5).apply();
        crystalRangeSeekBar.setMinStartValue(0).apply();
        crystalRangeSeekBar.setMaxStartValue(0).apply();
        initRangeSeekbarChangeListener();
        const rangeSeekbarChangeListener = new RangeSeekbarChangeListener(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarChangeListener(rangeSeekbarChangeListener);
        initRangeSeekbarFinalValueListener();
        const rangeSeekbarFinalValueListener = new RangeSeekbarFinalValueListener(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarFinalValueListener(rangeSeekbarFinalValueListener);
        return crystalRangeSeekBar;
    }

    public [minValueProperty.setNative](value: number) {
        this.nativeView.setMinValue(value);
    }

    public [maxValueProperty.setNative](value: number) {
        this.nativeView.setMaxValue(value);
    }

    public [minStartValueProperty.setNative](value: number) {
        this.nativeView.setMinStartValue(value).apply();
    }

    public [maxStartValueProperty.setNative](value: number) {
        this.nativeView.setMaxStartValue(value).apply();
    }

    public [minRangeProperty.setNative](value: number) {
        this.nativeView.setGap(value);
    }

    public [stepProperty.setNative](value: number) {
        if (Number.isInteger(value)) {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        }
        else {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.DOUBLE);
        }
        this.nativeView.setSteps(value);
    }

    public [cornerRadiusProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [cornerRadiusCssProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [barHeightProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barHeightCssProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barColorProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barHighlightColorProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [barHighlightColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [thumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [thumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [leftThumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [leftThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [rightThumbColorProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [rightThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [leftThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [leftThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }
}

// RangeSeekbarChangeListener START
interface RangeSeekbarChangeListener extends java.lang.Object, com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener {
    new (owner: WeakRef<RangeSeekBar>): RangeSeekbarChangeListener;
}

let RangeSeekbarChangeListener: RangeSeekbarChangeListener;

function initRangeSeekbarChangeListener() {
    if (RangeSeekbarChangeListener) {
        return;
    }
    @Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener])
    class RangeSeekbarChangeListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener {

        constructor(private owner: WeakRef<RangeSeekBar>) {
            super();
            return global.__native(this);
        }

        public valueChanged(minValue: any, maxValue: any): void {
            if (this.owner && this.owner.get()) {
                let args = {
                    eventName: RangeSeekBarBase.rangeSeekBarChangedEvent,
                    object: this.owner,
                    value: {
                        minValue: minValue,
                        maxValue: maxValue
                    }
                } as RangeSeekBarEventData;
                this.owner.get().notify(args);
            }
        }
    }
    RangeSeekbarChangeListener = RangeSeekbarChangeListenerImpl as any;
}
// RangeSeekbarChangeListener END

// RangeSeekbarFinalValueListener START
interface RangeSeekbarFinalValueListener extends java.lang.Object, com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {
    new (owner: WeakRef<RangeSeekBar>): RangeSeekbarFinalValueListener;
}

let RangeSeekbarFinalValueListener: RangeSeekbarFinalValueListener;

function initRangeSeekbarFinalValueListener() {
    if (RangeSeekbarFinalValueListener) {
        return;
    }

    @Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener])
    class RangeSeekbarFinalValueListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {

        constructor(private owner: WeakRef<RangeSeekBar>) {
            super();
            return global.__native(this);
        }

        public finalValue(minValue: any, maxValue: any): void {
            if (this.owner && this.owner.get()) {
                let args = {
                    eventName: RangeSeekBarBase.rangeSeekBarFinalValueEvent,
                    object: this.owner,
                    value: {
                        minValue: minValue,
                        maxValue: maxValue
                    }
                } as RangeSeekBarEventData;
                this.owner.get().notify(args);
            }
        }
    }
    RangeSeekbarFinalValueListener = RangeSeekbarFinalValueListenerImpl as any;
}
// RangeSeekbarFinalValueListener END