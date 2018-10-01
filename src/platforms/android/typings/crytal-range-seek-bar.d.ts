import javalangNumber = java.lang.Number;
declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace interfaces {
                export class OnRangeSeekbarChangeListener {
					/**
					 * Constructs a new instance of the com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        valueChanged(param0: javalangNumber, param1: javalangNumber): void;
                    });
                    public valueChanged(param0: javalangNumber, param1: javalangNumber): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace interfaces {
                export class OnRangeSeekbarFinalValueListener {
					/**
					 * Constructs a new instance of the com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        finalValue(param0: javalangNumber, param1: javalangNumber): void;
                    });
                    public finalValue(param0: javalangNumber, param1: javalangNumber): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace interfaces {
                export class OnSeekbarChangeListener {
					/**
					 * Constructs a new instance of the com.crystal.crystalrangeseekbar.interfaces.OnSeekbarChangeListener interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        valueChanged(param0: javalangNumber): void;
                    });
                    public valueChanged(param0: javalangNumber): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace interfaces {
                export class OnSeekbarFinalValueListener {
					/**
					 * Constructs a new instance of the com.crystal.crystalrangeseekbar.interfaces.OnSeekbarFinalValueListener interface with the provided implementation.
					 */
                    public constructor(implementation: {
                        finalValue(param0: javalangNumber): void;
                    });
                    public finalValue(param0: javalangNumber): void;
                }
            }
        }
    }
}

