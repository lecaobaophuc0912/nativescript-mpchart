
import globalAndroid = android;

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.mikephil.charting.BuildConfig>;
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
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export class R {
					public static class: java.lang.Class<com.github.mikephil.charting.R>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module animation {
					export class ChartAnimator {
						public static class: java.lang.Class<com.github.mikephil.charting.animation.ChartAnimator>;
						public mPhaseY: number;
						public mPhaseX: number;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public constructor();
						public constructor(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener);
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public getPhaseX(): number;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.Easing.EasingOption, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public animateY(param0: number): void;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public animateX(param0: number): void;
						public getPhaseY(): number;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.EasingFunction, param3: com.github.mikephil.charting.animation.EasingFunction): void;
						public animateXY(param0: number, param1: number): void;
						public setPhaseX(param0: number): void;
						public setPhaseY(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module animation {
					export class Easing {
						public static class: java.lang.Class<com.github.mikephil.charting.animation.Easing>;
						public constructor();
						public static getEasingFunctionFromOption(param0: com.github.mikephil.charting.animation.Easing.EasingOption): com.github.mikephil.charting.animation.EasingFunction;
					}
					export module Easing {
						export class EasingFunctions {
							public static class: java.lang.Class<com.github.mikephil.charting.animation.Easing.EasingFunctions>;
							public static Linear: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInBounce: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutBounce: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutBounce: com.github.mikephil.charting.animation.EasingFunction;
						}
						export class EasingOption {
							public static class: java.lang.Class<com.github.mikephil.charting.animation.Easing.EasingOption>;
							public static Linear: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static values(): native.Array<com.github.mikephil.charting.animation.Easing.EasingOption>;
							public static valueOf(param0: string): com.github.mikephil.charting.animation.Easing.EasingOption;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module animation {
					export class EasingFunction {
						public static class: java.lang.Class<com.github.mikephil.charting.animation.EasingFunction>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.animation.EasingFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getInterpolation(param0: number): number;
						});
						public constructor();
						public getInterpolation(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export abstract class AbstractBuffer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.github.mikephil.charting.buffer.AbstractBuffer<any>>;
						public index: number;
						public buffer: native.Array<number>;
						public phaseX: number;
						public phaseY: number;
						public mFrom: number;
						public mTo: number;
						public limitFrom(param0: number): void;
						public feed(param0: T): void;
						public setPhases(param0: number, param1: number): void;
						public limitTo(param0: number): void;
						public constructor(param0: number);
						public size(): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export class BarBuffer extends com.github.mikephil.charting.buffer.AbstractBuffer<com.github.mikephil.charting.interfaces.datasets.IBarDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.buffer.BarBuffer>;
						public mDataSetIndex: number;
						public mDataSetCount: number;
						public mContainsStacks: boolean;
						public mInverted: boolean;
						public mBarWidth: number;
						public constructor(param0: number, param1: number, param2: boolean);
						public addBar(param0: number, param1: number, param2: number, param3: number): void;
						public setDataSet(param0: number): void;
						public constructor(param0: number);
						public setBarWidth(param0: number): void;
						public setInverted(param0: boolean): void;
						public feed(param0: any): void;
						public feed(param0: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export class HorizontalBarBuffer extends com.github.mikephil.charting.buffer.BarBuffer {
						public static class: java.lang.Class<com.github.mikephil.charting.buffer.HorizontalBarBuffer>;
						public constructor(param0: number, param1: number, param2: boolean);
						public constructor(param0: number);
						public feed(param0: any): void;
						public feed(param0: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class BarChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.BarData> implements com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.BarChart>;
						public mHighlightFullBarEnabled: boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public setDrawBarShadow(param0: boolean): void;
						public isDrawBarShadowEnabled(): boolean;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setFitBars(param0: boolean): void;
						public groupBars(param0: number, param1: number, param2: number): void;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public calcMinMax(): void;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight, param1: boolean): void;
						public setHighlightFullBarEnabled(param0: boolean): void;
						public getContentRect(): globalAndroid.graphics.RectF;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public highlightValue(param0: number, param1: number, param2: number, param3: boolean): void;
						public getXChartMax(): number;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry, param1: globalAndroid.graphics.RectF): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry): globalAndroid.graphics.RectF;
						public getWidth(): number;
						public highlightValue(param0: number, param1: number, param2: number): void;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setDrawValueAboveBar(param0: boolean): void;
						public highlightValue(param0: number, param1: number): void;
						public isHighlightFullBarEnabled(): boolean;
						public getData(): any;
						public highlightValue(param0: number, param1: number, param2: boolean): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class BarLineChartBase<T>  extends com.github.mikephil.charting.charts.Chart<any> implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.BarLineChartBase<any>>;
						public mMaxVisibleCount: number;
						public mAutoScaleMinMaxEnabled: boolean;
						public mPinchZoomEnabled: boolean;
						public mDoubleTapToZoomEnabled: boolean;
						public mHighlightPerDragEnabled: boolean;
						public mGridBackgroundPaint: globalAndroid.graphics.Paint;
						public mBorderPaint: globalAndroid.graphics.Paint;
						public mDrawGridBackground: boolean;
						public mDrawBorders: boolean;
						public mClipValuesToContent: boolean;
						public mMinOffset: number;
						public mKeepPositionOnRotation: boolean;
						public mDrawListener: com.github.mikephil.charting.listener.OnDrawListener;
						public mAxisLeft: com.github.mikephil.charting.components.YAxis;
						public mAxisRight: com.github.mikephil.charting.components.YAxis;
						public mAxisRendererLeft: com.github.mikephil.charting.renderer.YAxisRenderer;
						public mAxisRendererRight: com.github.mikephil.charting.renderer.YAxisRenderer;
						public mLeftAxisTransformer: com.github.mikephil.charting.utils.Transformer;
						public mRightAxisTransformer: com.github.mikephil.charting.utils.Transformer;
						public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRenderer;
						public mZoomMatrixBuffer: globalAndroid.graphics.Matrix;
						public mFitScreenMatrixBuffer: globalAndroid.graphics.Matrix;
						public mGetPositionBuffer: native.Array<number>;
						public posForGetLowestVisibleX: com.github.mikephil.charting.utils.MPPointD;
						public posForGetHighestVisibleX: com.github.mikephil.charting.utils.MPPointD;
						public mOnSizeChangedBuffer: native.Array<number>;
						public setDragOffsetX(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public calculateOffsets(): void;
						public isPinchZoomEnabled(): boolean;
						public zoomAndCenterAnimated(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.components.YAxis.AxisDependency, param5: number): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getScaleY(): number;
						public getXChartMin(): number;
						public fitScreen(): void;
						public setXAxisRenderer(param0: com.github.mikephil.charting.renderer.XAxisRenderer): void;
						public setScaleMinima(param0: number, param1: number): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public centerViewToY(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getContentRect(): globalAndroid.graphics.RectF;
						public setVisibleYRangeMinimum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public isDragYEnabled(): boolean;
						public setScaleXEnabled(param0: boolean): void;
						public isDragXEnabled(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public resetTracking(): void;
						public getPaint(param0: number): globalAndroid.graphics.Paint;
						public isKeepPositionOnRotation(): boolean;
						public prepareValuePxMatrix(): void;
						public setAutoScaleMinMaxEnabled(param0: boolean): void;
						public zoom(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setRendererRightYAxis(param0: com.github.mikephil.charting.renderer.YAxisRenderer): void;
						public setDoubleTapToZoomEnabled(param0: boolean): void;
						public setRendererLeftYAxis(param0: com.github.mikephil.charting.renderer.YAxisRenderer): void;
						public getXRange(): number;
						public zoomToCenter(param0: number, param1: number): void;
						public setPinchZoom(param0: boolean): void;
						public moveViewToX(param0: number): void;
						public setVisibleYRangeMaximum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public getAxisRange(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public prepareOffsetMatrix(): void;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: com.github.mikephil.charting.utils.MPPointD): void;
						public init(): void;
						public getYChartMin(): number;
						public calcMinMax(): void;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public isDrawBordersEnabled(): boolean;
						public setMinOffset(param0: number): void;
						public getScaleX(): number;
						public moveViewToAnimated(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: number): void;
						public setMaxVisibleValueCount(param0: number): void;
						public getHeight(): number;
						public zoom(param0: number, param1: number, param2: number, param3: number): void;
						public getMinOffset(): number;
						public isFullyZoomedOut(): boolean;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public zoomIn(): void;
						public moveViewTo(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getDrawListener(): com.github.mikephil.charting.listener.OnDrawListener;
						public setDragOffsetY(param0: number): void;
						public getData(): any;
						public setVisibleXRangeMinimum(param0: number): void;
						public getVisibleXRange(): number;
						public setVisibleXRangeMaximum(param0: number): void;
						public setViewPortOffsets(param0: number, param1: number, param2: number, param3: number): void;
						public getPixelForValues(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
						public setPaint(param0: globalAndroid.graphics.Paint, param1: number): void;
						public getRendererLeftYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
						public setScaleEnabled(param0: boolean): void;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isDoubleTapToZoomEnabled(): boolean;
						public setClipValuesToContent(param0: boolean): void;
						public setGridBackgroundColor(param0: number): void;
						public setBorderColor(param0: number): void;
						public autoScale(): void;
						public getMaxVisibleCount(): number;
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public isDragEnabled(): boolean;
						public centerViewTo(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getLowestVisibleX(): number;
						public resetViewPortOffsets(): void;
						public setOnDrawListener(param0: com.github.mikephil.charting.listener.OnDrawListener): void;
						public calculateLegendOffsets(param0: globalAndroid.graphics.RectF): void;
						public setHighlightPerDragEnabled(param0: boolean): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getAxisLeft(): com.github.mikephil.charting.components.YAxis;
						public resetZoom(): void;
						public getPosition(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
						public isAnyAxisInverted(): boolean;
						public setVisibleXRange(param0: number, param1: number): void;
						public setVisibleYRange(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public computeScroll(): void;
						public setDrawBorders(param0: boolean): void;
						public getEntryByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public setScaleYEnabled(param0: boolean): void;
						public centerViewToAnimated(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: number): void;
						public setDragEnabled(param0: boolean): void;
						public isAutoScaleMinMaxEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setDragYEnabled(param0: boolean): void;
						public isScaleYEnabled(): boolean;
						public getAxisRight(): com.github.mikephil.charting.components.YAxis;
						public isScaleXEnabled(): boolean;
						public getDataSetByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>;
						public getRendererXAxis(): com.github.mikephil.charting.renderer.XAxisRenderer;
						public getYChartMax(): number;
						public getRendererRightYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
						public getXChartMax(): number;
						public setBorderWidth(param0: number): void;
						public isHighlightPerDragEnabled(): boolean;
						public setDragXEnabled(param0: boolean): void;
						public drawGridBackground(param0: globalAndroid.graphics.Canvas): void;
						public setKeepPositionOnRotation(param0: boolean): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public isClipValuesToContentEnabled(): boolean;
						public setDrawGridBackground(param0: boolean): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public hasNoDragOffset(): boolean;
						public zoomOut(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class BubbleChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.BubbleData> implements com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.BubbleChart>;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getContentRect(): globalAndroid.graphics.RectF;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getWidth(): number;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getData(): any;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class CandleStickChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.CandleData> implements com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.CandleStickChart>;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getContentRect(): globalAndroid.graphics.RectF;
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getWidth(): number;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getData(): any;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class Chart<T>  extends com.github.mikephil.charting.interfaces.dataprovider.ChartInterface  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.Chart<any>>;
						public static LOG_TAG: string;
						public mLogEnabled: boolean;
						public mData: any;
						public mHighLightPerTapEnabled: boolean;
						public mDefaultValueFormatter: com.github.mikephil.charting.formatter.DefaultValueFormatter;
						public mDescPaint: globalAndroid.graphics.Paint;
						public mInfoPaint: globalAndroid.graphics.Paint;
						public mXAxis: com.github.mikephil.charting.components.XAxis;
						public mTouchEnabled: boolean;
						public mDescription: com.github.mikephil.charting.components.Description;
						public mLegend: com.github.mikephil.charting.components.Legend;
						public mSelectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener;
						public mChartTouchListener: com.github.mikephil.charting.listener.ChartTouchListener<any>;
						public mLegendRenderer: com.github.mikephil.charting.renderer.LegendRenderer;
						public mRenderer: com.github.mikephil.charting.renderer.DataRenderer;
						public mHighlighter: com.github.mikephil.charting.highlight.IHighlighter;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
						public mIndicesToHighlight: native.Array<com.github.mikephil.charting.highlight.Highlight>;
						public mMaxHighlightDistance: number;
						public mDrawMarkers: boolean;
						public mMarker: com.github.mikephil.charting.components.IMarker;
						public static PAINT_GRID_BACKGROUND: number;
						public static PAINT_INFO: number;
						public static PAINT_DESCRIPTION: number;
						public static PAINT_HOLE: number;
						public static PAINT_CENTER_TEXT: number;
						public static PAINT_LEGEND_LABEL: number;
						public mJobs: java.util.ArrayList<java.lang.Runnable>;
						public isDrawMarkerViewsEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getDescription(): com.github.mikephil.charting.components.Description;
						public getExtraBottomOffset(): number;
						public getOnTouchListener(): com.github.mikephil.charting.listener.ChartTouchListener<any>;
						public getOnChartGestureListener(): com.github.mikephil.charting.listener.OnChartGestureListener;
						public setExtraBottomOffset(param0: number): void;
						public calculateOffsets(): void;
						public isHighlightPerTapEnabled(): boolean;
						public setHardwareAccelerationEnabled(param0: boolean): void;
						public getMarkerView(): com.github.mikephil.charting.components.IMarker;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public setRenderer(param0: com.github.mikephil.charting.renderer.DataRenderer): void;
						public getChartBitmap(): globalAndroid.graphics.Bitmap;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getExtraLeftOffset(): number;
						public getXChartMin(): number;
						public setOnChartValueSelectedListener(param0: com.github.mikephil.charting.listener.OnChartValueSelectedListener): void;
						public setDescription(param0: com.github.mikephil.charting.components.Description): void;
						public drawMarkers(param0: globalAndroid.graphics.Canvas): void;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.EasingFunction, param3: com.github.mikephil.charting.animation.EasingFunction): void;
						public setTouchEnabled(param0: boolean): void;
						public onMeasure(param0: number, param1: number): void;
						public getContentRect(): globalAndroid.graphics.RectF;
						public setOnChartGestureListener(param0: com.github.mikephil.charting.listener.OnChartGestureListener): void;
						public setNoDataTextTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setDragDecelerationEnabled(param0: boolean): void;
						public drawDescription(param0: globalAndroid.graphics.Canvas): void;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.Easing.EasingOption, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public highlightValue(param0: number, param1: number, param2: number): void;
						public isDragDecelerationEnabled(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getPaint(param0: number): globalAndroid.graphics.Paint;
						public highlightValue(param0: number, param1: number, param2: boolean): void;
						public getLegend(): com.github.mikephil.charting.components.Legend;
						public getXAxis(): com.github.mikephil.charting.components.XAxis;
						public getXRange(): number;
						public setExtraOffsets(param0: number, param1: number, param2: number, param3: number): void;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public setExtraTopOffset(param0: number): void;
						public setNoDataTextColor(param0: number): void;
						public setupDefaultFormatter(param0: number, param1: number): void;
						public getHighlighter(): com.github.mikephil.charting.highlight.IHighlighter;
						public setHighlighter(param0: com.github.mikephil.charting.highlight.ChartHighlighter<any>): void;
						public init(): void;
						public getYChartMin(): number;
						public getLegendRenderer(): com.github.mikephil.charting.renderer.LegendRenderer;
						public isEmpty(): boolean;
						public calcMinMax(): void;
						public setMarker(param0: com.github.mikephil.charting.components.IMarker): void;
						public setDrawMarkerViews(param0: boolean): void;
						public isLogEnabled(): boolean;
						public clearValues(): void;
						public setLastHighlighted(param0: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public getHeight(): number;
						public highlightValue(param0: number, param1: number, param2: number, param3: boolean): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public saveToGallery(param0: string, param1: number): boolean;
						public addViewportJob(param0: java.lang.Runnable): void;
						public animateX(param0: number): void;
						public isDrawMarkersEnabled(): boolean;
						public getExtraTopOffset(): number;
						public clearAllViewportJobs(): void;
						public highlightValue(param0: number, param1: number): void;
						public getData(): any;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public getAnimator(): com.github.mikephil.charting.animation.ChartAnimator;
						public setPaint(param0: globalAndroid.graphics.Paint, param1: number): void;
						public getMarker(): com.github.mikephil.charting.components.IMarker;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setOnTouchListener(param0: com.github.mikephil.charting.listener.ChartTouchListener<any>): void;
						public animateY(param0: number): void;
						public removeViewportJob(param0: java.lang.Runnable): void;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public highlightValues(param0: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public saveToGallery(param0: string, param1: string, param2: string, param3: globalAndroid.graphics.Bitmap.CompressFormat, param4: number): boolean;
						public setDragDecelerationFrictionCoef(param0: number): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight, param1: boolean): void;
						public getYMin(): number;
						public setHighlightPerTapEnabled(param0: boolean): void;
						public getYMax(): number;
						public setDrawMarkers(param0: boolean): void;
						public getExtraRightOffset(): number;
						public getMaxVisibleCount(): number;
						public getMaxHighlightDistance(): number;
						public saveToPath(param0: string, param1: string): boolean;
						public setExtraLeftOffset(param0: number): void;
						public getViewPortHandler(): com.github.mikephil.charting.utils.ViewPortHandler;
						public clear(): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public setNoDataText(param0: string): void;
						public setUnbindEnabled(param0: boolean): void;
						public setData(param0: any): void;
						public getJobs(): java.util.ArrayList<java.lang.Runnable>;
						public setLogEnabled(param0: boolean): void;
						public setMarkerView(param0: com.github.mikephil.charting.components.IMarker): void;
						public valuesToHighlight(): boolean;
						public getDragDecelerationFrictionCoef(): number;
						public enableScroll(): void;
						public getRenderer(): com.github.mikephil.charting.renderer.DataRenderer;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public animateXY(param0: number, param1: number): void;
						public setExtraRightOffset(param0: number): void;
						public getCenter(): com.github.mikephil.charting.utils.MPPointF;
						public onDetachedFromWindow(): void;
						public getYChartMax(): number;
						public getHighlighted(): native.Array<com.github.mikephil.charting.highlight.Highlight>;
						public getXChartMax(): number;
						public setMaxHighlightDistance(param0: number): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public disableScroll(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class CombinedChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.CombinedData> implements com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.CombinedChart>;
						public mHighlightFullBarEnabled: boolean;
						public mDrawOrder: native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
						public getDrawOrder(): native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
						public setData(param0: any): void;
						public setDrawBarShadow(param0: boolean): void;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public isDrawBarShadowEnabled(): boolean;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public drawMarkers(param0: globalAndroid.graphics.Canvas): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public setHighlightFullBarEnabled(param0: boolean): void;
						public getContentRect(): globalAndroid.graphics.RectF;
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public setData(param0: com.github.mikephil.charting.data.CombinedData): void;
						public getWidth(): number;
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setDrawValueAboveBar(param0: boolean): void;
						public isHighlightFullBarEnabled(): boolean;
						public getData(): any;
						public setDrawOrder(param0: native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
					export module CombinedChart {
						export class DrawOrder {
							public static class: java.lang.Class<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
							public static BAR: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static BUBBLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static LINE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static CANDLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static SCATTER: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static values(): native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
							public static valueOf(param0: string): com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class HorizontalBarChart extends com.github.mikephil.charting.charts.BarChart {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.HorizontalBarChart>;
						public mGetPositionBuffer: native.Array<number>;
						public getPosition(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
						public setVisibleXRangeMinimum(param0: number): void;
						public setVisibleXRangeMaximum(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public setVisibleXRange(param0: number, param1: number): void;
						public setVisibleYRange(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public calculateOffsets(): void;
						public setVisibleYRangeMaximum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public isDrawBarShadowEnabled(): boolean;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public getContentRect(): globalAndroid.graphics.RectF;
						public setVisibleYRangeMinimum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry, param1: globalAndroid.graphics.RectF): void;
						public getLowestVisibleX(): number;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry): globalAndroid.graphics.RectF;
						public getWidth(): number;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public isHighlightFullBarEnabled(): boolean;
						public getData(): any;
						public prepareValuePxMatrix(): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class LineChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.LineData> implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.LineChart>;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public getContentRect(): globalAndroid.graphics.RectF;
						public onDetachedFromWindow(): void;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getWidth(): number;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getData(): any;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class PieChart extends com.github.mikephil.charting.charts.PieRadarChartBase<com.github.mikephil.charting.data.PieData> {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.PieChart>;
						public mTransparentCircleRadiusPercent: number;
						public mMaxAngle: number;
						public constructor(param0: globalAndroid.content.Context);
						public getIndexForAngle(param0: number): number;
						public setDrawHoleEnabled(param0: boolean): void;
						public setDrawCenterText(param0: boolean): void;
						public setCenterTextOffset(param0: number, param1: number): void;
						public getHoleRadius(): number;
						public getRadius(): number;
						public calculateOffsets(): void;
						public setCenterTextTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setCenterTextRadiusPercent(param0: number): void;
						public setUsePercentValues(param0: boolean): void;
						public needsHighlight(param0: number): boolean;
						public setCenterTextSize(param0: number): void;
						public setEntryLabelTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setEntryLabelColor(param0: number): void;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getCenterCircleBox(): com.github.mikephil.charting.utils.MPPointF;
						public getMaxAngle(): number;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public setHoleRadius(param0: number): void;
						public isUsePercentValuesEnabled(): boolean;
						public isDrawRoundedSlicesEnabled(): boolean;
						public getContentRect(): globalAndroid.graphics.RectF;
						public setHoleColor(param0: number): void;
						public setTransparentCircleRadius(param0: number): void;
						public getMaxVisibleCount(): number;
						public getTransparentCircleRadius(): number;
						public getRequiredBaseOffset(): number;
						public getMaxHighlightDistance(): number;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public isDrawHoleEnabled(): boolean;
						public isDrawSlicesUnderHoleEnabled(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getCenterText(): string;
						public getCenterTextOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getXAxis(): com.github.mikephil.charting.components.XAxis;
						public setDrawEntryLabels(param0: boolean): void;
						public getDataSetIndexForIndex(param0: number): number;
						public getXRange(): number;
						public getCircleBox(): globalAndroid.graphics.RectF;
						public setCenterTextColor(param0: number): void;
						public getCenterTextRadiusPercent(): number;
						public getDrawAngles(): native.Array<number>;
						public setCenterTextSizePixels(param0: number): void;
						public setCenterText(param0: string): void;
						public init(): void;
						public getYChartMin(): number;
						public calcMinMax(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getAbsoluteAngles(): native.Array<number>;
						public setMaxAngle(param0: number): void;
						public setTransparentCircleColor(param0: number): void;
						public onDetachedFromWindow(): void;
						public setDrawSliceText(param0: boolean): void;
						public getYChartMax(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public isDrawEntryLabelsEnabled(): boolean;
						public setTransparentCircleAlpha(param0: number): void;
						public getRequiredLegendOffset(): number;
						public getWidth(): number;
						public setDrawSlicesUnderHole(param0: boolean): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public isDrawCenterTextEnabled(): boolean;
						public setEntryLabelTextSize(param0: number): void;
						public getData(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class PieRadarChartBase<T>  extends com.github.mikephil.charting.charts.Chart<any> {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.PieRadarChartBase<any>>;
						public mRotateEnabled: boolean;
						public mMinOffset: number;
						public getRotationAngle(): number;
						public constructor(param0: globalAndroid.content.Context);
						public getIndexForAngle(param0: number): number;
						public getRawRotationAngle(): number;
						public getXRange(): number;
						public getRadius(): number;
						public calculateOffsets(): void;
						public computeScroll(): void;
						public getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number): com.github.mikephil.charting.utils.MPPointF;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setRotationAngle(param0: number): void;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public calcMinMax(): void;
						public setMinOffset(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public getAngleForPoint(param0: number, param1: number): number;
						public getContentRect(): globalAndroid.graphics.RectF;
						public isRotationEnabled(): boolean;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getRequiredBaseOffset(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getMinOffset(): number;
						public spin(param0: number, param1: number, param2: number, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: com.github.mikephil.charting.utils.MPPointF): void;
						public getRequiredLegendOffset(): number;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public getDiameter(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public distanceToCenter(param0: number, param1: number): number;
						public setRotationEnabled(param0: boolean): void;
						public getData(): any;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class RadarChart extends com.github.mikephil.charting.charts.PieRadarChartBase<com.github.mikephil.charting.data.RadarData> {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.RadarChart>;
						public mYAxisRenderer: com.github.mikephil.charting.renderer.YAxisRendererRadarChart;
						public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRendererRadarChart;
						public getSliceAngle(): number;
						public getWebAlpha(): number;
						public constructor(param0: globalAndroid.content.Context);
						public getIndexForAngle(param0: number): number;
						public setSkipWebLineCount(param0: number): void;
						public getWebColorInner(): number;
						public getXRange(): number;
						public getRadius(): number;
						public setWebLineWidthInner(param0: number): void;
						public getSkipWebLineCount(): number;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public calcMinMax(): void;
						public getWebLineWidth(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getContentRect(): globalAndroid.graphics.RectF;
						public setDrawWeb(param0: boolean): void;
						public getYRange(): number;
						public setWebLineWidth(param0: number): void;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getRequiredBaseOffset(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getYAxis(): com.github.mikephil.charting.components.YAxis;
						public setWebColorInner(param0: number): void;
						public getRequiredLegendOffset(): number;
						public setWebAlpha(param0: number): void;
						public setWebColor(param0: number): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public getWebLineWidthInner(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getFactor(): number;
						public getData(): any;
						public getWebColor(): number;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class ScatterChart extends com.github.mikephil.charting.charts.BarLineChartBase<com.github.mikephil.charting.data.ScatterData> implements com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider  {
						public static class: java.lang.Class<com.github.mikephil.charting.charts.ScatterChart>;
						public constructor(param0: globalAndroid.content.Context);
						public getXRange(): number;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public init(): void;
						public getYChartMin(): number;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public getData(): com.github.mikephil.charting.data.ChartData<any>;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getContentRect(): globalAndroid.graphics.RectF;
						public getMaxVisibleCount(): number;
						public getYChartMax(): number;
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public getLowestVisibleX(): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getWidth(): number;
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getData(): any;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
					}
					export module ScatterChart {
						export class ScatterShape {
							public static class: java.lang.Class<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
							public static SQUARE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CIRCLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static TRIANGLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CROSS: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static X: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CHEVRON_UP: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CHEVRON_DOWN: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static valueOf(param0: string): com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public toString(): string;
							public static values(): native.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
							public static getAllDefaultShapes(): native.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export abstract class AxisBase extends com.github.mikephil.charting.components.ComponentBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.AxisBase>;
						public mAxisValueFormatter: com.github.mikephil.charting.formatter.IAxisValueFormatter;
						public mEntries: native.Array<number>;
						public mCenteredEntries: native.Array<number>;
						public mEntryCount: number;
						public mDecimals: number;
						public mGranularity: number;
						public mGranularityEnabled: boolean;
						public mForceLabels: boolean;
						public mDrawGridLines: boolean;
						public mDrawAxisLine: boolean;
						public mDrawLabels: boolean;
						public mCenterAxisLabels: boolean;
						public mLimitLines: java.util.List<com.github.mikephil.charting.components.LimitLine>;
						public mDrawLimitLineBehindData: boolean;
						public mSpaceMin: number;
						public mSpaceMax: number;
						public mCustomAxisMin: boolean;
						public mCustomAxisMax: boolean;
						public mAxisMaximum: number;
						public mAxisMinimum: number;
						public mAxisRange: number;
						public setAxisLineWidth(param0: number): void;
						public setSpaceMax(param0: number): void;
						public setCenterAxisLabels(param0: boolean): void;
						public getGridDashPathEffect(): globalAndroid.graphics.DashPathEffect;
						public getFormattedLabel(param0: number): string;
						public setAxisMinimum(param0: number): void;
						public getSpaceMax(): number;
						public isForceLabelsEnabled(): boolean;
						public setGranularity(param0: number): void;
						public enableGridDashedLine(param0: number, param1: number, param2: number): void;
						public setDrawGridLines(param0: boolean): void;
						public setDrawAxisLine(param0: boolean): void;
						public isGranularityEnabled(): boolean;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IAxisValueFormatter): void;
						public setDrawLimitLinesBehindData(param0: boolean): void;
						public removeLimitLine(param0: com.github.mikephil.charting.components.LimitLine): void;
						public constructor();
						public setAxisLineDashedLine(param0: globalAndroid.graphics.DashPathEffect): void;
						public isDrawLimitLinesBehindDataEnabled(): boolean;
						public getGranularity(): number;
						public setGranularityEnabled(param0: boolean): void;
						public setLabelCount(param0: number, param1: boolean): void;
						public getGridLineWidth(): number;
						public setAxisMinValue(param0: number): void;
						public setAxisMaximum(param0: number): void;
						public isDrawAxisLineEnabled(): boolean;
						public disableGridDashedLine(): void;
						public setDrawLabels(param0: boolean): void;
						public resetAxisMaximum(): void;
						public getAxisLineWidth(): number;
						public isDrawGridLinesEnabled(): boolean;
						public setAxisLineColor(param0: number): void;
						public setLabelCount(param0: number): void;
						public getAxisMinimum(): number;
						public getSpaceMin(): number;
						public addLimitLine(param0: com.github.mikephil.charting.components.LimitLine): void;
						public enableAxisLineDashedLine(param0: number, param1: number, param2: number): void;
						public getLimitLines(): java.util.List<com.github.mikephil.charting.components.LimitLine>;
						public isGridDashedLineEnabled(): boolean;
						public setGridColor(param0: number): void;
						public isAxisMinCustom(): boolean;
						public setSpaceMin(param0: number): void;
						public calculate(param0: number, param1: number): void;
						public resetAxisMinimum(): void;
						public setGridLineWidth(param0: number): void;
						public removeAllLimitLines(): void;
						public getLongestLabel(): string;
						public isCenterAxisLabelsEnabled(): boolean;
						public getLabelCount(): number;
						public isDrawLabelsEnabled(): boolean;
						public getAxisLineDashPathEffect(): globalAndroid.graphics.DashPathEffect;
						public disableAxisLineDashedLine(): void;
						public getGridColor(): number;
						public setAxisMaxValue(param0: number): void;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IAxisValueFormatter;
						public getAxisMaximum(): number;
						public isAxisMaxCustom(): boolean;
						public getAxisLineColor(): number;
						public setGridDashedLine(param0: globalAndroid.graphics.DashPathEffect): void;
						public isAxisLineDashedLineEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export abstract class ComponentBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.ComponentBase>;
						public mEnabled: boolean;
						public mXOffset: number;
						public mYOffset: number;
						public mTypeface: globalAndroid.graphics.Typeface;
						public mTextSize: number;
						public mTextColor: number;
						public constructor();
						public getTextColor(): number;
						public getYOffset(): number;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): void;
						public getTextSize(): number;
						public setXOffset(param0: number): void;
						public setTextColor(param0: number): void;
						public getTypeface(): globalAndroid.graphics.Typeface;
						public setTypeface(param0: globalAndroid.graphics.Typeface): void;
						public getXOffset(): number;
						public setYOffset(param0: number): void;
						public setTextSize(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class Description extends com.github.mikephil.charting.components.ComponentBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.Description>;
						public constructor();
						public setTextAlign(param0: globalAndroid.graphics.Paint.Align): void;
						public setPosition(param0: number, param1: number): void;
						public setText(param0: string): void;
						public getText(): string;
						public getPosition(): com.github.mikephil.charting.utils.MPPointF;
						public getTextAlign(): globalAndroid.graphics.Paint.Align;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class IMarker {
						public static class: java.lang.Class<com.github.mikephil.charting.components.IMarker>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.components.IMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOffset(): com.github.mikephil.charting.utils.MPPointF;
							getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
							refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
							draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
						});
						public constructor();
						public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class Legend extends com.github.mikephil.charting.components.ComponentBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.Legend>;
						public mNeededWidth: number;
						public mNeededHeight: number;
						public mTextHeightMax: number;
						public mTextWidthMax: number;
						public setExtra(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>): void;
						public getCalculatedLineSizes(): java.util.List<com.github.mikephil.charting.utils.FSize>;
						public setDrawInside(param0: boolean): void;
						public setMaxSizePercent(param0: number): void;
						public setForm(param0: com.github.mikephil.charting.components.Legend.LegendForm): void;
						public calculateDimensions(param0: globalAndroid.graphics.Paint, param1: com.github.mikephil.charting.utils.ViewPortHandler): void;
						public getColors(): native.Array<number>;
						public isDrawInsideEnabled(): boolean;
						public getPosition(): com.github.mikephil.charting.components.Legend.LegendPosition;
						public setFormLineWidth(param0: number): void;
						public setExtra(param0: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
						public constructor(param0: java.util.List<java.lang.Integer>, param1: java.util.List<string>);
						public setExtra(param0: native.Array<number>, param1: native.Array<string>): void;
						public getVerticalAlignment(): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
						public constructor();
						public getCalculatedLabelBreakPoints(): java.util.List<java.lang.Boolean>;
						public setVerticalAlignment(param0: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment): void;
						public setEntries(param0: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
						public setOrientation(param0: com.github.mikephil.charting.components.Legend.LegendOrientation): void;
						public constructor(param0: native.Array<number>, param1: native.Array<string>);
						public isLegendCustom(): boolean;
						public getFormLineWidth(): number;
						public setXEntrySpace(param0: number): void;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getStackSpace(): number;
						public getXEntrySpace(): number;
						public setWordWrapEnabled(param0: boolean): void;
						public isWordWrapEnabled(): boolean;
						public getCalculatedLabelSizes(): java.util.List<com.github.mikephil.charting.utils.FSize>;
						public getMaximumEntryWidth(param0: globalAndroid.graphics.Paint): number;
						public getMaxSizePercent(): number;
						public setCustom(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>): void;
						public getExtraEntries(): native.Array<com.github.mikephil.charting.components.LegendEntry>;
						public getEntries(): native.Array<com.github.mikephil.charting.components.LegendEntry>;
						public getHorizontalAlignment(): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
						public getExtraLabels(): native.Array<string>;
						public getOrientation(): com.github.mikephil.charting.components.Legend.LegendOrientation;
						public setFormToTextSpace(param0: number): void;
						public getLabels(): native.Array<string>;
						public setPosition(param0: com.github.mikephil.charting.components.Legend.LegendPosition): void;
						public setFormLineDashEffect(param0: globalAndroid.graphics.DashPathEffect): void;
						public getYEntrySpace(): number;
						public setYEntrySpace(param0: number): void;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public setHorizontalAlignment(param0: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment): void;
						public setStackSpace(param0: number): void;
						public setCustom(param0: java.util.List<com.github.mikephil.charting.components.LegendEntry>): void;
						public setDirection(param0: com.github.mikephil.charting.components.Legend.LegendDirection): void;
						public getDirection(): com.github.mikephil.charting.components.Legend.LegendDirection;
						public getMaximumEntryHeight(param0: globalAndroid.graphics.Paint): number;
						public setFormSize(param0: number): void;
						public getExtraColors(): native.Array<number>;
						public getFormSize(): number;
						public getFormToTextSpace(): number;
						public constructor(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>);
						public setExtra(param0: java.util.List<java.lang.Integer>, param1: java.util.List<string>): void;
						public resetCustom(): void;
					}
					export module Legend {
						export class LegendDirection {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendDirection>;
							public static LEFT_TO_RIGHT: com.github.mikephil.charting.components.Legend.LegendDirection;
							public static RIGHT_TO_LEFT: com.github.mikephil.charting.components.Legend.LegendDirection;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendDirection>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendDirection;
						}
						export class LegendForm {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendForm>;
							public static NONE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static EMPTY: com.github.mikephil.charting.components.Legend.LegendForm;
							public static DEFAULT: com.github.mikephil.charting.components.Legend.LegendForm;
							public static SQUARE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static CIRCLE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static LINE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendForm;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendForm>;
						}
						export class LegendHorizontalAlignment {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment>;
							public static LEFT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static CENTER: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static RIGHT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment>;
						}
						export class LegendOrientation {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendOrientation>;
							public static HORIZONTAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
							public static VERTICAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendOrientation>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendOrientation;
						}
						export class LegendPosition {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendPosition>;
							public static RIGHT_OF_CHART: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static RIGHT_OF_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static RIGHT_OF_CHART_INSIDE: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART_INSIDE: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_LEFT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_RIGHT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_LEFT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_RIGHT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static PIECHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendPosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendPosition;
						}
						export class LegendVerticalAlignment {
							public static class: java.lang.Class<com.github.mikephil.charting.components.Legend.LegendVerticalAlignment>;
							public static TOP: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static CENTER: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static BOTTOM: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendVerticalAlignment>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class LegendEntry {
						public static class: java.lang.Class<com.github.mikephil.charting.components.LegendEntry>;
						public label: string;
						public form: com.github.mikephil.charting.components.Legend.LegendForm;
						public formSize: number;
						public formLineWidth: number;
						public formLineDashEffect: globalAndroid.graphics.DashPathEffect;
						public formColor: number;
						public constructor();
						public constructor(param0: string, param1: com.github.mikephil.charting.components.Legend.LegendForm, param2: number, param3: number, param4: globalAndroid.graphics.DashPathEffect, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class LimitLine extends com.github.mikephil.charting.components.ComponentBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.LimitLine>;
						public setLineWidth(param0: number): void;
						public constructor();
						public constructor(param0: number, param1: string);
						public getTextStyle(): globalAndroid.graphics.Paint.Style;
						public getLabel(): string;
						public getLineColor(): number;
						public setLineColor(param0: number): void;
						public setTextStyle(param0: globalAndroid.graphics.Paint.Style): void;
						public setLabel(param0: string): void;
						public disableDashedLine(): void;
						public constructor(param0: number);
						public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
						public setLabelPosition(param0: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition): void;
						public enableDashedLine(param0: number, param1: number, param2: number): void;
						public getLineWidth(): number;
						public isDashedLineEnabled(): boolean;
						public getLabelPosition(): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
						public getLimit(): number;
					}
					export module LimitLine {
						export class LimitLabelPosition {
							public static class: java.lang.Class<com.github.mikephil.charting.components.LimitLine.LimitLabelPosition>;
							public static LEFT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static LEFT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static RIGHT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static RIGHT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.LimitLine.LimitLabelPosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class MarkerImage extends com.github.mikephil.charting.components.IMarker {
						public static class: java.lang.Class<com.github.mikephil.charting.components.MarkerImage>;
						public setOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public getSize(): com.github.mikephil.charting.utils.FSize;
						public getChartView(): com.github.mikephil.charting.charts.Chart<any>;
						public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
						public setChartView(param0: com.github.mikephil.charting.charts.Chart<any>): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setOffset(param0: number, param1: number): void;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
						public setSize(param0: com.github.mikephil.charting.utils.FSize): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class MarkerView implements com.github.mikephil.charting.components.IMarker {
						public static class: java.lang.Class<com.github.mikephil.charting.components.MarkerView>;
						public setOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public getChartView(): com.github.mikephil.charting.charts.Chart<any>;
						public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
						public setChartView(param0: com.github.mikephil.charting.charts.Chart<any>): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setOffset(param0: number, param1: number): void;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class XAxis extends com.github.mikephil.charting.components.AxisBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.XAxis>;
						public mLabelWidth: number;
						public mLabelHeight: number;
						public mLabelRotatedWidth: number;
						public mLabelRotatedHeight: number;
						public mLabelRotationAngle: number;
						public constructor();
						public getLabelRotationAngle(): number;
						public setAvoidFirstLastClipping(param0: boolean): void;
						public setLabelRotationAngle(param0: number): void;
						public isAvoidFirstLastClippingEnabled(): boolean;
						public getPosition(): com.github.mikephil.charting.components.XAxis.XAxisPosition;
						public setPosition(param0: com.github.mikephil.charting.components.XAxis.XAxisPosition): void;
					}
					export module XAxis {
						export class XAxisPosition {
							public static class: java.lang.Class<com.github.mikephil.charting.components.XAxis.XAxisPosition>;
							public static TOP: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTTOM: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTH_SIDED: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static TOP_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTTOM_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static valueOf(param0: string): com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.XAxis.XAxisPosition>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class YAxis extends com.github.mikephil.charting.components.AxisBase {
						public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis>;
						public mInverted: boolean;
						public mDrawZeroLine: boolean;
						public mZeroLineColor: number;
						public mZeroLineWidth: number;
						public mSpacePercentTop: number;
						public mSpacePercentBottom: number;
						public mMinWidth: number;
						public mMaxWidth: number;
						public setPosition(param0: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition): void;
						public getZeroLineWidth(): number;
						public setSpaceBottom(param0: number): void;
						public setZeroLineColor(param0: number): void;
						public isInverted(): boolean;
						public getSpaceTop(): number;
						public isDrawTopYLabelEntryEnabled(): boolean;
						public constructor(param0: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public getZeroLineColor(): number;
						public setDrawTopYLabelEntry(param0: boolean): void;
						public setDrawZeroLine(param0: boolean): void;
						public getMaxWidth(): number;
						public getLabelPosition(): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
						public isDrawBottomYLabelEntryEnabled(): boolean;
						public getRequiredHeightSpace(param0: globalAndroid.graphics.Paint): number;
						public setMinWidth(param0: number): void;
						public getRequiredWidthSpace(param0: globalAndroid.graphics.Paint): number;
						public setStartAtZero(param0: boolean): void;
						public calculate(param0: number, param1: number): void;
						public constructor();
						public setMaxWidth(param0: number): void;
						public isDrawZeroLineEnabled(): boolean;
						public setSpaceTop(param0: number): void;
						public getSpaceBottom(): number;
						public getMinWidth(): number;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setZeroLineWidth(param0: number): void;
						public setInverted(param0: boolean): void;
						public needsOffset(): boolean;
					}
					export module YAxis {
						export class AxisDependency {
							public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis.AxisDependency>;
							public static LEFT: com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static RIGHT: com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static valueOf(param0: string): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static values(): native.Array<com.github.mikephil.charting.components.YAxis.AxisDependency>;
						}
						export class YAxisLabelPosition {
							public static class: java.lang.Class<com.github.mikephil.charting.components.YAxis.YAxisLabelPosition>;
							public static OUTSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
							public static INSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.YAxis.YAxisLabelPosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBarDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BarData>;
						public constructor(param0: java.util.List<any>);
						public constructor();
						public groupBars(param0: number, param1: number, param2: number): void;
						public setBarWidth(param0: number): void;
						public getGroupWidth(param0: number, param1: number): number;
						public getBarWidth(): number;
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>);
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BarEntry> implements com.github.mikephil.charting.interfaces.datasets.IBarDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BarDataSet>;
						public setBarBorderColor(param0: number): void;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.BarEntry>, param1: string);
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setBarShadowColor(param0: number): void;
						public isStacked(): boolean;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.BarEntry): void;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public getBarShadowColor(): number;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.BarEntry>;
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getBarBorderColor(): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getStackSize(): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryCountStacks(): number;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public setBarBorderWidth(param0: number): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public setStackLabels(param0: native.Array<string>): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getHighLightAlpha(): number;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getStackLabels(): native.Array<string>;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public setHighLightAlpha(param0: number): void;
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setVisible(param0: boolean): void;
						public getBarBorderWidth(): number;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarEntry extends com.github.mikephil.charting.data.Entry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BarEntry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public getRanges(): native.Array<com.github.mikephil.charting.highlight.Range>;
						public getNegativeSum(): number;
						public setVals(param0: native.Array<number>): void;
						public getBelowSum(param0: number): number;
						public getPositiveSum(): number;
						public constructor(param0: number, param1: native.Array<number>, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public constructor(param0: number, param1: native.Array<number>, param2: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number);
						public constructor();
						public getSumBelow(param0: number): number;
						public isStacked(): boolean;
						public constructor(param0: number, param1: any);
						public constructor(param0: number, param1: native.Array<number>);
						public copy(): com.github.mikephil.charting.data.BarEntry;
						public getYVals(): native.Array<number>;
						public constructor(param0: globalAndroid.os.Parcel);
						public constructor(param0: number, param1: native.Array<number>, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public getY(): number;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public calcRanges(): void;
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BarLineScatterCandleBubbleData<T>  extends com.github.mikephil.charting.data.ChartData<any> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>>;
						public constructor(param0: java.util.List<any>);
						public constructor();
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BarLineScatterCandleBubbleDataSet<T>  extends com.github.mikephil.charting.data.DataSet<any> implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any>>;
						public mHighLightColor: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public setHighLightColor(param0: number): void;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BaseDataSet<T>  extends com.github.mikephil.charting.interfaces.datasets.IDataSet<any> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BaseDataSet<any>>;
						public mColors: java.util.List<java.lang.Integer>;
						public mValueColors: java.util.List<java.lang.Integer>;
						public mAxisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
						public mHighlightEnabled: boolean;
						public mValueFormatter: com.github.mikephil.charting.formatter.IValueFormatter;
						public mValueTypeface: globalAndroid.graphics.Typeface;
						public mDrawValues: boolean;
						public mDrawIcons: boolean;
						public mIconsOffset: com.github.mikephil.charting.utils.MPPointF;
						public mValueTextSize: number;
						public mVisible: boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setForm(param0: com.github.mikephil.charting.components.Legend.LegendForm): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public setFormLineWidth(param0: number): void;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setColor(param0: number): void;
						public setColor(param0: number, param1: number): void;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public getColor(param0: number): number;
						public setColors(param0: native.Array<number>, param1: number): void;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setColors(param0: native.Array<number>): void;
						public setColors(param0: native.Array<number>, param1: globalAndroid.content.Context): void;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public setColors(param0: java.util.List<java.lang.Integer>): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public setFormLineDashEffect(param0: globalAndroid.graphics.DashPathEffect): void;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public setDrawValues(param0: boolean): void;
						public contains(param0: any): boolean;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public resetColors(): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getValueColors(): java.util.List<java.lang.Integer>;
						public setFormSize(param0: number): void;
						public getFormSize(): number;
						public notifyDataSetChanged(): void;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public removeLast(): boolean;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setVisible(param0: boolean): void;
						public addColor(param0: number): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BaseEntry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BaseEntry>;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor();
						public setY(param0: number): void;
						public constructor(param0: number);
						public getIcon(): globalAndroid.graphics.drawable.Drawable;
						public setData(param0: any): void;
						public getY(): number;
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: any);
						public getData(): any;
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleData>;
						public constructor(param0: java.util.List<any>);
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>);
						public setHighlightCircleWidth(param0: number): void;
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BubbleEntry> implements com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleDataSet>;
						public mMaxSize: number;
						public mNormalizeSize: boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public getHighlightCircleWidth(): number;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.BubbleEntry>, param1: string);
						public isNormalizeSizeEnabled(): boolean;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.BubbleEntry): void;
						public constructor();
						public getYMax(): number;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public setHighlightCircleWidth(param0: number): void;
						public getMaxSize(): number;
						public calcMinMax(): void;
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.BubbleEntry>;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setNormalizeSizeEnabled(param0: boolean): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleEntry extends com.github.mikephil.charting.data.Entry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.BubbleEntry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public setSize(param0: number): void;
						public constructor();
						public constructor(param0: number, param1: number, param2: number, param3: any);
						public constructor(param0: number, param1: number, param2: number, param3: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public constructor(param0: globalAndroid.os.Parcel);
						public getSize(): number;
						public constructor(param0: number, param1: number, param2: number, param3: globalAndroid.graphics.drawable.Drawable, param4: any);
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public copy(): com.github.mikephil.charting.data.BubbleEntry;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.CandleData>;
						public constructor(param0: java.util.List<any>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>);
						public constructor(param0: native.Array<any>);
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<com.github.mikephil.charting.data.CandleEntry> implements com.github.mikephil.charting.interfaces.datasets.ICandleDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.CandleDataSet>;
						public mIncreasingPaintStyle: globalAndroid.graphics.Paint.Style;
						public mDecreasingPaintStyle: globalAndroid.graphics.Paint.Style;
						public mNeutralColor: number;
						public mIncreasingColor: number;
						public mDecreasingColor: number;
						public mShadowColor: number;
						public setShowCandleBar(param0: boolean): void;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public setNeutralColor(param0: number): void;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setShadowColor(param0: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setShadowColorSameAsCandle(param0: boolean): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getShadowColor(): number;
						public getYMin(): number;
						public constructor();
						public setIncreasingColor(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.CandleEntry): void;
						public getShowCandleBar(): boolean;
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public getIncreasingColor(): number;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getNeutralColor(): number;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.CandleEntry>, param1: string);
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public setDecreasingPaintStyle(param0: globalAndroid.graphics.Paint.Style): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
						public setBarSpace(param0: number): void;
						public getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
						public getEntryForXValue(param0: number, param1: number): any;
						public setIncreasingPaintStyle(param0: globalAndroid.graphics.Paint.Style): void;
						public getLabel(): string;
						public setShadowWidth(param0: number): void;
						public getEntryCount(): number;
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.CandleEntry>;
						public getValueTextColor(): number;
						public getShadowWidth(): number;
						public setDecreasingColor(param0: number): void;
						public getShadowColorSameAsCandle(): boolean;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.CandleEntry): void;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getBarSpace(): number;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getDecreasingColor(): number;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleEntry extends com.github.mikephil.charting.data.Entry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.CandleEntry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public getOpen(): number;
						public copy(): com.github.mikephil.charting.data.CandleEntry;
						public getClose(): number;
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public setClose(param0: number): void;
						public setOpen(param0: number): void;
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number);
						public constructor();
						public getLow(): number;
						public getHigh(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.drawable.Drawable, param6: any);
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: any);
						public setLow(param0: number): void;
						public getShadowRange(): number;
						public constructor(param0: globalAndroid.os.Parcel);
						public getBodyRange(): number;
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public getY(): number;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: any);
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						public setHigh(param0: number): void;
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class ChartData<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.github.mikephil.charting.data.ChartData<any>>;
						public mYMax: number;
						public mYMin: number;
						public mXMax: number;
						public mXMin: number;
						public mLeftAxisMax: number;
						public mLeftAxisMin: number;
						public mRightAxisMax: number;
						public mRightAxisMin: number;
						public mDataSets: java.util.List<T>;
						public setValueTextColor(param0: number): void;
						public removeDataSet(param0: number): boolean;
						public getXMax(): number;
						public removeEntry(param0: number, param1: number): boolean;
						public getColors(): native.Array<number>;
						public getEntryCount(): number;
						public getMaxEntryCountSet(): T;
						public calcMinMaxY(param0: number, param1: number): void;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): boolean;
						public getDataSetCount(): number;
						public calcMinMax(): void;
						public getDataSets(): java.util.List<T>;
						public setValueTextSize(param0: number): void;
						public isHighlightEnabled(): boolean;
						public getYMin(): number;
						public getYMin(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public getDataSetLabels(): native.Array<string>;
						public getDataSetForEntry(param0: com.github.mikephil.charting.data.Entry): T;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public constructor();
						public constructor(param0: native.Array<T>);
						public getXMin(): number;
						public calcMinMax(param0: T): void;
						public getYMax(): number;
						public getDataSetByLabel(param0: string, param1: boolean): T;
						public contains(param0: T): boolean;
						public setDrawValues(param0: boolean): void;
						public clearValues(): void;
						public constructor(param0: java.util.List<T>);
						public getFirstLeft(param0: java.util.List<T>): T;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public getDataSetIndexByLabel(param0: java.util.List<T>, param1: string, param2: boolean): number;
						public getIndexOfDataSet(param0: T): number;
						public getDataSetByIndex(param0: number): T;
						public addEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): void;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public addDataSet(param0: T): void;
						public removeDataSet(param0: T): boolean;
						public getYMax(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public setHighlightEnabled(param0: boolean): void;
						public notifyDataChanged(): void;
						public getFirstRight(param0: java.util.List<T>): T;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CombinedData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.CombinedData>;
						public constructor(param0: java.util.List<any>);
						public removeDataSet(param0: number): boolean;
						public removeEntry(param0: number, param1: number): boolean;
						public getDataSetByHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>;
						public setData(param0: com.github.mikephil.charting.data.BubbleData): void;
						public removeDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): boolean;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): boolean;
						public setData(param0: com.github.mikephil.charting.data.LineData): void;
						public calcMinMax(): void;
						public setData(param0: com.github.mikephil.charting.data.BarData): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public constructor();
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public setData(param0: com.github.mikephil.charting.data.CandleData): void;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public setData(param0: com.github.mikephil.charting.data.ScatterData): void;
						public removeDataSet(param0: any): boolean;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getAllData(): java.util.List<com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>>;
						public getDataIndex(param0: com.github.mikephil.charting.data.ChartData<any>): number;
						public calcMinMax(param0: any): void;
						public getDataByIndex(param0: number): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public notifyDataChanged(): void;
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class DataSet<T>  extends com.github.mikephil.charting.data.BaseDataSet<any> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.DataSet<any>>;
						public mValues: java.util.List<any>;
						public mYMax: number;
						public mYMin: number;
						public mXMax: number;
						public mXMin: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public toString(): string;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public setValues(param0: java.util.List<any>): void;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public calcMinMaxX(param0: any): void;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getValues(): java.util.List<any>;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public toSimpleString(): string;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
					export module DataSet {
						export class Rounding {
							public static class: java.lang.Class<com.github.mikephil.charting.data.DataSet.Rounding>;
							public static UP: com.github.mikephil.charting.data.DataSet.Rounding;
							public static DOWN: com.github.mikephil.charting.data.DataSet.Rounding;
							public static CLOSEST: com.github.mikephil.charting.data.DataSet.Rounding;
							public static valueOf(param0: string): com.github.mikephil.charting.data.DataSet.Rounding;
							public static values(): native.Array<com.github.mikephil.charting.data.DataSet.Rounding>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class Entry extends com.github.mikephil.charting.data.BaseEntry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.Entry>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.github.mikephil.charting.data.Entry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public constructor();
						public describeContents(): number;
						public getX(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: number, param1: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public toString(): string;
						public setX(param0: number): void;
						public constructor(param0: globalAndroid.os.Parcel);
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public equalTo(param0: com.github.mikephil.charting.data.Entry): boolean;
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class LineData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.ILineDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.LineData>;
						public constructor(param0: java.util.List<any>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>);
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>);
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class LineDataSet extends com.github.mikephil.charting.data.LineRadarDataSet<com.github.mikephil.charting.data.Entry> implements com.github.mikephil.charting.interfaces.datasets.ILineDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.LineDataSet>;
						public getCircleRadius(): number;
						public getColor(): number;
						public getFillColor(): number;
						public getCircleHoleColor(): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public isDrawCirclesEnabled(): boolean;
						public setCircleColors(param0: native.Array<number>): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public setDrawIcons(param0: boolean): void;
						public setCircleRadius(param0: number): void;
						public setCircleSize(param0: number): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public constructor();
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.Entry>;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public setCircleColorHole(param0: number): void;
						public setMode(param0: com.github.mikephil.charting.data.LineDataSet.Mode): void;
						public removeFirst(): boolean;
						public constructor(param0: string);
						public getColors(): java.util.List<java.lang.Integer>;
						public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
						public getCircleSize(): number;
						public getEntryForXValue(param0: number, param1: number): any;
						public getCircleColor(param0: number): number;
						public getLabel(): string;
						public getEntryCount(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setCircleColor(param0: number): void;
						public getHighlightLineWidth(): number;
						public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public setCircleHoleRadius(param0: number): void;
						public setCubicIntensity(param0: number): void;
						public calcMinMax(): void;
						public setCircleColors(param0: java.util.List<java.lang.Integer>): void;
						public isDrawFilledEnabled(): boolean;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public contains(param0: any): boolean;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getCircleHoleRadius(): number;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public getCircleColors(): java.util.List<java.lang.Integer>;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
						public isDrawCircleHoleEnabled(): boolean;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public disableDashedLine(): void;
						public resetCircleColors(): void;
						public needsFormatter(): boolean;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public getYMin(): number;
						public getYMax(): number;
						public setDrawFilled(param0: boolean): void;
						public isDrawCubicEnabled(): boolean;
						public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public setFillFormatter(param0: com.github.mikephil.charting.formatter.IFillFormatter): void;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.Entry>, param1: string);
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getFillAlpha(): number;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getCircleColorCount(): number;
						public isVisible(): boolean;
						public enableDashedLine(param0: number, param1: number, param2: number): void;
						public isDashedLineEnabled(): boolean;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public setDrawValues(param0: boolean): void;
						public setCircleColors(param0: native.Array<number>, param1: globalAndroid.content.Context): void;
						public isDrawIconsEnabled(): boolean;
						public getFormSize(): number;
						public setDrawCircles(param0: boolean): void;
						public removeLast(): boolean;
						public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getCubicIntensity(): number;
						public setDrawCircleHole(param0: boolean): void;
						public constructor(param0: java.util.List<any>, param1: string);
						public getLineWidth(): number;
						public isDrawSteppedEnabled(): boolean;
						public setVisible(param0: boolean): void;
					}
					export module LineDataSet {
						export class Mode {
							public static class: java.lang.Class<com.github.mikephil.charting.data.LineDataSet.Mode>;
							public static LINEAR: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static STEPPED: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static CUBIC_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static HORIZONTAL_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static valueOf(param0: string): com.github.mikephil.charting.data.LineDataSet.Mode;
							public static values(): native.Array<com.github.mikephil.charting.data.LineDataSet.Mode>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class LineRadarDataSet<T>  extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any> implements com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any>  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.LineRadarDataSet<any>>;
						public mFillDrawable: globalAndroid.graphics.drawable.Drawable;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getFillColor(): number;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public setDrawFilled(param0: boolean): void;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
						public calcMinMaxY(param0: any): void;
						public setFillDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public setFillColor(param0: number): void;
						public getEntryForXValue(param0: number, param1: number): any;
						public getFillAlpha(): number;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public isDrawFilledEnabled(): boolean;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setLineWidth(param0: number): void;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public getLineWidth(): number;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setFillAlpha(param0: number): void;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class LineScatterCandleRadarDataSet<T>  extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet<any> implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any>  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<any>>;
						public mDrawVerticalHighlightIndicator: boolean;
						public mDrawHorizontalHighlightIndicator: boolean;
						public mHighlightLineWidth: number;
						public mHighlightDashPathEffect: globalAndroid.graphics.DashPathEffect;
						public isDashedHighlightLineEnabled(): boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setDrawVerticalHighlightIndicator(param0: boolean): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public enableDashedHighlightLine(param0: number, param1: number, param2: number): void;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setHighlightLineWidth(param0: number): void;
						public setDrawHorizontalHighlightIndicator(param0: boolean): void;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public disableDashedHighlightLine(): void;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public setDrawHighlightIndicators(param0: boolean): void;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieData extends com.github.mikephil.charting.data.ChartData<com.github.mikephil.charting.interfaces.datasets.IPieDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.PieData>;
						public constructor(param0: java.util.List<any>);
						public getDataSetByLabel(param0: string, param1: boolean): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public constructor();
						public setDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
						public getDataSetByIndex(param0: number): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public getDataSet(): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public constructor(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet);
						public getYValueSum(): number;
						public getDataSetByIndex(param0: number): any;
						public constructor(param0: native.Array<any>);
						public getDataSetByLabel(param0: string, param1: boolean): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieDataSet extends com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.PieEntry> implements com.github.mikephil.charting.interfaces.datasets.IPieDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.PieDataSet>;
						public isValueLineVariableLength(): boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setSliceSpace(param0: number): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getSliceSpace(): number;
						public isAutomaticallyDisableSliceSpacingEnabled(): boolean;
						public setLabel(param0: string): void;
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.PieEntry>;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public getSelectionShift(): number;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public setSelectionShift(param0: number): void;
						public getYMax(): number;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public getValueLineColor(): number;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public getValueLinePart1Length(): number;
						public setValueLinePart2Length(param0: number): void;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public setValueLineColor(param0: number): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.PieEntry>, param1: string);
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public setValueLineVariableLength(param0: boolean): void;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getValueLinePart1OffsetPercentage(): number;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setXValuePosition(param0: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
						public getValueLinePart2Length(): number;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.PieEntry): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public setValueLinePart1Length(param0: number): void;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public setAutomaticallyDisableSliceSpacing(param0: boolean): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public setValueLinePart1OffsetPercentage(param0: number): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						public setValueLineWidth(param0: number): void;
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setYValuePosition(param0: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
						public getValueLineWidth(): number;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
					export module PieDataSet {
						export class ValuePosition {
							public static class: java.lang.Class<com.github.mikephil.charting.data.PieDataSet.ValuePosition>;
							public static INSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public static OUTSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public static values(): native.Array<com.github.mikephil.charting.data.PieDataSet.ValuePosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieEntry extends com.github.mikephil.charting.data.Entry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.PieEntry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public constructor();
						public constructor(param0: number, param1: string);
						public getX(): number;
						public constructor(param0: number, param1: string, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public constructor(param0: number, param1: string, param2: globalAndroid.graphics.drawable.Drawable);
						public getLabel(): string;
						public constructor(param0: number, param1: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public constructor(param0: number, param1: string, param2: any);
						public constructor(param0: globalAndroid.os.Parcel);
						public setX(param0: number): void;
						public setLabel(param0: string): void;
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public copy(): com.github.mikephil.charting.data.PieEntry;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarData extends com.github.mikephil.charting.data.ChartData<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.RadarData>;
						public constructor(param0: java.util.List<any>);
						public setLabels(param0: java.util.List<string>): void;
						public constructor();
						public setLabels(param0: native.Array<string>): void;
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>);
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public getLabels(): java.util.List<string>;
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarDataSet extends com.github.mikephil.charting.data.LineRadarDataSet<com.github.mikephil.charting.data.RadarEntry> implements com.github.mikephil.charting.interfaces.datasets.IRadarDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.RadarDataSet>;
						public mDrawHighlightCircleEnabled: boolean;
						public mHighlightCircleFillColor: number;
						public mHighlightCircleStrokeColor: number;
						public mHighlightCircleStrokeAlpha: number;
						public mHighlightCircleInnerRadius: number;
						public mHighlightCircleOuterRadius: number;
						public mHighlightCircleStrokeWidth: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getFillColor(): number;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getHighlightCircleStrokeWidth(): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setHighlightCircleStrokeAlpha(param0: number): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setHighlightCircleOuterRadius(param0: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public setHighlightCircleFillColor(param0: number): void;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public getHighlightCircleStrokeAlpha(): number;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public getHighlightCircleInnerRadius(): number;
						public setHighlightCircleInnerRadius(param0: number): void;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public setDrawFilled(param0: boolean): void;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public setHighlightCircleStrokeWidth(param0: number): void;
						public addEntryOrdered(param0: any): void;
						public isDrawHighlightCircleEnabled(): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getColors(): java.util.List<java.lang.Integer>;
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.RadarEntry>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.RadarEntry>, param1: string);
						public getEntryForXValue(param0: number, param1: number): any;
						public getFillAlpha(): number;
						public getLabel(): string;
						public setHighlightCircleStrokeColor(param0: number): void;
						public getHighlightCircleOuterRadius(): number;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getHighlightCircleStrokeColor(): number;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public isDrawFilledEnabled(): boolean;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public isDrawIconsEnabled(): boolean;
						public setDrawHighlightCircleEnabled(param0: boolean): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getHighlightCircleFillColor(): number;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public constructor(param0: java.util.List<any>, param1: string);
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public getLineWidth(): number;
						public setVisible(param0: boolean): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarEntry extends com.github.mikephil.charting.data.Entry {
						public static class: java.lang.Class<com.github.mikephil.charting.data.RadarEntry>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: any);
						public copy(): com.github.mikephil.charting.data.RadarEntry;
						public constructor();
						public getX(): number;
						public constructor(param0: number, param1: any);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: any);
						public constructor(param0: globalAndroid.os.Parcel);
						public setX(param0: number): void;
						public constructor(param0: number);
						public constructor(param0: number, param1: number, param2: any);
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class ScatterData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet> {
						public static class: java.lang.Class<com.github.mikephil.charting.data.ScatterData>;
						public constructor(param0: java.util.List<any>);
						public constructor();
						public constructor(param0: java.util.List<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>);
						public getGreatestShapeSize(): number;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>);
						public constructor(param0: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class ScatterDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet<com.github.mikephil.charting.data.Entry> implements com.github.mikephil.charting.interfaces.datasets.IScatterDataSet  {
						public static class: java.lang.Class<com.github.mikephil.charting.data.ScatterDataSet>;
						public mShapeRenderer: com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getScatterShapeSize(): number;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setLabel(param0: string): void;
						public getEntryIndex(param0: any): number;
						public removeEntry(param0: any): boolean;
						public needsFormatter(): boolean;
						public setDrawIcons(param0: boolean): void;
						public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public copy(): com.github.mikephil.charting.data.DataSet<com.github.mikephil.charting.data.Entry>;
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public getValueTypeface(): globalAndroid.graphics.Typeface;
						public calcMinMaxY(param0: any): void;
						public calcMinMax(param0: any): void;
						public getColor(param0: number): number;
						public static getRendererForShape(param0: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public addEntryOrdered(param0: any): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public constructor(param0: java.util.List<com.github.mikephil.charting.data.Entry>, param1: string);
						public getColors(): java.util.List<java.lang.Integer>;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryForXValue(param0: number, param1: number): any;
						public getLabel(): string;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getEntriesForXValue(param0: number): java.util.List<any>;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public setScatterShapeHoleColor(param0: number): void;
						public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
						public getScatterShapeHoleColor(): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public contains(param0: any): boolean;
						public setDrawValues(param0: boolean): void;
						public setScatterShape(param0: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): void;
						public getScatterShapeHoleRadius(): number;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public addEntry(param0: any): boolean;
						public setScatterShapeSize(param0: number): void;
						public isDrawIconsEnabled(): boolean;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
						public getFormSize(): number;
						public removeLast(): boolean;
						public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setScatterShapeHoleRadius(param0: number): void;
						public constructor(param0: java.util.List<any>, param1: string);
						public copy(): com.github.mikephil.charting.data.DataSet<any>;
						public setVisible(param0: boolean): void;
						public setShapeRenderer(param0: com.github.mikephil.charting.renderer.scatter.IShapeRenderer): void;
						public getEntryForIndex(param0: number): any;
						public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export module filter {
						export class Approximator {
							public static class: java.lang.Class<com.github.mikephil.charting.data.filter.Approximator>;
							public constructor();
							public reduceWithDouglasPeucker(param0: native.Array<number>, param1: number): native.Array<number>;
						}
						export module Approximator {
							export class Line {
								public static class: java.lang.Class<com.github.mikephil.charting.data.filter.Approximator.Line>;
								public distance(param0: number, param1: number): number;
								public getPoints(): native.Array<number>;
								public constructor(param0: com.github.mikephil.charting.data.filter.Approximator, param1: number, param2: number, param3: number, param4: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module exception {
					export class DrawingDataSetNotCreatedException {
						public static class: java.lang.Class<com.github.mikephil.charting.exception.DrawingDataSetNotCreatedException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class ColorFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.ColorFormatter>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.ColorFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): number;
						});
						public constructor();
						public getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultAxisValueFormatter extends com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultAxisValueFormatter>;
						public mFormat: java.text.DecimalFormat;
						public digits: number;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public getDecimalDigits(): number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultFillFormatter extends com.github.mikephil.charting.formatter.IFillFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultFillFormatter>;
						public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultValueFormatter extends com.github.mikephil.charting.formatter.IValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.DefaultValueFormatter>;
						public mFormat: java.text.DecimalFormat;
						public mDecimalDigits: number;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getDecimalDigits(): number;
						public constructor(param0: number);
						public setup(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IAxisValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.IAxisValueFormatter>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IAxisValueFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						});
						public constructor();
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IFillFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.IFillFormatter>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IFillFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
						});
						public constructor();
						public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.IValueFormatter>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IValueFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						});
						public constructor();
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IndexAxisValueFormatter extends com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.IndexAxisValueFormatter>;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public constructor();
						public setValues(param0: native.Array<string>): void;
						public constructor(param0: java.util.Collection<string>);
						public constructor(param0: native.Array<string>);
						public getValues(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class LargeValueFormatter implements com.github.mikephil.charting.formatter.IValueFormatter, com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.LargeValueFormatter>;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public constructor();
						public getDecimalDigits(): number;
						public setAppendix(param0: string): void;
						public setSuffix(param0: native.Array<string>): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class PercentFormatter implements com.github.mikephil.charting.formatter.IValueFormatter, com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.PercentFormatter>;
						public mFormat: java.text.DecimalFormat;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public constructor();
						public getDecimalDigits(): number;
						public constructor(param0: java.text.DecimalFormat);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class StackedValueFormatter extends com.github.mikephil.charting.formatter.IValueFormatter {
						public static class: java.lang.Class<com.github.mikephil.charting.formatter.StackedValueFormatter>;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public constructor(param0: boolean, param1: string, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class BarHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter<com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider> {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.BarHighlighter>;
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getStackedHighlight(param0: com.github.mikephil.charting.highlight.Highlight, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number, param3: number): com.github.mikephil.charting.highlight.Highlight;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
						public constructor(param0: any);
						public getClosestStackIndex(param0: native.Array<com.github.mikephil.charting.highlight.Range>, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class ChartHighlighter<T>  extends com.github.mikephil.charting.highlight.IHighlighter {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.ChartHighlighter<any>>;
						public mChart: any;
						public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public getMinimumDistance(param0: java.util.List<com.github.mikephil.charting.highlight.Highlight>, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public buildHighlights(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>, param1: number, param2: number, param3: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public getHighlightForX(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
						public getHighlightPos(param0: com.github.mikephil.charting.highlight.Highlight): number;
						public constructor(param0: any);
						public getHighlightsAtXValue(param0: number, param1: number, param2: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public getValsForTouch(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public getClosestHighlightByPixel(param0: java.util.List<com.github.mikephil.charting.highlight.Highlight>, param1: number, param2: number, param3: com.github.mikephil.charting.components.YAxis.AxisDependency, param4: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class CombinedHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter<com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider> implements com.github.mikephil.charting.highlight.IHighlighter  {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.CombinedHighlighter>;
						public barHighlighter: com.github.mikephil.charting.highlight.BarHighlighter;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider, param1: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
						public constructor(param0: any);
						public getHighlightsAtXValue(param0: number, param1: number, param2: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class Highlight {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.Highlight>;
						public getYPx(): number;
						public getDataIndex(): number;
						public getX(): number;
						public getXPx(): number;
						public getAxis(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getDrawX(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public isStacked(): boolean;
						public equalTo(param0: com.github.mikephil.charting.highlight.Highlight): boolean;
						public toString(): string;
						public setDataIndex(param0: number): void;
						public getDataSetIndex(): number;
						public getStackIndex(): number;
						public getDrawY(): number;
						public getY(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public setDraw(param0: number, param1: number): void;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class HorizontalBarHighlighter extends com.github.mikephil.charting.highlight.BarHighlighter {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.HorizontalBarHighlighter>;
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public buildHighlights(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>, param1: number, param2: number, param3: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class IHighlighter {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.IHighlighter>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.highlight.IHighlighter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						});
						public constructor();
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class PieHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter<com.github.mikephil.charting.charts.PieChart> {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.PieHighlighter>;
						public constructor(param0: com.github.mikephil.charting.charts.PieChart);
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: any);
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export abstract class PieRadarHighlighter<T>  extends com.github.mikephil.charting.highlight.IHighlighter {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.PieRadarHighlighter<any>>;
						public mChart: any;
						public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: any);
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class RadarHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter<com.github.mikephil.charting.charts.RadarChart> {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.RadarHighlighter>;
						public constructor(param0: com.github.mikephil.charting.charts.RadarChart);
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: any);
						public getHighlightsAtIndex(param0: number): java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class Range {
						public static class: java.lang.Class<com.github.mikephil.charting.highlight.Range>;
						public from: number;
						public to: number;
						public contains(param0: number): boolean;
						public isSmaller(param0: number): boolean;
						public isLarger(param0: number): boolean;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BarDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBarData(): com.github.mikephil.charting.data.BarData;
								isDrawBarShadowEnabled(): boolean;
								isDrawValueAboveBarEnabled(): boolean;
								isHighlightFullBarEnabled(): boolean;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public isHighlightFullBarEnabled(): boolean;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getBarData(): com.github.mikephil.charting.data.BarData;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public isDrawBarShadowEnabled(): boolean;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public isDrawValueAboveBarEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BarLineScatterCandleBubbleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.ChartInterface {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BubbleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBubbleData(): com.github.mikephil.charting.data.BubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class CandleDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCandleData(): com.github.mikephil.charting.data.CandleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public getCandleData(): com.github.mikephil.charting.data.CandleData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class ChartInterface {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.ChartInterface>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ChartInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class CombinedDataProvider implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCombinedData(): com.github.mikephil.charting.data.CombinedData;
								getLineData(): com.github.mikephil.charting.data.LineData;
								getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
								getBarData(): com.github.mikephil.charting.data.BarData;
								isDrawBarShadowEnabled(): boolean;
								isDrawValueAboveBarEnabled(): boolean;
								isHighlightFullBarEnabled(): boolean;
								getBubbleData(): com.github.mikephil.charting.data.BubbleData;
								getCandleData(): com.github.mikephil.charting.data.CandleData;
								getScatterData(): com.github.mikephil.charting.data.ScatterData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public isHighlightFullBarEnabled(): boolean;
							public getScatterData(): com.github.mikephil.charting.data.ScatterData;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getBarData(): com.github.mikephil.charting.data.BarData;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public isDrawBarShadowEnabled(): boolean;
							public getYChartMax(): number;
							public getCandleData(): com.github.mikephil.charting.data.CandleData;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getLineData(): com.github.mikephil.charting.data.LineData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public isDrawValueAboveBarEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class LineDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLineData(): com.github.mikephil.charting.data.LineData;
								getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getLineData(): com.github.mikephil.charting.data.LineData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class ScatterDataProvider extends com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getScatterData(): com.github.mikephil.charting.data.ScatterData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): globalAndroid.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData<any>;
								getMaxVisibleCount(): number;
							});
							public constructor();
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getScatterData(): com.github.mikephil.charting.data.ScatterData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getContentRect(): globalAndroid.graphics.RectF;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData<any>;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData<any>;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBarDataSet extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BarEntry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isStacked(): boolean;
								getStackSize(): number;
								getBarShadowColor(): number;
								getBarBorderWidth(): number;
								getBarBorderColor(): number;
								getHighLightAlpha(): number;
								getStackLabels(): native.Array<string>;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public isStacked(): boolean;
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getBarBorderWidth(): number;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getStackLabels(): native.Array<string>;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public getHighLightAlpha(): number;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getBarShadowColor(): number;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getBarBorderColor(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getStackSize(): number;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBarLineScatterCandleBubbleDataSet<T>  extends com.github.mikephil.charting.interfaces.datasets.IDataSet<any> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBubbleDataSet extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<com.github.mikephil.charting.data.BubbleEntry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setHighlightCircleWidth(param0: number): void;
								getMaxSize(): number;
								isNormalizeSizeEnabled(): boolean;
								getHighlightCircleWidth(): number;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public setHighlightCircleWidth(param0: number): void;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public getMaxSize(): number;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getHighlightCircleWidth(): number;
							public isNormalizeSizeEnabled(): boolean;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ICandleDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<com.github.mikephil.charting.data.CandleEntry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ICandleDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBarSpace(): number;
								getShowCandleBar(): boolean;
								getShadowWidth(): number;
								getShadowColor(): number;
								getNeutralColor(): number;
								getIncreasingColor(): number;
								getDecreasingColor(): number;
								getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
								getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
								getShadowColorSameAsCandle(): boolean;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public getNeutralColor(): number;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public getShadowWidth(): number;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public getShowCandleBar(): boolean;
							public getDecreasingColor(): number;
							public getBarSpace(): number;
							public getShadowColor(): number;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getIncreasingColor(): number;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public getIncreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
							public removeEntry(param0: number): boolean;
							public getDecreasingPaintStyle(): globalAndroid.graphics.Paint.Style;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getShadowColorSameAsCandle(): boolean;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IDataSet<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IDataSet<any>>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): T;
								getEntryForXValue(param0: number, param1: number): T;
								getEntriesForXValue(param0: number): java.util.List<T>;
								getEntryForIndex(param0: number): T;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: T): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: T): boolean;
								addEntryOrdered(param0: T): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: T): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: T): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public removeLast(): boolean;
							public addEntry(param0: T): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public getEntryForIndex(param0: number): T;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): T;
							public getEntryForXValue(param0: number, param1: number): T;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public addEntryOrdered(param0: T): void;
							public setDrawIcons(param0: boolean): void;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getEntriesForXValue(param0: number): java.util.List<T>;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public removeEntry(param0: T): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public contains(param0: T): boolean;
							public clear(): void;
							public getColors(): java.util.List<java.lang.Integer>;
							public getEntryIndex(param0: T): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<com.github.mikephil.charting.data.Entry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
								getCubicIntensity(): number;
								isDrawCubicEnabled(): boolean;
								isDrawSteppedEnabled(): boolean;
								getCircleRadius(): number;
								getCircleHoleRadius(): number;
								getCircleColor(param0: number): number;
								getCircleColorCount(): number;
								isDrawCirclesEnabled(): boolean;
								getCircleHoleColor(): number;
								isDrawCircleHoleEnabled(): boolean;
								getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
								isDashedLineEnabled(): boolean;
								getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
								getFillColor(): number;
								getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getCircleHoleColor(): number;
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public isDrawSteppedEnabled(): boolean;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public getCircleHoleRadius(): number;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public isDrawFilledEnabled(): boolean;
							public setDrawIcons(param0: boolean): void;
							public getCircleColorCount(): number;
							public isDrawCirclesEnabled(): boolean;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getCircleColor(param0: number): number;
							public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getCubicIntensity(): number;
							public isDrawCircleHoleEnabled(): boolean;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public isDrawCubicEnabled(): boolean;
							public getFormLineWidth(): number;
							public getDashPathEffect(): globalAndroid.graphics.DashPathEffect;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public isDashedLineEnabled(): boolean;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getCircleRadius(): number;
							public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
							public getFillColor(): number;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineRadarDataSet<T>  extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any>>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getFillColor(): number;
								getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public isDrawFilledEnabled(): boolean;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getFillColor(): number;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineScatterCandleRadarDataSet<T>  extends com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any>>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IPieDataSet extends com.github.mikephil.charting.interfaces.datasets.IDataSet<com.github.mikephil.charting.data.PieEntry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IPieDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IPieDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSliceSpace(): number;
								isAutomaticallyDisableSliceSpacingEnabled(): boolean;
								getSelectionShift(): number;
								getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
								getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
								getValueLineColor(): number;
								getValueLineWidth(): number;
								getValueLinePart1OffsetPercentage(): number;
								getValueLinePart1Length(): number;
								getValueLinePart2Length(): number;
								isValueLineVariableLength(): boolean;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public isAutomaticallyDisableSliceSpacingEnabled(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public getValueLineWidth(): number;
							public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getValueLinePart1OffsetPercentage(): number;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public isValueLineVariableLength(): boolean;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public getValueLinePart1Length(): number;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getSliceSpace(): number;
							public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public getColors(): java.util.List<java.lang.Integer>;
							public getValueLineColor(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getValueLinePart2Length(): number;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getSelectionShift(): number;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IRadarDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet<com.github.mikephil.charting.data.RadarEntry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IRadarDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isDrawHighlightCircleEnabled(): boolean;
								setDrawHighlightCircleEnabled(param0: boolean): void;
								getHighlightCircleFillColor(): number;
								getHighlightCircleStrokeColor(): number;
								getHighlightCircleStrokeAlpha(): number;
								getHighlightCircleInnerRadius(): number;
								getHighlightCircleOuterRadius(): number;
								getHighlightCircleStrokeWidth(): number;
								getFillColor(): number;
								getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public setDrawHighlightCircleEnabled(param0: boolean): void;
							public getHighlightCircleStrokeWidth(): number;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public isDrawFilledEnabled(): boolean;
							public isDrawHighlightCircleEnabled(): boolean;
							public getHighlightCircleStrokeAlpha(): number;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighlightCircleInnerRadius(): number;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public getFillDrawable(): globalAndroid.graphics.drawable.Drawable;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getHighlightCircleStrokeColor(): number;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getHighlightCircleOuterRadius(): number;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getHighlightCircleFillColor(): number;
							public getFormLineWidth(): number;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getFillColor(): number;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IScatterDataSet extends com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<com.github.mikephil.charting.data.Entry> {
							public static class: java.lang.Class<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IScatterDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getScatterShapeSize(): number;
								getScatterShapeHoleRadius(): number;
								getScatterShapeHoleColor(): number;
								getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
								getEntryForXValue(param0: number, param1: number): any;
								getEntriesForXValue(param0: number): java.util.List<any>;
								getEntryForIndex(param0: number): any;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: any): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: any): boolean;
								addEntryOrdered(param0: any): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: any): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: any): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List<java.lang.Integer>;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
								setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): globalAndroid.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setDrawIcons(param0: boolean): void;
								isDrawIconsEnabled(): boolean;
								setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
								getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public constructor();
							public getScatterShapeSize(): number;
							public getValueTypeface(): globalAndroid.graphics.Typeface;
							public setIconsOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getEntryForIndex(param0: number): any;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public getValueTextColor(param0: number): number;
							public getDashPathEffectHighlight(): globalAndroid.graphics.DashPathEffect;
							public getScatterShapeHoleColor(): number;
							public getColor(param0: number): number;
							public addEntryOrdered(param0: any): void;
							public removeLast(): boolean;
							public setValueTypeface(param0: globalAndroid.graphics.Typeface): void;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getFormLineDashEffect(): globalAndroid.graphics.DashPathEffect;
							public setDrawIcons(param0: boolean): void;
							public addEntry(param0: any): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForXValue(param0: number, param1: number): any;
							public setDrawValues(param0: boolean): void;
							public contains(param0: any): boolean;
							public getEntryIndex(param0: any): number;
							public removeFirst(): boolean;
							public removeEntry(param0: any): boolean;
							public getValueTextColor(): number;
							public getIconsOffset(): com.github.mikephil.charting.utils.MPPointF;
							public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): any;
							public getLabel(): string;
							public getScatterShapeHoleRadius(): number;
							public getXMin(): number;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public setValueTextColors(param0: java.util.List<java.lang.Integer>): void;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public isDrawIconsEnabled(): boolean;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getColors(): java.util.List<java.lang.Integer>;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getFormSize(): number;
							public getEntriesForXValue(param0: number): java.util.List<any>;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public setHighlightEnabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class AnimatedMoveViewJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedMoveViewJob>;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.AnimatedMoveViewJob): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public recycleSelf(): void;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View, param5: number, param6: number, param7: number);
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View, param5: number, param6: number, param7: number): com.github.mikephil.charting.jobs.AnimatedMoveViewJob;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export abstract class AnimatedViewPortJob extends com.github.mikephil.charting.jobs.ViewPortJob {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedViewPortJob>;
						public animator: globalAndroid.animation.ObjectAnimator;
						public phase: number;
						public xOrigin: number;
						public yOrigin: number;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public getPhase(): number;
						public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						public recycleSelf(): void;
						public getXOrigin(): number;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
						public setPhase(param0: number): void;
						public run(): void;
						public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
						public resetAnimator(): void;
						public onAnimationStart(param0: globalAndroid.animation.Animator): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View, param5: number, param6: number, param7: number);
						public getYOrigin(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class AnimatedZoomJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.AnimatedZoomJob>;
						public zoomOriginX: number;
						public zoomOriginY: number;
						public zoomCenterX: number;
						public zoomCenterY: number;
						public yAxis: com.github.mikephil.charting.components.YAxis;
						public xAxisRange: number;
						public mOnAnimationUpdateMatrixBuffer: globalAndroid.graphics.Matrix;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: globalAndroid.view.View, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.components.YAxis, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
						public recycleSelf(): void;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: globalAndroid.view.View, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.components.YAxis, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number): com.github.mikephil.charting.jobs.AnimatedZoomJob;
						public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
						public onAnimationStart(param0: globalAndroid.animation.Animator): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View, param5: number, param6: number, param7: number);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class MoveViewJob extends com.github.mikephil.charting.jobs.ViewPortJob {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.MoveViewJob>;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View): com.github.mikephil.charting.jobs.MoveViewJob;
						public run(): void;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.MoveViewJob): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export abstract class ViewPortJob extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.ViewPortJob>;
						public pts: native.Array<number>;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public xValue: number;
						public yValue: number;
						public mTrans: com.github.mikephil.charting.utils.Transformer;
						public view: globalAndroid.view.View;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public getYValue(): number;
						public getXValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class ZoomJob extends com.github.mikephil.charting.jobs.ViewPortJob {
						public static class: java.lang.Class<com.github.mikephil.charting.jobs.ZoomJob>;
						public scaleX: number;
						public scaleY: number;
						public axisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
						public mRunMatrixBuffer: globalAndroid.graphics.Matrix;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: globalAndroid.view.View);
						public constructor();
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.utils.Transformer, param6: com.github.mikephil.charting.components.YAxis.AxisDependency, param7: globalAndroid.view.View);
						public run(): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.utils.Transformer, param6: com.github.mikephil.charting.components.YAxis.AxisDependency, param7: globalAndroid.view.View): com.github.mikephil.charting.jobs.ZoomJob;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.ZoomJob): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class BarLineChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener<com.github.mikephil.charting.charts.BarLineChartBase<any>> {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.BarLineChartTouchListener>;
						public constructor(param0: com.github.mikephil.charting.charts.BarLineChartBase<any>, param1: globalAndroid.graphics.Matrix, param2: number);
						public getMatrix(): globalAndroid.graphics.Matrix;
						public setDragTriggerDist(param0: number): void;
						public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
						public getTrans(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
						public stopDeceleration(): void;
						public constructor(param0: any);
						public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
						public onLongPress(param0: globalAndroid.view.MotionEvent): void;
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						public computeScroll(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export abstract class ChartTouchListener<T> extends globalAndroid.view.View.OnTouchListener  {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.ChartTouchListener<any>>;
						public mLastGesture: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						public static NONE: number;
						public static DRAG: number;
						public static X_ZOOM: number;
						public static Y_ZOOM: number;
						public static PINCH_ZOOM: number;
						public static POST_ZOOM: number;
						public static ROTATE: number;
						public mTouchMode: number;
						public mLastHighlighted: com.github.mikephil.charting.highlight.Highlight;
						public mGestureDetector: globalAndroid.view.GestureDetector;
						public mChart: any;
						public getTouchMode(): number;
						public static distance(param0: number, param1: number, param2: number, param3: number): number;
						public startAction(param0: globalAndroid.view.MotionEvent): void;
						public getLastGesture(): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						public constructor(param0: any);
						public setLastHighlighted(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public performHighlight(param0: com.github.mikephil.charting.highlight.Highlight, param1: globalAndroid.view.MotionEvent): void;
						public endAction(param0: globalAndroid.view.MotionEvent): void;
					}
					export module ChartTouchListener {
						export class ChartGesture {
							public static class: java.lang.Class<com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture>;
							public static NONE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static DRAG: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static X_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static Y_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static PINCH_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static ROTATE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static SINGLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static DOUBLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static LONG_PRESS: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static FLING: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static values(): native.Array<com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture>;
							public static valueOf(param0: string): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnChartGestureListener {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.OnChartGestureListener>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onChartGestureStart(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
							onChartGestureEnd(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
							onChartLongPressed(param0: globalAndroid.view.MotionEvent): void;
							onChartDoubleTapped(param0: globalAndroid.view.MotionEvent): void;
							onChartSingleTapped(param0: globalAndroid.view.MotionEvent): void;
							onChartFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): void;
							onChartScale(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
							onChartTranslate(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
						});
						public constructor();
						public onChartSingleTapped(param0: globalAndroid.view.MotionEvent): void;
						public onChartTranslate(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
						public onChartGestureEnd(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
						public onChartFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): void;
						public onChartGestureStart(param0: globalAndroid.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
						public onChartLongPressed(param0: globalAndroid.view.MotionEvent): void;
						public onChartScale(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): void;
						public onChartDoubleTapped(param0: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnChartValueSelectedListener {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.OnChartValueSelectedListener>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartValueSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
							onNothingSelected(): void;
						});
						public constructor();
						public onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
						public onNothingSelected(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnDrawLineChartTouchListener {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.OnDrawLineChartTouchListener>;
						public constructor();
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnDrawListener {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.OnDrawListener>;
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnDrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void;
							onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void;
							onDrawFinished(param0: com.github.mikephil.charting.data.DataSet<any>): void;
						});
						public constructor();
						public onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void;
						public onDrawFinished(param0: com.github.mikephil.charting.data.DataSet<any>): void;
						public onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class PieRadarChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener<com.github.mikephil.charting.charts.PieRadarChartBase<any>> {
						public static class: java.lang.Class<com.github.mikephil.charting.listener.PieRadarChartTouchListener>;
						public constructor(param0: com.github.mikephil.charting.charts.PieRadarChartBase<any>);
						public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
						public setGestureStartAngle(param0: number, param1: number): void;
						public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
						public stopDeceleration(): void;
						public updateGestureRotation(param0: number, param1: number): void;
						public constructor(param0: any);
						public onLongPress(param0: globalAndroid.view.MotionEvent): void;
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						public computeScroll(): void;
					}
					export module PieRadarChartTouchListener {
						export class AngularVelocitySample {
							public static class: java.lang.Class<com.github.mikephil.charting.listener.PieRadarChartTouchListener.AngularVelocitySample>;
							public time: number;
							public angle: number;
							public constructor(param0: com.github.mikephil.charting.listener.PieRadarChartTouchListener, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module matrix {
					export class Vector3 {
						public static class: java.lang.Class<com.github.mikephil.charting.matrix.Vector3>;
						public x: number;
						public y: number;
						public z: number;
						public static ZERO: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_X: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_Y: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_Z: com.github.mikephil.charting.matrix.Vector3;
						public constructor();
						public subtractMultiple(param0: com.github.mikephil.charting.matrix.Vector3, param1: number): void;
						public multiply(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public constructor(param0: native.Array<number>);
						public add(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public length(): number;
						public length2(): number;
						public dot(param0: com.github.mikephil.charting.matrix.Vector3): number;
						public set(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public subtract(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public divide(param0: number): void;
						public set(param0: number, param1: number, param2: number): void;
						public normalize(): number;
						public add(param0: number, param1: number, param2: number): void;
						public multiply(param0: number): void;
						public constructor(param0: com.github.mikephil.charting.matrix.Vector3);
						public distance2(param0: com.github.mikephil.charting.matrix.Vector3): number;
						public pointsInSameDirection(param0: com.github.mikephil.charting.matrix.Vector3): boolean;
						public cross(param0: com.github.mikephil.charting.matrix.Vector3): com.github.mikephil.charting.matrix.Vector3;
						public constructor(param0: number, param1: number, param2: number);
						public zero(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class AxisRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.AxisRenderer>;
						public mAxis: com.github.mikephil.charting.components.AxisBase;
						public mTrans: com.github.mikephil.charting.utils.Transformer;
						public mGridPaint: globalAndroid.graphics.Paint;
						public mAxisLabelPaint: globalAndroid.graphics.Paint;
						public mAxisLinePaint: globalAndroid.graphics.Paint;
						public mLimitLinePaint: globalAndroid.graphics.Paint;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public computeAxisValues(param0: number, param1: number): void;
						public getPaintAxisLabels(): globalAndroid.graphics.Paint;
						public getTransformer(): com.github.mikephil.charting.utils.Transformer;
						public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public renderGridLines(param0: globalAndroid.graphics.Canvas): void;
						public getPaintGrid(): globalAndroid.graphics.Paint;
						public getPaintAxisLine(): globalAndroid.graphics.Paint;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class BarChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarChartRenderer>;
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider;
						public mBarRect: globalAndroid.graphics.RectF;
						public mBarBuffers: native.Array<com.github.mikephil.charting.buffer.BarBuffer>;
						public mShadowPaint: globalAndroid.graphics.Paint;
						public mBarBorderPaint: globalAndroid.graphics.Paint;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number): void;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public prepareBarHighlight(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.utils.Transformer): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public setHighlightDrawPos(param0: com.github.mikephil.charting.highlight.Highlight, param1: globalAndroid.graphics.RectF): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class BarLineScatterCandleBubbleRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer>;
						public mXBounds: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public isInBoundsX(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): boolean;
						public shouldDrawValues(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): boolean;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
					export module BarLineScatterCandleBubbleRenderer {
						export class XBounds {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds>;
							public min: number;
							public max: number;
							public range: number;
							public set(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider, param1: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet<any>): void;
							public constructor(param0: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class BubbleChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.BubbleChartRenderer>;
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public getShapeSize(param0: number, param1: number, param2: number, param3: boolean): number;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class CandleStickChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.CandleStickChartRenderer>;
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet): void;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class CombinedChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.CombinedChartRenderer>;
						public mRenderers: java.util.List<com.github.mikephil.charting.renderer.DataRenderer>;
						public mChart: java.lang.ref.WeakReference<com.github.mikephil.charting.charts.Chart<any>>;
						public mHighlightBuffer: java.util.List<com.github.mikephil.charting.highlight.Highlight>;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public createRenderers(): void;
						public constructor(param0: com.github.mikephil.charting.charts.CombinedChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public getSubRenderers(): java.util.List<com.github.mikephil.charting.renderer.DataRenderer>;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public setSubRenderers(param0: java.util.List<com.github.mikephil.charting.renderer.DataRenderer>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public getSubRenderer(param0: number): com.github.mikephil.charting.renderer.DataRenderer;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class DataRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.DataRenderer>;
						public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
						public mRenderPaint: globalAndroid.graphics.Paint;
						public mHighlightPaint: globalAndroid.graphics.Paint;
						public mDrawPaint: globalAndroid.graphics.Paint;
						public mValuePaint: globalAndroid.graphics.Paint;
						public applyValueTextStyle(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet<any>): void;
						public getPaintHighlight(): globalAndroid.graphics.Paint;
						public isDrawingValuesAllowed(param0: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
						public getPaintRender(): globalAndroid.graphics.Paint;
						public drawValue(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.formatter.IValueFormatter, param2: number, param3: com.github.mikephil.charting.data.Entry, param4: number, param5: number, param6: number, param7: number): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public getPaintValues(): globalAndroid.graphics.Paint;
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class HorizontalBarChartRenderer extends com.github.mikephil.charting.renderer.BarChartRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.HorizontalBarChartRenderer>;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number): void;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public prepareBarHighlight(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.utils.Transformer): void;
						public isDrawingValuesAllowed(param0: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawValue(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number): void;
						public drawValue(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.formatter.IValueFormatter, param2: number, param3: com.github.mikephil.charting.data.Entry, param4: number, param5: number, param6: number, param7: number): void;
						public setHighlightDrawPos(param0: com.github.mikephil.charting.highlight.Highlight, param1: globalAndroid.graphics.RectF): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class LegendRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.LegendRenderer>;
						public mLegendLabelPaint: globalAndroid.graphics.Paint;
						public mLegendFormPaint: globalAndroid.graphics.Paint;
						public mLegend: com.github.mikephil.charting.components.Legend;
						public computedEntries: java.util.List<com.github.mikephil.charting.components.LegendEntry>;
						public legendFontMetrics: globalAndroid.graphics.Paint.FontMetrics;
						public getFormPaint(): globalAndroid.graphics.Paint;
						public drawLabel(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: string): void;
						public drawForm(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: com.github.mikephil.charting.components.LegendEntry, param4: com.github.mikephil.charting.components.Legend): void;
						public getLabelPaint(): globalAndroid.graphics.Paint;
						public renderLegend(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.Legend);
						public computeLegend(param0: com.github.mikephil.charting.data.ChartData<any>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class LineChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineChartRenderer>;
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider;
						public mCirclePaintInner: globalAndroid.graphics.Paint;
						public mDrawBitmap: java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>;
						public mBitmapCanvas: globalAndroid.graphics.Canvas;
						public mBitmapConfig: globalAndroid.graphics.Bitmap.Config;
						public cubicPath: globalAndroid.graphics.Path;
						public cubicFillPath: globalAndroid.graphics.Path;
						public mGenerateFilledPathBuffer: globalAndroid.graphics.Path;
						public drawCircles(param0: globalAndroid.graphics.Canvas): void;
						public drawCubicFill(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param2: globalAndroid.graphics.Path, param3: com.github.mikephil.charting.utils.Transformer, param4: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
						public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
						public drawLinearFill(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
						public drawHorizontalBezier(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public releaseBitmap(): void;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawCubicBezier(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public drawLinear(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
					}
					export module LineChartRenderer {
						export class DataSetImageCache {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineChartRenderer.DataSetImageCache>;
							public fill(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: boolean, param2: boolean): void;
							public init(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): boolean;
							public getBitmap(param0: number): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class LineRadarRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineRadarRenderer>;
						public drawFilledPath(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Path, param2: number, param3: number): void;
						public drawFilledPath(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Path, param2: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class LineScatterCandleRadarRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer>;
						public drawHighlightLines(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet<any>): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class PieChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.PieChartRenderer>;
						public mChart: com.github.mikephil.charting.charts.PieChart;
						public mHolePaint: globalAndroid.graphics.Paint;
						public mTransparentCirclePaint: globalAndroid.graphics.Paint;
						public mValueLinePaint: globalAndroid.graphics.Paint;
						public mDrawBitmap: java.lang.ref.WeakReference<globalAndroid.graphics.Bitmap>;
						public mBitmapCanvas: globalAndroid.graphics.Canvas;
						public mDrawCenterTextPathBuffer: globalAndroid.graphics.Path;
						public mDrawHighlightedRectF: globalAndroid.graphics.RectF;
						public getPaintHole(): globalAndroid.graphics.Paint;
						public drawRoundedSlices(param0: globalAndroid.graphics.Canvas): void;
						public calculateMinimumRadiusForSpacedSlice(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
						public drawEntryLabel(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number): void;
						public drawCenterText(param0: globalAndroid.graphics.Canvas): void;
						public releaseBitmap(): void;
						public constructor(param0: com.github.mikephil.charting.charts.PieChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public getSliceSpace(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): number;
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public getPaintCenterText(): globalAndroid.text.TextPaint;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public getPaintEntryLabels(): globalAndroid.graphics.Paint;
						public drawHole(param0: globalAndroid.graphics.Canvas): void;
						public getPaintTransparentCircle(): globalAndroid.graphics.Paint;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class RadarChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.RadarChartRenderer>;
						public mChart: com.github.mikephil.charting.charts.RadarChart;
						public mWebPaint: globalAndroid.graphics.Paint;
						public mHighlightCirclePaint: globalAndroid.graphics.Paint;
						public mDrawDataSetSurfacePathBuffer: globalAndroid.graphics.Path;
						public mDrawHighlightCirclePathBuffer: globalAndroid.graphics.Path;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawWeb(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.charts.RadarChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public drawHighlightCircle(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.utils.MPPointF, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IRadarDataSet, param2: number): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public getWebPaint(): globalAndroid.graphics.Paint;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class Renderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.Renderer>;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class ScatterChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.ScatterChartRenderer>;
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider;
						public drawValues(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawData(param0: globalAndroid.graphics.Canvas): void;
						public drawExtras(param0: globalAndroid.graphics.Canvas): void;
						public drawDataSet(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawHighlighted(param0: globalAndroid.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRenderer>;
						public mXAxis: com.github.mikephil.charting.components.XAxis;
						public mRenderGridLinesPath: globalAndroid.graphics.Path;
						public mRenderGridLinesBuffer: native.Array<number>;
						public mGridClippingRect: globalAndroid.graphics.RectF;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public mLimitLineClippingRect: globalAndroid.graphics.RectF;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public computeAxisValues(param0: number, param1: number): void;
						public getGridClippingRect(): globalAndroid.graphics.RectF;
						public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
						public setupGridPaint(): void;
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public renderGridLines(param0: globalAndroid.graphics.Canvas): void;
						public renderLimitLineLine(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.components.LimitLine, param2: native.Array<number>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public computeSize(): void;
						public drawLabels(param0: globalAndroid.graphics.Canvas, param1: number, param2: com.github.mikephil.charting.utils.MPPointF): void;
						public renderLimitLineLabel(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.components.LimitLine, param2: native.Array<number>, param3: number): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawLabel(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: com.github.mikephil.charting.utils.MPPointF, param5: number): void;
						public drawGridLine(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: globalAndroid.graphics.Path): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRendererHorizontalBarChart>;
						public mChart: com.github.mikephil.charting.charts.BarChart;
						public mRenderLimitLinesPathBuffer: globalAndroid.graphics.Path;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public getGridClippingRect(): globalAndroid.graphics.RectF;
						public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public drawGridLine(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: globalAndroid.graphics.Path): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.charts.BarChart);
						public computeSize(): void;
						public drawLabels(param0: globalAndroid.graphics.Canvas, param1: number, param2: com.github.mikephil.charting.utils.MPPointF): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRendererRadarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.XAxisRendererRadarChart>;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.charts.RadarChart);
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRenderer>;
						public mYAxis: com.github.mikephil.charting.components.YAxis;
						public mZeroLinePaint: globalAndroid.graphics.Paint;
						public mRenderGridLinesPath: globalAndroid.graphics.Path;
						public mGridClippingRect: globalAndroid.graphics.RectF;
						public mGetTransformedPositionsBuffer: native.Array<number>;
						public mDrawZeroLinePath: globalAndroid.graphics.Path;
						public mZeroLineClippingRect: globalAndroid.graphics.RectF;
						public mRenderLimitLines: globalAndroid.graphics.Path;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public mLimitLineClippingRect: globalAndroid.graphics.RectF;
						public getGridClippingRect(): globalAndroid.graphics.RectF;
						public drawZeroLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public renderGridLines(param0: globalAndroid.graphics.Canvas): void;
						public linePath(param0: globalAndroid.graphics.Path, param1: number, param2: native.Array<number>): globalAndroid.graphics.Path;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawYLabels(param0: globalAndroid.graphics.Canvas, param1: number, param2: native.Array<number>, param3: number): void;
						public getTransformedPositions(): native.Array<number>;
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRendererHorizontalBarChart>;
						public mDrawZeroLinePathBuffer: globalAndroid.graphics.Path;
						public mRenderLimitLinesPathBuffer: globalAndroid.graphics.Path;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public getGridClippingRect(): globalAndroid.graphics.RectF;
						public drawZeroLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLine(param0: globalAndroid.graphics.Canvas): void;
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public linePath(param0: globalAndroid.graphics.Path, param1: number, param2: native.Array<number>): globalAndroid.graphics.Path;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawYLabels(param0: globalAndroid.graphics.Canvas, param1: number, param2: native.Array<number>, param3: number): void;
						public getTransformedPositions(): native.Array<number>;
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRendererRadarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
						public static class: java.lang.Class<com.github.mikephil.charting.renderer.YAxisRendererRadarChart>;
						public computeAxisValues(param0: number, param1: number): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.charts.RadarChart);
						public renderAxisLabels(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public renderLimitLines(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class ChevronDownShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.ChevronDownShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class ChevronUpShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.ChevronUpShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class CircleShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.CircleShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class CrossShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.CrossShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.IShapeRenderer>;
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.renderer.scatter.IShapeRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
							});
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class SquareShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.SquareShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class TriangleShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.TriangleShapeRenderer>;
							public mTrianglePathBuffer: globalAndroid.graphics.Path;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class XShapeRenderer extends com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public static class: java.lang.Class<com.github.mikephil.charting.renderer.scatter.XShapeRenderer>;
							public constructor();
							public renderShape(param0: globalAndroid.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ColorTemplate {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.ColorTemplate>;
						public static COLOR_NONE: number;
						public static COLOR_SKIP: number;
						public static LIBERTY_COLORS: native.Array<number>;
						public static JOYFUL_COLORS: native.Array<number>;
						public static PASTEL_COLORS: native.Array<number>;
						public static COLORFUL_COLORS: native.Array<number>;
						public static VORDIPLOM_COLORS: native.Array<number>;
						public static MATERIAL_COLORS: native.Array<number>;
						public static createColors(param0: native.Array<number>): java.util.List<java.lang.Integer>;
						public constructor();
						public static rgb(param0: string): number;
						public static getHoloBlue(): number;
						public static colorWithAlpha(param0: number, param1: number): number;
						public static createColors(param0: globalAndroid.content.res.Resources, param1: native.Array<number>): java.util.List<java.lang.Integer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class EntryXComparator extends java.util.Comparator<com.github.mikephil.charting.data.Entry> {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.EntryXComparator>;
						public constructor();
						public compare(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.data.Entry): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class FSize extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.FSize>;
						public width: number;
						public height: number;
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.FSize;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static recycleInstances(param0: java.util.List<com.github.mikephil.charting.utils.FSize>): void;
						public constructor(param0: number, param1: number);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public toString(): string;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.FSize): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class FileUtils {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.FileUtils>;
						public constructor();
						public static saveToSdCard(param0: java.util.List<com.github.mikephil.charting.data.Entry>, param1: string): void;
						public static loadEntriesFromAssets(param0: globalAndroid.content.res.AssetManager, param1: string): java.util.List<com.github.mikephil.charting.data.Entry>;
						public static loadEntriesFromFile(param0: string): java.util.List<com.github.mikephil.charting.data.Entry>;
						public static loadBarEntriesFromAssets(param0: globalAndroid.content.res.AssetManager, param1: string): java.util.List<com.github.mikephil.charting.data.BarEntry>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class HorizontalViewPortHandler extends com.github.mikephil.charting.utils.ViewPortHandler {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.HorizontalViewPortHandler>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class MPPointD extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.MPPointD>;
						public x: number;
						public y: number;
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.MPPointD): void;
						public static recycleInstances(param0: java.util.List<com.github.mikephil.charting.utils.MPPointD>): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class MPPointF extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.MPPointF>;
						public x: number;
						public y: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.github.mikephil.charting.utils.MPPointF>;
						public constructor();
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public getX(): number;
						public static getInstance(): com.github.mikephil.charting.utils.MPPointF;
						public getY(): number;
						public static recycleInstances(param0: java.util.List<com.github.mikephil.charting.utils.MPPointF>): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.MPPointF): com.github.mikephil.charting.utils.MPPointF;
						public my_readFromParcel(param0: globalAndroid.os.Parcel): void;
						public constructor(param0: number, param1: number);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.MPPointF): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ObjectPool<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.ObjectPool<any>>;
						public static create(param0: number, param1: com.github.mikephil.charting.utils.ObjectPool.Poolable): com.github.mikephil.charting.utils.ObjectPool<any>;
						public get(): T;
						public getPoolId(): number;
						public recycle(param0: T): void;
						public getReplenishPercentage(): number;
						public recycle(param0: java.util.List<T>): void;
						public setReplenishPercentage(param0: number): void;
						public getPoolCapacity(): number;
						public getPoolCount(): number;
					}
					export module ObjectPool {
						export abstract class Poolable {
							public static class: java.lang.Class<com.github.mikephil.charting.utils.ObjectPool.Poolable>;
							public static NO_OWNER: number;
							public constructor();
							public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class Transformer {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.Transformer>;
						public mMatrixValueToPx: globalAndroid.graphics.Matrix;
						public mMatrixOffset: globalAndroid.graphics.Matrix;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public valuePointsForGenerateTransformedValuesScatter: native.Array<number>;
						public valuePointsForGenerateTransformedValuesBubble: native.Array<number>;
						public valuePointsForGenerateTransformedValuesLine: native.Array<number>;
						public valuePointsForGenerateTransformedValuesCandle: native.Array<number>;
						public mPixelToValueMatrixBuffer: globalAndroid.graphics.Matrix;
						public generateTransformedValuesScatter(param0: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public rectToPixelPhase(param0: globalAndroid.graphics.RectF, param1: number): void;
						public getValueMatrix(): globalAndroid.graphics.Matrix;
						public generateTransformedValuesLine(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public pathValueToPixel(param0: globalAndroid.graphics.Path): void;
						public rectValueToPixelHorizontal(param0: globalAndroid.graphics.RectF): void;
						public rectValuesToPixel(param0: java.util.List<globalAndroid.graphics.RectF>): void;
						public getValueToPixelMatrix(): globalAndroid.graphics.Matrix;
						public getValuesByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public pointValuesToPixel(param0: native.Array<number>): void;
						public rectValueToPixel(param0: globalAndroid.graphics.RectF): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public pathValuesToPixel(param0: java.util.List<globalAndroid.graphics.Path>): void;
						public prepareMatrixOffset(param0: boolean): void;
						public generateTransformedValuesCandle(param0: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public getPixelToValueMatrix(): globalAndroid.graphics.Matrix;
						public rectValueToPixelHorizontal(param0: globalAndroid.graphics.RectF, param1: number): void;
						public rectToPixelPhaseHorizontal(param0: globalAndroid.graphics.RectF, param1: number): void;
						public prepareMatrixValuePx(param0: number, param1: number, param2: number, param3: number): void;
						public generateTransformedValuesBubble(param0: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet, param1: number, param2: number, param3: number): native.Array<number>;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.utils.MPPointD): void;
						public getOffsetMatrix(): globalAndroid.graphics.Matrix;
						public getPixelForValues(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public pixelsToValue(param0: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class TransformerHorizontalBarChart extends com.github.mikephil.charting.utils.Transformer {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.TransformerHorizontalBarChart>;
						public prepareMatrixOffset(param0: boolean): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export abstract class Utils {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.Utils>;
						public static DEG2RAD: number;
						public static FDEG2RAD: number;
						public static DOUBLE_EPSILON: number;
						public static FLOAT_EPSILON: number;
						public static getMinimumFlingVelocity(): number;
						public static formatNumber(param0: number, param1: number, param2: boolean, param3: string): string;
						public static getLineSpacing(param0: globalAndroid.graphics.Paint, param1: globalAndroid.graphics.Paint.FontMetrics): number;
						public static getSizeOfRotatedRectangleByRadians(param0: number, param1: number, param2: number): com.github.mikephil.charting.utils.FSize;
						public static convertIntegers(param0: java.util.List<java.lang.Integer>): native.Array<number>;
						public static roundToNextSignificant(param0: number): number;
						public static postInvalidateOnAnimation(param0: globalAndroid.view.View): void;
						public static nextUp(param0: number): number;
						public static getSizeOfRotatedRectangleByRadians(param0: com.github.mikephil.charting.utils.FSize, param1: number): com.github.mikephil.charting.utils.FSize;
						public static drawMultilineText(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: globalAndroid.text.TextPaint, param5: com.github.mikephil.charting.utils.FSize, param6: com.github.mikephil.charting.utils.MPPointF, param7: number): void;
						public static convertDpToPixel(param0: number): number;
						public static copyStrings(param0: java.util.List<string>, param1: native.Array<string>): void;
						public static calcTextSize(param0: globalAndroid.graphics.Paint, param1: string): com.github.mikephil.charting.utils.FSize;
						public static copyIntegers(param0: java.util.List<java.lang.Integer>, param1: native.Array<number>): void;
						public static formatNumber(param0: number, param1: number, param2: boolean): string;
						public static calcTextSize(param0: globalAndroid.graphics.Paint, param1: string, param2: com.github.mikephil.charting.utils.FSize): void;
						public static getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public static getLineHeight(param0: globalAndroid.graphics.Paint): number;
						public static getNormalizedAngle(param0: number): number;
						public static convertPixelsToDp(param0: number): number;
						public static drawImage(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.drawable.Drawable, param2: number, param3: number, param4: number, param5: number): void;
						public constructor();
						public static getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: com.github.mikephil.charting.utils.MPPointF): void;
						public static convertStrings(param0: java.util.List<string>): native.Array<string>;
						public static getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number): com.github.mikephil.charting.utils.MPPointF;
						public static calcTextHeight(param0: globalAndroid.graphics.Paint, param1: string): number;
						public static getSizeOfRotatedRectangleByDegrees(param0: number, param1: number, param2: number): com.github.mikephil.charting.utils.FSize;
						public static getLineHeight(param0: globalAndroid.graphics.Paint, param1: globalAndroid.graphics.Paint.FontMetrics): number;
						public static getLineSpacing(param0: globalAndroid.graphics.Paint): number;
						public static getMaximumFlingVelocity(): number;
						public static getSDKInt(): number;
						public static calcTextWidth(param0: globalAndroid.graphics.Paint, param1: string): number;
						public static velocityTrackerPointerUpCleanUpIfNecessary(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.VelocityTracker): void;
						public static init(param0: globalAndroid.content.res.Resources): void;
						public static drawXAxisValue(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint, param5: com.github.mikephil.charting.utils.MPPointF, param6: number): void;
						public static getDecimals(param0: number): number;
						public static drawMultilineText(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.text.StaticLayout, param2: number, param3: number, param4: globalAndroid.text.TextPaint, param5: com.github.mikephil.charting.utils.MPPointF, param6: number): void;
						public static getSizeOfRotatedRectangleByDegrees(param0: com.github.mikephil.charting.utils.FSize, param1: number): com.github.mikephil.charting.utils.FSize;
						public static init(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ViewPortHandler {
						public static class: java.lang.Class<com.github.mikephil.charting.utils.ViewPortHandler>;
						public mMatrixTouch: globalAndroid.graphics.Matrix;
						public mContentRect: globalAndroid.graphics.RectF;
						public mChartWidth: number;
						public mChartHeight: number;
						public valsBufferForFitScreen: native.Array<number>;
						public mCenterViewPortMatrixBuffer: globalAndroid.graphics.Matrix;
						public matrixBuffer: native.Array<number>;
						public zoomIn(param0: number, param1: number): globalAndroid.graphics.Matrix;
						public setDragOffsetX(param0: number): void;
						public zoom(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Matrix;
						public resetZoom(param0: globalAndroid.graphics.Matrix): void;
						public getMatrixTouch(): globalAndroid.graphics.Matrix;
						public getMinScaleY(): number;
						public contentTop(): number;
						public centerViewPort(param0: native.Array<number>, param1: globalAndroid.view.View): void;
						public contentRight(): number;
						public setMinMaxScaleY(param0: number, param1: number): void;
						public isFullyZoomedOutY(): boolean;
						public getScaleY(): number;
						public fitScreen(param0: globalAndroid.graphics.Matrix): void;
						public setMaximumScaleX(param0: number): void;
						public offsetLeft(): number;
						public zoom(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Matrix): void;
						public contentLeft(): number;
						public getContentRect(): globalAndroid.graphics.RectF;
						public constructor();
						public isInBoundsTop(param0: number): boolean;
						public refresh(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.view.View, param2: boolean): globalAndroid.graphics.Matrix;
						public isInBoundsX(param0: number): boolean;
						public isFullyZoomedOutX(): boolean;
						public getChartWidth(): number;
						public isInBounds(param0: number, param1: number): boolean;
						public zoom(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): void;
						public isInBoundsLeft(param0: number): boolean;
						public getContentCenter(): com.github.mikephil.charting.utils.MPPointF;
						public setZoom(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): void;
						public setZoom(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Matrix;
						public setMaximumScaleY(param0: number): void;
						public offsetRight(): number;
						public offsetTop(): number;
						public isInBoundsY(param0: number): boolean;
						public setMinimumScaleX(param0: number): void;
						public hasChartDimens(): boolean;
						public zoomOut(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): void;
						public limitTransAndScale(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.RectF): void;
						public isInBoundsRight(param0: number): boolean;
						public fitScreen(): globalAndroid.graphics.Matrix;
						public getSmallestContentExtension(): number;
						public zoom(param0: number, param1: number): globalAndroid.graphics.Matrix;
						public zoomIn(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): void;
						public zoomOut(param0: number, param1: number): globalAndroid.graphics.Matrix;
						public getMaxScaleY(): number;
						public setMinMaxScaleX(param0: number, param1: number): void;
						public translate(param0: native.Array<number>, param1: globalAndroid.graphics.Matrix): void;
						public getTransY(): number;
						public setMinimumScaleY(param0: number): void;
						public offsetBottom(): number;
						public translate(param0: native.Array<number>): globalAndroid.graphics.Matrix;
						public getScaleX(): number;
						public contentBottom(): number;
						public setChartDimens(param0: number, param1: number): void;
						public getTransX(): number;
						public getMaxScaleX(): number;
						public getChartHeight(): number;
						public setZoom(param0: number, param1: number): globalAndroid.graphics.Matrix;
						public isFullyZoomedOut(): boolean;
						public canZoomInMoreY(): boolean;
						public restrainViewPort(param0: number, param1: number, param2: number, param3: number): void;
						public contentWidth(): number;
						public canZoomInMoreX(): boolean;
						public isInBoundsBottom(param0: number): boolean;
						public hasNoDragOffset(): boolean;
						public contentHeight(): number;
						public setDragOffsetY(param0: number): void;
						public canZoomOutMoreY(): boolean;
						public getMinScaleX(): number;
						public canZoomOutMoreX(): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.github.mikephil.charting.buffer.AbstractBuffer:1
//com.github.mikephil.charting.charts.BarLineChartBase:1
//com.github.mikephil.charting.charts.Chart:1
//com.github.mikephil.charting.charts.PieRadarChartBase:1
//com.github.mikephil.charting.data.BarLineScatterCandleBubbleData:1
//com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet:1
//com.github.mikephil.charting.data.BaseDataSet:1
//com.github.mikephil.charting.data.ChartData:1
//com.github.mikephil.charting.data.DataSet:1
//com.github.mikephil.charting.data.LineRadarDataSet:1
//com.github.mikephil.charting.data.LineScatterCandleRadarDataSet:1
//com.github.mikephil.charting.highlight.ChartHighlighter:1
//com.github.mikephil.charting.highlight.PieRadarHighlighter:1
//com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet:1
//com.github.mikephil.charting.interfaces.datasets.IDataSet:1
//com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet:1
//com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet:1
//com.github.mikephil.charting.listener.ChartTouchListener:1
//com.github.mikephil.charting.utils.ObjectPool:1