import androidcontentContext = android.content.Context;
import androidutilAttributeSet = android.util.AttributeSet;
import androidgraphicsCanvas = android.graphics.Canvas;
import androidgraphicsPaint = android.graphics.Paint;
import androidgraphicsRectF = android.graphics.RectF;
import androidgraphicsBitmap = android.graphics.Bitmap;
declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace widgets {
                export class BubbleThumbRangeSeekbar extends com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar {
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                    public drawLeftThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public init(): void;
                    public drawRightThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public touchDown(param0: number, param1: number): void;
                    public touchUp(param0: number, param1: number): void;
                    public getBubbleHeight(): number;
                    public drawLeftThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
                    public startAnimationDown(param0: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb): void;
                    public drawRightThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public constructor(param0: androidcontentContext);
                    public startAnimationUp(param0: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb): void;
                    public getBubbleWith(): number;
                }
                export namespace BubbleThumbRangeSeekbar {
                    export class BubbleRect {
                        public left: number;
                        public right: number;
                        public top: number;
                        public bottom: number;
                        public imageWith: number;
                        public imageHeight: number;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace widgets {
                export class BubbleThumbSeekbar extends com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar {
                    public touchUp(param0: number, param1: number): void;
                    public getBubbleHeight(): number;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                    public drawLeftThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
                    public drawLeftThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public startAnimationUp(): void;
                    public startAnimationDown(): void;
                    public constructor(param0: androidcontentContext);
                    public init(): void;
                    public getBubbleWith(): number;
                    public touchDown(param0: number, param1: number): void;
                }
                export namespace BubbleThumbSeekbar {
                    export class BubbleRect {
                        public left: number;
                        public right: number;
                        public top: number;
                        public bottom: number;
                        public imageWith: number;
                        public imageHeight: number;
                    }
                }
            }
        }
    }
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import androidcontentresTypedArray = android.content.res.TypedArray;
import androidviewMotionEvent = android.view.MotionEvent;
import javalangObject = java.lang.Object;
declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace widgets {
                export class CrystalRangeSeekbar {
                    public isSeekBarTouchEnabled(param0: androidcontentresTypedArray): boolean;
                    public onTouchEvent(param0: androidviewMotionEvent): boolean;
                    public drawBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getMinValue(param0: androidcontentresTypedArray): number;
                    public setupHighlightBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public setRightThumbColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public drawLeftThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getFixedGap(param0: androidcontentresTypedArray): number;
                    public getBarGradientStart(param0: androidcontentresTypedArray): number;
                    public setRightThumbHighlightDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public apply(): void;
                    public getLeftThumbRect(): androidgraphicsRectF;
                    public getRightDrawablePressed(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public log(param0: javalangObject): void;
                    public setLeftThumbDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getRightThumbColor(param0: androidcontentresTypedArray): number;
                    public setupRightThumb(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
                    public getBitmap(param0: androidgraphicsdrawableDrawable): androidgraphicsBitmap;
                    public setRightThumbBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setBarGradientStart(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getGap(param0: androidcontentresTypedArray): number;
                    public setSteps(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getMeasureSpecWith(param0: number): number;
                    public getPressedThumb(): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb;
                    public getThumbHeight(): number;
                    public setMaxValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public onDraw(param0: androidgraphicsCanvas): void;
                    public setLeftThumbBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setupLeftThumb(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getBarHeight(): number;
                    public getLeftDrawablePressed(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public setOnRangeSeekbarFinalValueListener(param0: com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener): void;
                    public touchDown(param0: number, param1: number): void;
                    public drawHighlightBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getMeasureSpecHeight(param0: number): number;
                    public drawRightThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public getLeftThumbColorPressed(param0: androidcontentresTypedArray): number;
                    public setGap(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public onMeasure(param0: number, param1: number): void;
                    public getDataType(param0: androidcontentresTypedArray): number;
                    public setMinValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public drawLeftThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public setBarHighlightColorMode(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setMaxStartValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getBarColor(param0: androidcontentresTypedArray): number;
                    public setOnRangeSeekbarChangeListener(param0: com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener): void;
                    public getDiameter(param0: androidcontentresTypedArray): number;
                    public setRightThumbDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getCornerRadius(param0: androidcontentresTypedArray): number;
                    public setLeftThumbHighlightBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getBarHighlightColorMode(param0: androidcontentresTypedArray): number;
                    public getBarPadding(): number;
                    public getBarHeight(param0: androidcontentresTypedArray): number;
                    public getLeftDrawable(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public drawRightThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getThumbWidth(): number;
                    public touchMove(param0: number, param1: number): void;
                    public setBarHighlightColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getThumbDiameter(): number;
                    public getSteps(param0: androidcontentresTypedArray): number;
                    public getRightThumbColorPressed(param0: androidcontentresTypedArray): number;
                    public getBarHighlightGradientEnd(param0: androidcontentresTypedArray): number;
                    public setCornerRadius(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setDataType(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setLeftThumbHighlightDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getRightDrawable(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public getMaxStartValue(param0: androidcontentresTypedArray): number;
                    public setMinStartValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getBarHighlightGradientStart(param0: androidcontentresTypedArray): number;
                    public setRightThumbHighlightBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setBarHighlightGradientEnd(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setLeftThumbDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getBarGradientEnd(param0: androidcontentresTypedArray): number;
                    public setLeftThumbHighlightColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setLeftThumbColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getSelectedMinValue(): javalangNumber;
                    public getMinStartValue(param0: androidcontentresTypedArray): number;
                    public getLeftThumbColor(param0: androidcontentresTypedArray): number;
                    public trackTouchEvent(param0: androidviewMotionEvent): void;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                    public setRightThumbHighlightColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setBarColorMode(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setFixGap(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setBarHeight(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getRightThumbRect(): androidgraphicsRectF;
                    public touchUp(param0: number, param1: number): void;
                    public setBarHighlightGradientStart(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setLeftThumbHighlightDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setupBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getBarColorMode(param0: androidcontentresTypedArray): number;
                    public getSelectedMaxValue(): javalangNumber;
                    public init(): void;
                    public setBarColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getBarHighlightColor(param0: androidcontentresTypedArray): number;
                    public setRightThumbHighlightDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public setBarGradientEnd(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                    public getMaxValue(param0: androidcontentresTypedArray): number;
                    public constructor(param0: androidcontentContext);
                    public setRightThumbDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;
                }
                export namespace CrystalRangeSeekbar {
                    export class ColorMode {
                        public static SOLID: number;
                        public static GRADIENT: number;
                        public constructor();
                    }
                    export class DataType {
                        public static LONG: number;
                        public static DOUBLE: number;
                        public static INTEGER: number;
                        public static FLOAT: number;
                        public static SHORT: number;
                        public static BYTE: number;
                        public constructor();
                    }
                    export class Thumb {
                        public static MIN: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb;
                        public static MAX: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb;
                        public static valueOf(param0: string): com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb;
                        public static values(): native.Array<com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.Thumb>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace crystal {
        export namespace crystalrangeseekbar {
            export namespace widgets {
                export class CrystalSeekbar {
                    public setThumbHighlightDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public isSeekBarTouchEnabled(param0: androidcontentresTypedArray): boolean;
                    public onTouchEvent(param0: androidviewMotionEvent): boolean;
                    public getThumbDrawablePressed(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public getCornerRadius(): number;
                    public getBarHighlightColor(): number;
                    public getCornerRadius(param0: androidcontentresTypedArray): number;
                    public drawBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getBarHighlightColorMode(param0: androidcontentresTypedArray): number;
                    public setThumbHighlightBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setPosition(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getBarPadding(): number;
                    public getMinValue(param0: androidcontentresTypedArray): number;
                    public getBarHeight(param0: androidcontentresTypedArray): number;
                    public setThumbColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setupHighlightBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public setDataType(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getThumbWidth(): number;
                    public getPressedThumb(): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar.Thumb;
                    public touchMove(param0: number, param1: number): void;
                    public setThumbDrawable(param0: androidgraphicsdrawableDrawable): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public drawLeftThumbWithColor(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getThumbDiameter(): number;
                    public getSteps(param0: androidcontentresTypedArray): number;
                    public getBarGradientStart(param0: androidcontentresTypedArray): number;
                    public getBarHighlightGradientEnd(param0: androidcontentresTypedArray): number;
                    public getLeftThumbColorPressed(): number;
                    public apply(): void;
                    public getThumbColorPressed(param0: androidcontentresTypedArray): number;
                    public setThumbBitmap(param0: androidgraphicsBitmap): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getDataType(): number;
                    public getBarHighlightGradientStart(param0: androidcontentresTypedArray): number;
                    public setBarHighlightGradientStart(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public log(param0: javalangObject): void;
                    public setBarGradientEnd(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getBarGradientEnd(param0: androidcontentresTypedArray): number;
                    public getThumbDrawable(param0: androidcontentresTypedArray): androidgraphicsdrawableDrawable;
                    public setBarHighlightColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
                    public setBarGradientStart(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getBitmap(param0: androidgraphicsdrawableDrawable): androidgraphicsBitmap;
                    public getSelectedMinValue(): javalangNumber;
                    public getMinStartValue(param0: androidcontentresTypedArray): number;
                    public trackTouchEvent(param0: androidviewMotionEvent): void;
                    public setCornerRadius(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getThumbColor(param0: androidcontentresTypedArray): number;
                    public getPosition(): number;
                    public getMeasureSpecWith(param0: number): number;
                    public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                    public setThumbHighlightColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getThumbHeight(): number;
                    public getThumbRect(): androidgraphicsRectF;
                    public getLeftThumbColor(): number;
                    public onDraw(param0: androidgraphicsCanvas): void;
                    public setupLeftThumb(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getBarHeight(): number;
                    public setOnSeekbarChangeListener(param0: com.crystal.crystalrangeseekbar.interfaces.OnSeekbarChangeListener): void;
                    public touchDown(param0: number, param1: number): void;
                    public touchUp(param0: number, param1: number): void;
                    public setMaxValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getPosition(param0: androidcontentresTypedArray): number;
                    public setSteps(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public drawHighlightBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public getMeasureSpecHeight(param0: number): number;
                    public getMaxValue(): number;
                    public setThumbDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setThumbHighlightDrawable(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setupBar(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF): void;
                    public onMeasure(param0: number, param1: number): void;
                    public getBarColorMode(param0: androidcontentresTypedArray): number;
                    public getSelectedMaxValue(): javalangNumber;
                    public getDataType(param0: androidcontentresTypedArray): number;
                    public setBarHeight(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getMinStartValue(): number;
                    public setMinValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public drawLeftThumbWithImage(param0: androidgraphicsCanvas, param1: androidgraphicsPaint, param2: androidgraphicsRectF, param3: androidgraphicsBitmap): void;
                    public init(): void;
                    public setBarHighlightGradientEnd(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getLeftDrawable(): androidgraphicsdrawableDrawable;
                    public getBarColor(): number;
                    public getBarHighlightColor(param0: androidcontentresTypedArray): number;
                    public setBarHighlightColorMode(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getSteps(): number;
                    public getBarColor(param0: androidcontentresTypedArray): number;
                    public getDiameter(param0: androidcontentresTypedArray): number;
                    public setOnSeekbarFinalValueListener(param0: com.crystal.crystalrangeseekbar.interfaces.OnSeekbarFinalValueListener): void;
                    public getMaxValue(param0: androidcontentresTypedArray): number;
                    public constructor(param0: androidcontentContext);
                    public setMinStartValue(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setBarColorMode(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public setBarColor(param0: number): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar;
                    public getLeftDrawablePressed(): androidgraphicsdrawableDrawable;
                    public getMinValue(): number;
                }
                export namespace CrystalSeekbar {
                    export class ColorMode {
                        public static SOLID: number;
                        public static GRADIENT: number;
                        public constructor();
                    }
                    export class DataType {
                        public static LONG: number;
                        public static DOUBLE: number;
                        public static INTEGER: number;
                        public static FLOAT: number;
                        public static SHORT: number;
                        public static BYTE: number;
                        public constructor();
                    }
                    export class Position {
                        public static LEFT: number;
                        public static RIGHT: number;
                        public constructor();
                    }
                    export class Thumb {
                        public static MIN: com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar.Thumb;
                        public static valueOf(param0: string): com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar.Thumb;
                        public static values(): native.Array<com.crystal.crystalrangeseekbar.widgets.CrystalSeekbar.Thumb>;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace example {
        export namespace crystalrangeseekbar {
            export class BuildConfig {
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
                public static VERSION_CODE: number;
                public static VERSION_NAME: string;
                public constructor();
            }
        }
    }
}

