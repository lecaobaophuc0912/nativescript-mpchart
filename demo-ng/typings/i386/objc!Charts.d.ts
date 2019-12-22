
declare class AnimatedMoveViewJob extends AnimatedViewPortJob {

	static alloc(): AnimatedMoveViewJob; // inherited from NSObject

	static new(): AnimatedMoveViewJob; // inherited from NSObject
}

declare class AnimatedViewPortJob extends ChartViewPortJob {

	static alloc(): AnimatedViewPortJob; // inherited from NSObject

	static new(): AnimatedViewPortJob; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; xValue: number; yValue: number; transformer: ChartTransformer; view: ChartViewBase; xOrigin: number; yOrigin: number; duration: number; easing: (p1: number, p2: number) => number; });

	initWithViewPortHandlerXValueYValueTransformerViewXOriginYOriginDurationEasing(viewPortHandler: ChartViewPortHandler, xValue: number, yValue: number, transformer: ChartTransformer, view: ChartViewBase, xOrigin: number, yOrigin: number, duration: number, easing: (p1: number, p2: number) => number): this;

	start(): void;

	stopWithFinish(finish: boolean): void;
}

declare class AnimatedZoomViewJob extends AnimatedViewPortJob {

	static alloc(): AnimatedZoomViewJob; // inherited from NSObject

	static new(): AnimatedZoomViewJob; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; transformer: ChartTransformer; view: ChartViewBase; yAxis: ChartYAxis; xAxisRange: number; scaleX: number; scaleY: number; xOrigin: number; yOrigin: number; zoomCenterX: number; zoomCenterY: number; zoomOriginX: number; zoomOriginY: number; duration: number; easing: (p1: number, p2: number) => number; });

	initWithViewPortHandlerTransformerViewYAxisXAxisRangeScaleXScaleYXOriginYOriginZoomCenterXZoomCenterYZoomOriginXZoomOriginYDurationEasing(viewPortHandler: ChartViewPortHandler, transformer: ChartTransformer, view: ChartViewBase, yAxis: ChartYAxis, xAxisRange: number, scaleX: number, scaleY: number, xOrigin: number, yOrigin: number, zoomCenterX: number, zoomCenterY: number, zoomOriginX: number, zoomOriginY: number, duration: number, easing: (p1: number, p2: number) => number): this;
}

declare const enum AxisDependency {

	Left = 0,

	Right = 1
}

declare class BarChartData extends BarLineScatterCandleBubbleChartData {

	static alloc(): BarChartData; // inherited from NSObject

	static new(): BarChartData; // inherited from NSObject

	barWidth: number;

	groupBarsFromXGroupSpaceBarSpace(fromX: number, groupSpace: number, barSpace: number): void;

	groupWidthWithGroupSpaceBarSpace(groupSpace: number, barSpace: number): number;
}

declare class BarChartDataEntry extends ChartDataEntry {

	static alloc(): BarChartDataEntry; // inherited from NSObject

	static new(): BarChartDataEntry; // inherited from NSObject

	readonly isStacked: boolean;

	readonly negativeSum: number;

	readonly positiveSum: number;

	readonly ranges: NSArray<ChartRange>;

	yValues: NSArray<number>;

	constructor(o: { x: number; yValues: NSArray<number> | number[]; });

	constructor(o: { x: number; yValues: NSArray<number> | number[]; data: any; });

	constructor(o: { x: number; yValues: NSArray<number> | number[]; icon: UIImage; });

	constructor(o: { x: number; yValues: NSArray<number> | number[]; icon: UIImage; data: any; });

	calcPosNegSum(): void;

	calcRanges(): void;

	initWithXYValues(x: number, yValues: NSArray<number> | number[]): this;

	initWithXYValuesData(x: number, yValues: NSArray<number> | number[], data: any): this;

	initWithXYValuesIcon(x: number, yValues: NSArray<number> | number[], icon: UIImage): this;

	initWithXYValuesIconData(x: number, yValues: NSArray<number> | number[], icon: UIImage, data: any): this;

	sumBelowStackIndex(stackIndex: number): number;
}

interface BarChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {

	barData: BarChartData;

	isDrawBarShadowEnabled: boolean;

	isDrawValueAboveBarEnabled: boolean;

	isHighlightFullBarEnabled: boolean;
}
declare var BarChartDataProvider: {

	prototype: BarChartDataProvider;
};

declare class BarChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements IBarChartDataSet {

	static alloc(): BarChartDataSet; // inherited from NSObject

	static new(): BarChartDataSet; // inherited from NSObject

	readonly entryCountStacks: number;

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	barBorderColor: UIColor; // inherited from IBarChartDataSet

	barBorderWidth: number; // inherited from IBarChartDataSet

	barShadowColor: UIColor; // inherited from IBarChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightAlpha: number; // inherited from IBarChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isStacked: boolean; // inherited from IBarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	stackLabels: NSArray<string>; // inherited from IBarChartDataSet

	readonly stackSize: number; // inherited from IBarChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	valueTextColorAt(index: number): UIColor;
}

declare class BarChartFormatter extends NSObject implements IChartAxisValueFormatter {

	static alloc(): BarChartFormatter; // inherited from NSObject

	static new(): BarChartFormatter; // inherited from NSObject

	stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class BarChartHighlighter extends ChartHighlighter {

	static alloc(): BarChartHighlighter; // inherited from NSObject

	static new(): BarChartHighlighter; // inherited from NSObject

	getClosestStackIndexWithRangesValue(ranges: NSArray<ChartRange> | ChartRange[], value: number): number;

	getStackedHighlightWithHighSetXValueYValue(high: ChartHighlight, set: IBarChartDataSet, xValue: number, yValue: number): ChartHighlight;
}

declare class BarChartRenderer extends BarLineScatterCandleBubbleChartRenderer {

	static alloc(): BarChartRenderer; // inherited from NSObject

	static new(): BarChartRenderer; // inherited from NSObject

	dataProvider: BarChartDataProvider;

	constructor(o: { dataProvider: BarChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawDataSetWithContextDataSetIndex(context: any, dataSet: IBarChartDataSet, index: number): void;

	drawValueWithContextValueXPosYPosFontAlignColor(context: any, value: string, xPos: number, yPos: number, font: UIFont, align: NSTextAlignment, color: UIColor): void;

	initWithDataProviderAnimatorViewPortHandler(dataProvider: BarChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class BarChartView extends BarLineChartViewBase implements BarChartDataProvider {

	static alloc(): BarChartView; // inherited from NSObject

	static appearance(): BarChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BarChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BarChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BarChartView; // inherited from UIAppearance

	static new(): BarChartView; // inherited from NSObject

	drawBarShadowEnabled: boolean;

	drawValueAboveBarEnabled: boolean;

	fitBars: boolean;

	highlightFullBarEnabled: boolean;

	readonly barData: BarChartData; // inherited from BarChartDataProvider

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly isDrawBarShadowEnabled: boolean; // inherited from BarChartDataProvider

	readonly isDrawValueAboveBarEnabled: boolean; // inherited from BarChartDataProvider

	readonly isHighlightFullBarEnabled: boolean; // inherited from BarChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getBarBoundsWithEntry(e: BarChartDataEntry): CGRect;

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	groupBarsFromXGroupSpaceBarSpace(fromX: number, groupSpace: number, barSpace: number): void;

	highlightValueWithXDataSetIndexStackIndex(x: number, dataSetIndex: number, stackIndex: number): void;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class BarLineChartViewBase extends ChartViewBase implements BarLineScatterCandleBubbleChartDataProvider, UIGestureRecognizerDelegate {

	static alloc(): BarLineChartViewBase; // inherited from NSObject

	static appearance(): BarLineChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BarLineChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BarLineChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BarLineChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BarLineChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BarLineChartViewBase; // inherited from UIAppearance

	static new(): BarLineChartViewBase; // inherited from NSObject

	autoScaleMinMaxEnabled: boolean;

	borderColor: UIColor;

	borderLineWidth: number;

	clipDataToContentEnabled: boolean;

	clipValuesToContentEnabled: boolean;

	doubleTapToZoomEnabled: boolean;

	dragEnabled: boolean;

	dragXEnabled: boolean;

	dragYEnabled: boolean;

	drawBordersEnabled: boolean;

	drawGridBackgroundEnabled: boolean;

	gridBackgroundColor: UIColor;

	readonly hasNoDragOffset: boolean;

	highlightPerDragEnabled: boolean;

	readonly isAnyAxisInverted: boolean;

	readonly isAutoScaleMinMaxEnabled: boolean;

	readonly isDoubleTapToZoomEnabled: boolean;

	readonly isDragEnabled: boolean;

	readonly isDrawBordersEnabled: boolean;

	readonly isDrawGridBackgroundEnabled: boolean;

	readonly isFullyZoomedOut: boolean;

	readonly isHighlightPerDragEnabled: boolean;

	readonly isPinchZoomEnabled: boolean;

	readonly isScaleXEnabled: boolean;

	readonly isScaleYEnabled: boolean;

	keepPositionOnRotation: boolean;

	readonly leftAxis: ChartYAxis;

	leftYAxisRenderer: ChartYAxisRenderer;

	maxVisibleCount: number;

	minOffset: number;

	pinchZoomEnabled: boolean;

	readonly rightAxis: ChartYAxis;

	rightYAxisRenderer: ChartYAxisRenderer;

	readonly scaleX: number;

	scaleXEnabled: boolean;

	readonly scaleY: number;

	scaleYEnabled: boolean;

	readonly visibleXRange: number;

	xAxisRenderer: ChartXAxisRenderer;

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly xRange: number; // inherited from ChartDataProvider

	readonly  // inherited from NSObjectProtocol

	centerViewToAnimatedWithXValueYValueAxisDuration(xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

	centerViewToAnimatedWithXValueYValueAxisDurationEasing(xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

	centerViewToAnimatedWithXValueYValueAxisDurationEasingOption(xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

	centerViewToXValueYValueAxis(xValue: number, yValue: number, axis: AxisDependency): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fitScreen(): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	getAxis(axis: AxisDependency): ChartYAxis;

	getAxisRangeWithAxis(axis: AxisDependency): number;

	getDataSetByTouchPointWithPoint(pt: CGPoint): IBarLineScatterCandleBubbleChartDataSet;

	getEntryByTouchPointWithPoint(pt: CGPoint): ChartDataEntry;

	getPositionWithEntryAxis(e: ChartDataEntry, axis: AxisDependency): CGPoint;

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	getYAxisMaxWidth(axis: AxisDependency): number;

	getYAxisMinWidth(axis: AxisDependency): number;

	getYAxisWidth(axis: AxisDependency): number;

	isEqual(object: any): boolean;

	isInvertedWithAxis(axis: AxisDependency): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	moveViewToAnimatedWithXValueYValueAxisDuration(xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

	moveViewToAnimatedWithXValueYValueAxisDurationEasing(xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

	moveViewToAnimatedWithXValueYValueAxisDurationEasingOption(xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

	moveViewToX(xValue: number): void;

	moveViewToXValueYValueAxis(xValue: number, yValue: number, axis: AxisDependency): void;

	moveViewToYAxis(yValue: number, axis: AxisDependency): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pixelForValuesWithXYAxis(x: number, y: number, axis: AxisDependency): CGPoint;

	resetViewPortOffsets(): void;

	resetZoom(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setDragOffsetX(offset: number): void;

	setDragOffsetY(offset: number): void;

	setScaleEnabled(enabled: boolean): void;

	setScaleMinimaScaleY(scaleX: number, scaleY: number): void;

	setViewPortOffsetsWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): void;

	setVisibleXRangeMaximum(maxXRange: number): void;

	setVisibleXRangeMinimum(minXRange: number): void;

	setVisibleXRangeWithMinXRangeMaxXRange(minXRange: number, maxXRange: number): void;

	setVisibleYRangeMaximumAxis(maxYRange: number, axis: AxisDependency): void;

	setVisibleYRangeMinimumAxis(minYRange: number, axis: AxisDependency): void;

	setVisibleYRangeWithMinYRangeMaxYRangeAxis(minYRange: number, maxYRange: number, axis: AxisDependency): void;

	setYAxisMaxWidthWidth(axis: AxisDependency, width: number): void;

	setYAxisMinWidthWidth(axis: AxisDependency, width: number): void;

	stopDeceleration(): void;

	valueForTouchPointWithPointAxis(pt: CGPoint, axis: AxisDependency): CGPoint;

	zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDuration(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number): void;

	zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDurationEasing(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number, easing: (p1: number, p2: number) => number): void;

	zoomAndCenterViewAnimatedWithScaleXScaleYXValueYValueAxisDurationEasingOption(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency, duration: number, easingOption: ChartEasingOption): void;

	zoomIn(): void;

	zoomOut(): void;

	zoomToCenterWithScaleXScaleY(scaleX: number, scaleY: number): void;

	zoomWithScaleXScaleYXValueYValueAxis(scaleX: number, scaleY: number, xValue: number, yValue: number, axis: AxisDependency): void;

	zoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): void;
}

declare class BarLineScatterCandleBubbleChartData extends ChartData {

	static alloc(): BarLineScatterCandleBubbleChartData; // inherited from NSObject

	static new(): BarLineScatterCandleBubbleChartData; // inherited from NSObject
}

interface BarLineScatterCandleBubbleChartDataProvider extends ChartDataProvider {

	highestVisibleX: number;

	lowestVisibleX: number;

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}
declare var BarLineScatterCandleBubbleChartDataProvider: {

	prototype: BarLineScatterCandleBubbleChartDataProvider;
};

declare class BarLineScatterCandleBubbleChartDataSet extends ChartDataSet implements IBarLineScatterCandleBubbleChartDataSet {

	static alloc(): BarLineScatterCandleBubbleChartDataSet; // inherited from NSObject

	static new(): BarLineScatterCandleBubbleChartDataSet; // inherited from NSObject

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	valueTextColorAt(index: number): UIColor;
}

declare class BarLineScatterCandleBubbleChartRenderer extends ChartDataRendererBase {

	static alloc(): BarLineScatterCandleBubbleChartRenderer; // inherited from NSObject

	static new(): BarLineScatterCandleBubbleChartRenderer; // inherited from NSObject
}

declare class BubbleChartData extends BarLineScatterCandleBubbleChartData {

	static alloc(): BubbleChartData; // inherited from NSObject

	static new(): BubbleChartData; // inherited from NSObject

	setHighlightCircleWidth(width: number): void;
}

declare class BubbleChartDataEntry extends ChartDataEntry {

	static alloc(): BubbleChartDataEntry; // inherited from NSObject

	static new(): BubbleChartDataEntry; // inherited from NSObject

	size: number;

	constructor(o: { x: number; y: number; size: number; });

	constructor(o: { x: number; y: number; size: number; data: any; });

	constructor(o: { x: number; y: number; size: number; icon: UIImage; });

	constructor(o: { x: number; y: number; size: number; icon: UIImage; data: any; });

	initWithXYSize(x: number, y: number, size: number): this;

	initWithXYSizeData(x: number, y: number, size: number, data: any): this;

	initWithXYSizeIcon(x: number, y: number, size: number, icon: UIImage): this;

	initWithXYSizeIconData(x: number, y: number, size: number, icon: UIImage, data: any): this;
}

interface BubbleChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {

	bubbleData: BubbleChartData;
}
declare var BubbleChartDataProvider: {

	prototype: BubbleChartDataProvider;
};

declare class BubbleChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements IBubbleChartDataSet {

	static alloc(): BubbleChartDataSet; // inherited from NSObject

	static new(): BubbleChartDataSet; // inherited from NSObject

	normalizeSizeEnabled: boolean;

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightCircleWidth: number; // inherited from IBubbleChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isNormalizeSizeEnabled: boolean; // inherited from IBubbleChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly maxSize: number; // inherited from IBubbleChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	valueTextColorAt(index: number): UIColor;
}

declare class BubbleChartRenderer extends BarLineScatterCandleBubbleChartRenderer {

	static alloc(): BubbleChartRenderer; // inherited from NSObject

	static new(): BubbleChartRenderer; // inherited from NSObject

	dataProvider: BubbleChartDataProvider;

	constructor(o: { dataProvider: BubbleChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawDataSetWithContextDataSetDataSetIndex(context: any, dataSet: IBubbleChartDataSet, dataSetIndex: number): void;

	initWithDataProviderAnimatorViewPortHandler(dataProvider: BubbleChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class BubbleChartView extends BarLineChartViewBase implements BubbleChartDataProvider {

	static alloc(): BubbleChartView; // inherited from NSObject

	static appearance(): BubbleChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BubbleChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BubbleChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BubbleChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BubbleChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BubbleChartView; // inherited from UIAppearance

	static new(): BubbleChartView; // inherited from NSObject

	readonly bubbleData: BubbleChartData; // inherited from BubbleChartDataProvider

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class CandleChartData extends BarLineScatterCandleBubbleChartData {

	static alloc(): CandleChartData; // inherited from NSObject

	static new(): CandleChartData; // inherited from NSObject
}

declare class CandleChartDataEntry extends ChartDataEntry {

	static alloc(): CandleChartDataEntry; // inherited from NSObject

	static new(): CandleChartDataEntry; // inherited from NSObject

	readonly bodyRange: number;

	close: number;

	high: number;

	low: number;

	open: number;

	readonly shadowRange: number;

	constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; });

	constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; data: any; });

	constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; icon: UIImage; });

	constructor(o: { x: number; shadowH: number; shadowL: number; open: number; close: number; icon: UIImage; data: any; });

	initWithXShadowHShadowLOpenClose(x: number, shadowH: number, shadowL: number, open: number, close: number): this;

	initWithXShadowHShadowLOpenCloseData(x: number, shadowH: number, shadowL: number, open: number, close: number, data: any): this;

	initWithXShadowHShadowLOpenCloseIcon(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: UIImage): this;

	initWithXShadowHShadowLOpenCloseIconData(x: number, shadowH: number, shadowL: number, open: number, close: number, icon: UIImage, data: any): this;
}

interface CandleChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {

	candleData: CandleChartData;
}
declare var CandleChartDataProvider: {

	prototype: CandleChartDataProvider;
};

declare class CandleChartDataSet extends LineScatterCandleRadarChartDataSet implements ICandleChartDataSet {

	static alloc(): CandleChartDataSet; // inherited from NSObject

	static new(): CandleChartDataSet; // inherited from NSObject

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	barSpace: number; // inherited from ICandleChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	decreasingColor: UIColor; // inherited from ICandleChartDataSet

	decreasingFilled: boolean; // inherited from ICandleChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	increasingColor: UIColor; // inherited from ICandleChartDataSet

	increasingFilled: boolean; // inherited from ICandleChartDataSet

	readonly isDecreasingFilled: boolean; // inherited from ICandleChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isIncreasingFilled: boolean; // inherited from ICandleChartDataSet

	readonly isShadowColorSameAsCandle: boolean; // inherited from ICandleChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	neutralColor: UIColor; // inherited from ICandleChartDataSet

	shadowColor: UIColor; // inherited from ICandleChartDataSet

	shadowColorSameAsCandle: boolean; // inherited from ICandleChartDataSet

	shadowWidth: number; // inherited from ICandleChartDataSet

	showCandleBar: boolean; // inherited from ICandleChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	valueTextColorAt(index: number): UIColor;
}

declare class CandleStickChartRenderer extends LineScatterCandleRadarChartRenderer {

	static alloc(): CandleStickChartRenderer; // inherited from NSObject

	static new(): CandleStickChartRenderer; // inherited from NSObject

	dataProvider: CandleChartDataProvider;

	constructor(o: { dataProvider: CandleChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawDataSetWithContextDataSet(context: any, dataSet: ICandleChartDataSet): void;

	initWithDataProviderAnimatorViewPortHandler(dataProvider: CandleChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class CandleStickChartView extends BarLineChartViewBase implements CandleChartDataProvider {

	static alloc(): CandleStickChartView; // inherited from NSObject

	static appearance(): CandleStickChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CandleStickChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CandleStickChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CandleStickChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CandleStickChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CandleStickChartView; // inherited from UIAppearance

	static new(): CandleStickChartView; // inherited from NSObject

	readonly candleData: CandleChartData; // inherited from CandleChartDataProvider

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class ChartAnimator extends NSObject {

	static alloc(): ChartAnimator; // inherited from NSObject

	static new(): ChartAnimator; // inherited from NSObject

	delegate: ChartAnimatorDelegate;

	phaseX: number;

	phaseY: number;

	stopBlock: () => void;

	updateBlock: () => void;

	animateWithXAxisDurationEasing(xAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithXAxisDurationEasingOption(xAxisDuration: number, easingOption: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDurationEasing(xAxisDuration: number, yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithXAxisDurationYAxisDurationEasingOption(xAxisDuration: number, yAxisDuration: number, easingOption: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(xAxisDuration: number, yAxisDuration: number, easingOptionX: ChartEasingOption, easingOptionY: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDurationEasingXEasingY(xAxisDuration: number, yAxisDuration: number, easingX: (p1: number, p2: number) => number, easingY: (p1: number, p2: number) => number): void;

	animateWithYAxisDurationEasing(yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithYAxisDurationEasingOption(yAxisDuration: number, easingOption: ChartEasingOption): void;

	stop(): void;
}

interface ChartAnimatorDelegate {

	animatorStopped(animator: ChartAnimator): void;

	animatorUpdated(animator: ChartAnimator): void;
}
declare var ChartAnimatorDelegate: {

	prototype: ChartAnimatorDelegate;
};

declare class ChartAxisBase extends ChartComponentBase {

	static alloc(): ChartAxisBase; // inherited from NSObject

	static new(): ChartAxisBase; // inherited from NSObject

	axisLineColor: UIColor;

	axisLineDashLengths: NSArray<number>;

	axisLineDashPhase: number;

	axisLineWidth: number;

	axisMaxLabels: number;

	axisMaximum: number;

	axisMinLabels: number;

	axisMinimum: number;

	axisRange: number;

	centerAxisLabelsEnabled: boolean;

	centeredEntries: NSArray<number>;

	decimals: number;

	drawAxisLineEnabled: boolean;

	drawGridLinesEnabled: boolean;

	drawLabelsEnabled: boolean;

	drawLimitLinesBehindDataEnabled: boolean;

	entries: NSArray<number>;

	readonly entryCount: number;

	forceLabelsEnabled: boolean;

	granularity: number;

	granularityEnabled: boolean;

	gridAntialiasEnabled: boolean;

	gridColor: UIColor;

	gridLineCap: CGLineCap;

	gridLineDashLengths: NSArray<number>;

	gridLineDashPhase: number;

	gridLineWidth: number;

	readonly isAxisMaxCustom: boolean;

	readonly isAxisMinCustom: boolean;

	readonly isCenterAxisLabelsEnabled: boolean;

	readonly isDrawAxisLineEnabled: boolean;

	readonly isDrawGridLinesEnabled: boolean;

	readonly isDrawLabelsEnabled: boolean;

	readonly isDrawLimitLinesBehindDataEnabled: boolean;

	readonly isForceLabelsEnabled: boolean;

	readonly isGranularityEnabled: boolean;

	labelCount: number;

	labelFont: UIFont;

	labelTextColor: UIColor;

	readonly limitLines: NSArray<ChartLimitLine>;

	spaceMax: number;

	spaceMin: number;

	valueFormatter: IChartAxisValueFormatter;

	addLimitLine(line: ChartLimitLine): void;

	calculateWithMinMax(dataMin: number, dataMax: number): void;

	getFormattedLabel(index: number): string;

	getLongestLabel(): string;

	removeAllLimitLines(): void;

	removeLimitLine(line: ChartLimitLine): void;

	resetCustomAxisMax(): void;

	resetCustomAxisMin(): void;

	setLabelCountForce(count: number, force: boolean): void;
}

declare class ChartAxisRendererBase extends ChartRenderer {

	static alloc(): ChartAxisRendererBase; // inherited from NSObject

	static new(): ChartAxisRendererBase; // inherited from NSObject

	axis: ChartAxisBase;

	transformer: ChartTransformer;

	constructor(o: { viewPortHandler: ChartViewPortHandler; transformer: ChartTransformer; axis: ChartAxisBase; });

	computeAxisValuesWithMinMax(min: number, max: number): void;

	computeAxisWithMinMaxInverted(min: number, max: number, inverted: boolean): void;

	initWithViewPortHandlerTransformerAxis(viewPortHandler: ChartViewPortHandler, transformer: ChartTransformer, axis: ChartAxisBase): this;

	renderAxisLabelsWithContext(context: any): void;

	renderAxisLineWithContext(context: any): void;

	renderGridLinesWithContext(context: any): void;

	renderLimitLinesWithContext(context: any): void;
}

declare class ChartBaseDataSet extends NSObject implements IChartDataSet, NSCopying {

	static alloc(): ChartBaseDataSet; // inherited from NSObject

	static new(): ChartBaseDataSet; // inherited from NSObject

	axisDependency: AxisDependency;

	colors: NSArray<UIColor>;

	form: ChartLegendForm;

	formLineDashLengths: NSArray<number>;

	formLineDashPhase: number;

	formLineWidth: number;

	formSize: number;

	label: string;

	valueColors: NSArray<UIColor>;

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	constructor(o: { label: string; });

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	initWithLabel(label: string): this;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setColorAlpha(color: UIColor, alpha: number): void;

	setColorsAlpha(colors: NSArray<UIColor> | UIColor[], alpha: number): void;

	valueTextColorAt(index: number): UIColor;
}

declare class ChartColorTemplates extends NSObject {

	static alloc(): ChartColorTemplates; // inherited from NSObject

	static colorFromString(colorString: string): UIColor;

	static colorful(): NSArray<UIColor>;

	static joyful(): NSArray<UIColor>;

	static liberty(): NSArray<UIColor>;

	static material(): NSArray<UIColor>;

	static new(): ChartColorTemplates; // inherited from NSObject

	static pastel(): NSArray<UIColor>;

	static vordiplom(): NSArray<UIColor>;
}

declare class ChartComponentBase extends NSObject {

	static alloc(): ChartComponentBase; // inherited from NSObject

	static new(): ChartComponentBase; // inherited from NSObject

	enabled: boolean;

	readonly isEnabled: boolean;

	xOffset: number;

	yOffset: number;
}

declare class ChartData extends NSObject {

	static alloc(): ChartData; // inherited from NSObject

	static new(): ChartData; // inherited from NSObject

	accessibilityEntryLabelPrefix: string;

	accessibilityEntryLabelSuffix: string;

	accessibilityEntryLabelSuffixIsCount: boolean;

	readonly dataSetCount: number;

	dataSets: NSArray<IChartDataSet>;

	readonly entryCount: number;

	highlightEnabled: boolean;

	readonly isHighlightEnabled: boolean;

	readonly maxEntryCountSet: IChartDataSet;

	readonly xMax: number;

	readonly xMin: number;

	readonly yMax: number;

	readonly yMin: number;

	constructor(o: { dataSet: IChartDataSet; });

	constructor(o: { dataSets: NSArray<IChartDataSet> | IChartDataSet[]; });

	addDataSet(dataSet: IChartDataSet): void;

	addEntryDataSetIndex(e: ChartDataEntry, dataSetIndex: number): void;

	calcMinMax(): void;

	calcMinMaxWithDataSet(d: IChartDataSet): void;

	calcMinMaxWithEntryAxis(e: ChartDataEntry, axis: AxisDependency): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clearValues(): void;

	containsWithDataSet(dataSet: IChartDataSet): boolean;

	entryForHighlight(highlight: ChartHighlight): ChartDataEntry;

	getColors(): NSArray<UIColor>;

	getDataSetByIndex(index: number): IChartDataSet;

	getDataSetByLabelIgnorecase(label: string, ignorecase: boolean): IChartDataSet;

	getDataSetForEntry(e: ChartDataEntry): IChartDataSet;

	getFirstLeftWithDataSets(dataSets: NSArray<IChartDataSet> | IChartDataSet[]): IChartDataSet;

	getFirstRightWithDataSets(dataSets: NSArray<IChartDataSet> | IChartDataSet[]): IChartDataSet;

	getYMaxWithAxis(axis: AxisDependency): number;

	getYMinWithAxis(axis: AxisDependency): number;

	indexOfDataSet(dataSet: IChartDataSet): number;

	initWithDataSet(dataSet: IChartDataSet): this;

	initWithDataSets(dataSets: NSArray<IChartDataSet> | IChartDataSet[]): this;

	notifyDataChanged(): void;

	removeDataSet(dataSet: IChartDataSet): boolean;

	removeDataSetByIndex(index: number): boolean;

	removeEntryDataSetIndex(entry: ChartDataEntry, dataSetIndex: number): boolean;

	removeEntryWithXValueDataSetIndex(xValue: number, dataSetIndex: number): boolean;

	setDrawValues(enabled: boolean): void;

	setValueFont(font: UIFont): void;

	setValueFormatter(formatter: IChartValueFormatter): void;

	setValueTextColor(color: UIColor): void;
}

declare class ChartDataApproximator extends NSObject {

	static alloc(): ChartDataApproximator; // inherited from NSObject

	static new(): ChartDataApproximator; // inherited from NSObject

	static reduceWithDouglasPeukerNResultCount(points: NSArray<NSValue> | NSValue[], resultCount: number): NSArray<NSValue>;

	static reduceWithDouglasPeukerTolerance(points: NSArray<NSValue> | NSValue[], tolerance: number): NSArray<NSValue>;
}

declare class ChartDataEntry extends ChartDataEntryBase implements NSCopying {

	static alloc(): ChartDataEntry; // inherited from NSObject

	static new(): ChartDataEntry; // inherited from NSObject

	x: number;

	constructor(o: { x: number; y: number; });

	constructor(o: { x: number; y: number; data: any; });

	constructor(o: { x: number; y: number; icon: UIImage; });

	constructor(o: { x: number; y: number; icon: UIImage; data: any; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithXY(x: number, y: number): this;

	initWithXYData(x: number, y: number, data: any): this;

	initWithXYIcon(x: number, y: number, icon: UIImage): this;

	initWithXYIconData(x: number, y: number, icon: UIImage, data: any): this;
}

declare class ChartDataEntryBase extends NSObject {

	static alloc(): ChartDataEntryBase; // inherited from NSObject

	static new(): ChartDataEntryBase; // inherited from NSObject

	data: any;

	icon: UIImage;

	y: number;

	constructor(o: { y: number; });

	constructor(o: { y: number; data: any; });

	constructor(o: { y: number; icon: UIImage; });

	constructor(o: { y: number; icon: UIImage; data: any; });

	initWithY(y: number): this;

	initWithYData(y: number, data: any): this;

	initWithYIcon(y: number, icon: UIImage): this;

	initWithYIconData(y: number, icon: UIImage, data: any): this;
}

interface ChartDataProvider {

	centerOffsets: CGPoint;

	chartXMax: number;

	chartXMin: number;

	chartYMax: number;

	chartYMin: number;

	data: ChartData;

	maxHighlightDistance: number;

	maxVisibleCount: number;

	xRange: number;
}
declare var ChartDataProvider: {

	prototype: ChartDataProvider;
};

declare class ChartDataRendererBase extends ChartRenderer {

	static alloc(): ChartDataRendererBase; // inherited from NSObject

	static new(): ChartDataRendererBase; // inherited from NSObject

	readonly animator: ChartAnimator;

	constructor(o: { animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawDataWithContext(context: any): void;

	drawExtrasWithContext(context: any): void;

	drawHighlightedWithContextIndices(context: any, indices: NSArray<ChartHighlight> | ChartHighlight[]): void;

	drawValuesWithContext(context: any): void;

	initBuffers(): void;

	initWithAnimatorViewPortHandler(animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;

	isDrawingValuesAllowedWithDataProvider(dataProvider: ChartDataProvider): boolean;
}

declare class ChartDataSet extends ChartBaseDataSet {

	static alloc(): ChartDataSet; // inherited from NSObject

	static new(): ChartDataSet; // inherited from NSObject

	readonly entries: NSArray<ChartDataEntry>;
	[index: number]: ChartDataEntry;

	constructor(o: { entries: NSArray<ChartDataEntry> | ChartDataEntry[]; });

	constructor(o: { entries: NSArray<ChartDataEntry> | ChartDataEntry[]; label: string; });

	calcMinMaxXWithEntry(e: ChartDataEntry): void;

	calcMinMaxYWithEntry(e: ChartDataEntry): void;

	initWithEntries(entries: NSArray<ChartDataEntry> | ChartDataEntry[]): this;

	initWithEntriesLabel(entries: NSArray<ChartDataEntry> | ChartDataEntry[], label: string): this;

	objectAtIndexedSubscript(position: number): ChartDataEntry;

	removeAllWithKeepingCapacity(keepCapacity: boolean): void;

	replaceEntries(entries: NSArray<ChartDataEntry> | ChartDataEntry[]): void;

	setObjectAtIndexedSubscript(newValue: ChartDataEntry, position: number): void;
}

declare const enum ChartDataSetRounding {

	Up = 0,

	Down = 1,

	Closest = 2
}

declare class ChartDefaultAxisValueFormatter extends NSObject implements IChartAxisValueFormatter {

	static alloc(): ChartDefaultAxisValueFormatter; // inherited from NSObject

	static new(): ChartDefaultAxisValueFormatter; // inherited from NSObject

	static withBlock(block: (p1: number, p2: ChartAxisBase) => string): ChartDefaultAxisValueFormatter;

	block: (p1: number, p2: ChartAxisBase) => string;

	formatter: NSNumberFormatter;

	hasAutoDecimals: boolean;

	constructor(o: { block: (p1: number, p2: ChartAxisBase) => string; });

	constructor(o: { decimals: number; });

	constructor(o: { formatter: NSNumberFormatter; });

	initWithBlock(block: (p1: number, p2: ChartAxisBase) => string): this;

	initWithDecimals(decimals: number): this;

	initWithFormatter(formatter: NSNumberFormatter): this;

	stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class ChartDefaultFillFormatter extends NSObject implements IChartFillFormatter {

	static alloc(): ChartDefaultFillFormatter; // inherited from NSObject

	static new(): ChartDefaultFillFormatter; // inherited from NSObject

	static withBlock(block: (p1: ILineChartDataSet, p2: LineChartDataProvider) => number): ChartDefaultFillFormatter;

	block: (p1: ILineChartDataSet, p2: LineChartDataProvider) => number;

	constructor(o: { block: (p1: ILineChartDataSet, p2: LineChartDataProvider) => number; });

	getFillLinePositionWithDataSetDataProvider(dataSet: ILineChartDataSet, dataProvider: LineChartDataProvider): number;

	initWithBlock(block: (p1: ILineChartDataSet, p2: LineChartDataProvider) => number): this;
}

declare class ChartDefaultValueFormatter extends NSObject implements IChartValueFormatter {

	static alloc(): ChartDefaultValueFormatter; // inherited from NSObject

	static new(): ChartDefaultValueFormatter; // inherited from NSObject

	static withBlock(block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string): ChartDefaultValueFormatter;

	block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string;

	formatter: NSNumberFormatter;

	hasAutoDecimals: boolean;

	constructor(o: { block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string; });

	constructor(o: { decimals: number; });

	constructor(o: { formatter: NSNumberFormatter; });

	initWithBlock(block: (p1: number, p2: ChartDataEntry, p3: number, p4: ChartViewPortHandler) => string): this;

	initWithDecimals(decimals: number): this;

	initWithFormatter(formatter: NSNumberFormatter): this;

	stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: ChartDataEntry, dataSetIndex: number, viewPortHandler: ChartViewPortHandler): string;
}

declare class ChartDescription extends ChartComponentBase {

	static alloc(): ChartDescription; // inherited from NSObject

	static new(): ChartDescription; // inherited from NSObject

	font: UIFont;

	text: string;

	textAlign: NSTextAlignment;

	textColor: UIColor;
}

declare const enum ChartEasingOption {

	Linear = 0,

	EaseInQuad = 1,

	EaseOutQuad = 2,

	EaseInOutQuad = 3,

	EaseInCubic = 4,

	EaseOutCubic = 5,

	EaseInOutCubic = 6,

	EaseInQuart = 7,

	EaseOutQuart = 8,

	EaseInOutQuart = 9,

	EaseInQuint = 10,

	EaseOutQuint = 11,

	EaseInOutQuint = 12,

	EaseInSine = 13,

	EaseOutSine = 14,

	EaseInOutSine = 15,

	EaseInExpo = 16,

	EaseOutExpo = 17,

	EaseInOutExpo = 18,

	EaseInCirc = 19,

	EaseOutCirc = 20,

	EaseInOutCirc = 21,

	EaseInElastic = 22,

	EaseOutElastic = 23,

	EaseInOutElastic = 24,

	EaseInBack = 25,

	EaseOutBack = 26,

	EaseInOutBack = 27,

	EaseInBounce = 28,

	EaseOutBounce = 29,

	EaseInOutBounce = 30
}

declare class ChartFill extends NSObject {

	static alloc(): ChartFill; // inherited from NSObject

	static fillWithCGColor(CGColor: any): ChartFill;

	static fillWithCGImage(CGImage: any): ChartFill;

	static fillWithCGImageTiled(CGImage: any, tiled: boolean): ChartFill;

	static fillWithCGLayer(CGLayer: any): ChartFill;

	static fillWithColor(color: UIColor): ChartFill;

	static fillWithImage(image: UIImage): ChartFill;

	static fillWithImageTiled(image: UIImage, tiled: boolean): ChartFill;

	static fillWithLinearGradientAngle(linearGradient: any, angle: number): ChartFill;

	static fillWithRadialGradient(radialGradient: any): ChartFill;

	static fillWithRadialGradientStartOffsetPercentStartRadiusPercentEndOffsetPercentEndRadiusPercent(radialGradient: any, startOffsetPercent: CGPoint, startRadiusPercent: number, endOffsetPercent: CGPoint, endRadiusPercent: number): ChartFill;

	static new(): ChartFill; // inherited from NSObject

	readonly color: any;

	readonly gradient: any;

	readonly gradientAngle: number;

	readonly gradientEndOffsetPercent: CGPoint;

	readonly gradientEndRadiusPercent: number;

	readonly gradientStartOffsetPercent: CGPoint;

	readonly gradientStartRadiusPercent: number;

	readonly image: any;

	readonly layer: any;

	readonly type: ChartFillType;

	constructor(o: { CGColor: any; });

	constructor(o: { CGImage: any; });

	constructor(o: { CGImage: any; tiled: boolean; });

	constructor(o: { CGLayer: any; });

	constructor(o: { color: UIColor; });

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; tiled: boolean; });

	constructor(o: { linearGradient: any; angle: number; });

	constructor(o: { radialGradient: any; });

	constructor(o: { radialGradient: any; startOffsetPercent: CGPoint; startRadiusPercent: number; endOffsetPercent: CGPoint; endRadiusPercent: number; });

	fillPathWithContextRect(context: any, rect: CGRect): void;

	initWithCGColor(CGColor: any): this;

	initWithCGImage(CGImage: any): this;

	initWithCGImageTiled(CGImage: any, tiled: boolean): this;

	initWithCGLayer(CGLayer: any): this;

	initWithColor(color: UIColor): this;

	initWithImage(image: UIImage): this;

	initWithImageTiled(image: UIImage, tiled: boolean): this;

	initWithLinearGradientAngle(linearGradient: any, angle: number): this;

	initWithRadialGradient(radialGradient: any): this;

	initWithRadialGradientStartOffsetPercentStartRadiusPercentEndOffsetPercentEndRadiusPercent(radialGradient: any, startOffsetPercent: CGPoint, startRadiusPercent: number, endOffsetPercent: CGPoint, endRadiusPercent: number): this;
}

declare const enum ChartFillType {

	Empty = 0,

	Color = 1,

	LinearGradient = 2,

	RadialGradient = 3,

	Image = 4,

	TiledImage = 5,

	Layer = 6
}

declare class ChartHighlight extends NSObject {

	static alloc(): ChartHighlight; // inherited from NSObject

	static new(): ChartHighlight; // inherited from NSObject

	readonly axis: AxisDependency;

	dataIndex: number;

	readonly dataSetIndex: number;

	drawX: number;

	drawY: number;

	readonly isStacked: boolean;

	readonly stackIndex: number;

	readonly x: number;

	readonly xPx: number;

	readonly y: number;

	readonly yPx: number;

	constructor(o: { x: number; dataSetIndex: number; stackIndex: number; });

	constructor(o: { x: number; y: number; dataSetIndex: number; dataIndex: number; });

	constructor(o: { x: number; y: number; xPx: number; yPx: number; dataIndex: number; dataSetIndex: number; stackIndex: number; axis: AxisDependency; });

	constructor(o: { x: number; y: number; xPx: number; yPx: number; dataSetIndex: number; axis: AxisDependency; });

	constructor(o: { x: number; y: number; xPx: number; yPx: number; dataSetIndex: number; stackIndex: number; axis: AxisDependency; });

	initWithXDataSetIndexStackIndex(x: number, dataSetIndex: number, stackIndex: number): this;

	initWithXYDataSetIndexDataIndex(x: number, y: number, dataSetIndex: number, dataIndex: number): this;

	initWithXYXPxYPxDataIndexDataSetIndexStackIndexAxis(x: number, y: number, xPx: number, yPx: number, dataIndex: number, dataSetIndex: number, stackIndex: number, axis: AxisDependency): this;

	initWithXYXPxYPxDataSetIndexAxis(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, axis: AxisDependency): this;

	initWithXYXPxYPxDataSetIndexStackIndexAxis(x: number, y: number, xPx: number, yPx: number, dataSetIndex: number, stackIndex: number, axis: AxisDependency): this;

	setDrawWithPt(pt: CGPoint): void;

	setDrawWithXY(x: number, y: number): void;
}

declare class ChartHighlighter extends NSObject implements IChartHighlighter {

	static alloc(): ChartHighlighter; // inherited from NSObject

	static new(): ChartHighlighter; // inherited from NSObject

	chart: ChartDataProvider;

	constructor(o: { chart: ChartDataProvider; });

	getHighlightWithXValueXY(xVal: number, x: number, y: number): ChartHighlight;

	getHighlightWithXY(x: number, y: number): ChartHighlight;

	getHighlightsWithXValueXY(xValue: number, x: number, y: number): NSArray<ChartHighlight>;

	getValsForTouchWithXY(x: number, y: number): CGPoint;

	initWithChart(chart: ChartDataProvider): this;
}

declare class ChartIndexAxisValueFormatter extends NSObject implements IChartAxisValueFormatter {

	static alloc(): ChartIndexAxisValueFormatter; // inherited from NSObject

	static new(): ChartIndexAxisValueFormatter; // inherited from NSObject

	static withValues(values: NSArray<string> | string[]): ChartIndexAxisValueFormatter;

	values: NSArray<string>;

	constructor(o: { values: NSArray<string> | string[]; });

	initWithValues(values: NSArray<string> | string[]): this;

	stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class ChartLegend extends ChartComponentBase {

	static alloc(): ChartLegend; // inherited from NSObject

	static new(): ChartLegend; // inherited from NSObject

	calculatedLabelBreakPoints: NSArray<number>;

	calculatedLabelSizes: NSArray<NSValue>;

	calculatedLineSizes: NSArray<NSValue>;

	direction: ChartLegendDirection;

	drawInside: boolean;

	entries: NSArray<ChartLegendEntry>;

	extraEntries: NSArray<ChartLegendEntry>;

	font: UIFont;

	form: ChartLegendForm;

	formLineDashLengths: NSArray<number>;

	formLineDashPhase: number;

	formLineWidth: number;

	formSize: number;

	formToTextSpace: number;

	horizontalAlignment: ChartLegendHorizontalAlignment;

	readonly isDrawInsideEnabled: boolean;

	readonly isLegendCustom: boolean;

	readonly isWordWrapEnabled: boolean;

	maxSizePercent: number;

	neededHeight: number;

	neededWidth: number;

	orientation: ChartLegendOrientation;

	stackSpace: number;

	textColor: UIColor;

	textHeightMax: number;

	textWidthMax: number;

	verticalAlignment: ChartLegendVerticalAlignment;

	wordWrapEnabled: boolean;

	xEntrySpace: number;

	yEntrySpace: number;

	constructor(o: { entries: NSArray<ChartLegendEntry> | ChartLegendEntry[]; });

	calculateDimensionsWithLabelFontViewPortHandler(labelFont: UIFont, viewPortHandler: ChartViewPortHandler): void;

	getMaximumEntrySizeWithFont(font: UIFont): CGSize;

	initWithEntries(entries: NSArray<ChartLegendEntry> | ChartLegendEntry[]): this;

	resetCustom(): void;

	setCustomWithEntries(entries: NSArray<ChartLegendEntry> | ChartLegendEntry[]): void;
}

declare const enum ChartLegendDirection {

	LeftToRight = 0,

	RightToLeft = 1
}

declare class ChartLegendEntry extends NSObject {

	static alloc(): ChartLegendEntry; // inherited from NSObject

	static new(): ChartLegendEntry; // inherited from NSObject

	form: ChartLegendForm;

	formColor: UIColor;

	formLineDashLengths: NSArray<number>;

	formLineDashPhase: number;

	formLineWidth: number;

	formSize: number;

	label: string;

	constructor(o: { label: string; form: ChartLegendForm; formSize: number; formLineWidth: number; formLineDashPhase: number; formLineDashLengths: NSArray<number> | number[]; formColor: UIColor; });

	initWithLabelFormFormSizeFormLineWidthFormLineDashPhaseFormLineDashLengthsFormColor(label: string, form: ChartLegendForm, formSize: number, formLineWidth: number, formLineDashPhase: number, formLineDashLengths: NSArray<number> | number[], formColor: UIColor): this;
}

declare const enum ChartLegendForm {

	None = 0,

	Empty = 1,

	Default = 2,

	Square = 3,

	Circle = 4,

	Line = 5
}

declare const enum ChartLegendHorizontalAlignment {

	Left = 0,

	Center = 1,

	Right = 2
}

declare const enum ChartLegendOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare class ChartLegendRenderer extends ChartRenderer {

	static alloc(): ChartLegendRenderer; // inherited from NSObject

	static new(): ChartLegendRenderer; // inherited from NSObject

	legend: ChartLegend;

	constructor(o: { viewPortHandler: ChartViewPortHandler; legend: ChartLegend; });

	computeLegendWithData(data: ChartData): void;

	drawFormWithContextXYEntryLegend(context: any, x: number, y: number, entry: ChartLegendEntry, legend: ChartLegend): void;

	drawLabelWithContextXYLabelFontTextColor(context: any, x: number, y: number, label: string, font: UIFont, textColor: UIColor): void;

	initWithViewPortHandlerLegend(viewPortHandler: ChartViewPortHandler, legend: ChartLegend): this;

	renderLegendWithContext(context: any): void;
}

declare const enum ChartLegendVerticalAlignment {

	Top = 0,

	Center = 1,

	Bottom = 2
}

declare const enum ChartLimitLabelPosition {

	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3
}

declare class ChartLimitLine extends ChartComponentBase {

	static alloc(): ChartLimitLine; // inherited from NSObject

	static new(): ChartLimitLine; // inherited from NSObject

	drawLabelEnabled: boolean;

	label: string;

	labelPosition: ChartLimitLabelPosition;

	limit: number;

	lineColor: UIColor;

	lineDashLengths: NSArray<number>;

	lineDashPhase: number;

	lineWidth: number;

	valueFont: UIFont;

	valueTextColor: UIColor;

	constructor(o: { limit: number; });

	constructor(o: { limit: number; label: string; });

	initWithLimit(limit: number): this;

	initWithLimitLabel(limit: number, label: string): this;
}

declare class ChartMarkerImage extends NSObject implements IChartMarker {

	static alloc(): ChartMarkerImage; // inherited from NSObject

	static new(): ChartMarkerImage; // inherited from NSObject

	chartView: ChartViewBase;

	image: UIImage;

	offset: CGPoint;

	size: CGSize;

	drawWithContextPoint(context: any, point: CGPoint): void;

	offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

	refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}

declare class ChartMarkerView extends NSUIView implements IChartMarker {

	static alloc(): ChartMarkerView; // inherited from NSObject

	static appearance(): ChartMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ChartMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ChartMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ChartMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ChartMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ChartMarkerView; // inherited from UIAppearance

	static new(): ChartMarkerView; // inherited from NSObject

	static viewFromXibIn(bundle: NSBundle): ChartMarkerView;

	chartView: ChartViewBase;

	offset: CGPoint;

	drawWithContextPoint(context: any, point: CGPoint): void;

	offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

	refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}

declare class ChartRange extends NSObject {

	static alloc(): ChartRange; // inherited from NSObject

	static new(): ChartRange; // inherited from NSObject

	from: number;

	to: number;

	constructor(o: { from: number; to: number; });

	contains(value: number): boolean;

	initFromTo(from: number, to: number): this;

	isLarger(value: number): boolean;

	isSmaller(value: number): boolean;
}

declare class ChartRenderer extends NSObject {

	static alloc(): ChartRenderer; // inherited from NSObject

	static new(): ChartRenderer; // inherited from NSObject

	readonly viewPortHandler: ChartViewPortHandler;

	constructor(o: { viewPortHandler: ChartViewPortHandler; });

	initWithViewPortHandler(viewPortHandler: ChartViewPortHandler): this;
}

declare class ChartTransformer extends NSObject {

	static alloc(): ChartTransformer; // inherited from NSObject

	static new(): ChartTransformer; // inherited from NSObject

	readonly pixelToValueMatrix: CGAffineTransform;

	readonly valueToPixelMatrix: CGAffineTransform;

	constructor(o: { viewPortHandler: ChartViewPortHandler; });

	initWithViewPortHandler(viewPortHandler: ChartViewPortHandler): this;

	pixelForValuesWithXY(x: number, y: number): CGPoint;

	prepareMatrixOffsetWithInverted(inverted: boolean): void;

	prepareMatrixValuePxWithChartXMinDeltaXDeltaYChartYMin(chartXMin: number, deltaX: number, deltaY: number, chartYMin: number): void;

	valueForTouchPoint(point: CGPoint): CGPoint;

	valueForTouchPointWithXY(x: number, y: number): CGPoint;
}

declare class ChartTransformerHorizontalBarChart extends ChartTransformer {

	static alloc(): ChartTransformerHorizontalBarChart; // inherited from NSObject

	static new(): ChartTransformerHorizontalBarChart; // inherited from NSObject
}

declare class ChartViewBase extends NSUIView implements ChartAnimatorDelegate, ChartDataProvider {

	static alloc(): ChartViewBase; // inherited from NSObject

	static appearance(): ChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ChartViewBase; // inherited from UIAppearance

	static new(): ChartViewBase; // inherited from NSObject

	readonly chartAnimator: ChartAnimator;

	chartDescription: ChartDescription;

	readonly contentRect: CGRect;

	data: ChartData;

	delegate: ChartViewDelegate;

	dragDecelerationEnabled: boolean;

	dragDecelerationFrictionCoef: number;

	drawMarkers: boolean;

	extraBottomOffset: number;

	extraLeftOffset: number;

	extraRightOffset: number;

	extraTopOffset: number;

	highlightPerTapEnabled: boolean;

	readonly highlighted: NSArray<ChartHighlight>;

	highlighter: IChartHighlighter;

	readonly isDragDecelerationEnabled: boolean;

	readonly isDrawMarkersEnabled: boolean;

	readonly isHighLightPerTapEnabled: boolean;

	lastHighlighted: ChartHighlight;

	readonly legend: ChartLegend;

	readonly legendRenderer: ChartLegendRenderer;

	marker: IChartMarker;

	maxHighlightDistance: number;

	readonly midPoint: CGPoint;

	noDataFont: UIFont;

	noDataText: string;

	noDataTextAlignment: NSTextAlignment;

	noDataTextColor: UIColor;

	renderer: ChartDataRendererBase;

	readonly viewPortHandler: ChartViewPortHandler;

	readonly xAxis: ChartXAxis;

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	addViewportJob(job: ChartViewPortJob): void;

	animateWithXAxisDuration(xAxisDuration: number): void;

	animateWithXAxisDurationEasing(xAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithXAxisDurationEasingOption(xAxisDuration: number, easingOption: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDuration(xAxisDuration: number, yAxisDuration: number): void;

	animateWithXAxisDurationYAxisDurationEasing(xAxisDuration: number, yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithXAxisDurationYAxisDurationEasingOption(xAxisDuration: number, yAxisDuration: number, easingOption: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDurationEasingOptionXEasingOptionY(xAxisDuration: number, yAxisDuration: number, easingOptionX: ChartEasingOption, easingOptionY: ChartEasingOption): void;

	animateWithXAxisDurationYAxisDurationEasingXEasingY(xAxisDuration: number, yAxisDuration: number, easingX: (p1: number, p2: number) => number, easingY: (p1: number, p2: number) => number): void;

	animateWithYAxisDuration(yAxisDuration: number): void;

	animateWithYAxisDurationEasing(yAxisDuration: number, easing: (p1: number, p2: number) => number): void;

	animateWithYAxisDurationEasingOption(yAxisDuration: number, easingOption: ChartEasingOption): void;

	animatorStopped(animator: ChartAnimator): void;

	animatorUpdated(animator: ChartAnimator): void;

	clear(): void;

	clearAllViewportJobs(): void;

	clearValues(): void;

	getChartImageWithTransparent(transparent: boolean): UIImage;

	getHighlightByTouchPoint(pt: CGPoint): ChartHighlight;

	getMarkerPositionWithHighlight(highlight: ChartHighlight): CGPoint;

	highlightValue(highlight: ChartHighlight): void;

	highlightValueCallDelegate(highlight: ChartHighlight, callDelegate: boolean): void;

	highlightValueWithXDataSetIndexDataIndex(x: number, dataSetIndex: number, dataIndex: number): void;

	highlightValueWithXDataSetIndexDataIndexCallDelegate(x: number, dataSetIndex: number, dataIndex: number, callDelegate: boolean): void;

	highlightValueWithXYDataSetIndexDataIndex(x: number, y: number, dataSetIndex: number, dataIndex: number): void;

	highlightValueWithXYDataSetIndexDataIndexCallDelegate(x: number, y: number, dataSetIndex: number, dataIndex: number, callDelegate: boolean): void;

	highlightValues(highs: NSArray<ChartHighlight> | ChartHighlight[]): void;

	isEmpty(): boolean;

	notifyDataSetChanged(): void;

	removeViewportJob(job: ChartViewPortJob): void;

	setExtraOffsetsWithLeftTopRightBottom(left: number, top: number, right: number, bottom: number): void;

	valuesToHighlight(): boolean;
}

interface ChartViewDelegate {

	chartScaledScaleXScaleY?(chartView: ChartViewBase, scaleX: number, scaleY: number): void;

	chartTranslatedDXDY?(chartView: ChartViewBase, dX: number, dY: number): void;

	chartValueNothingSelected?(chartView: ChartViewBase): void;

	chartValueSelectedEntryHighlight?(chartView: ChartViewBase, entry: ChartDataEntry, highlight: ChartHighlight): void;

	chartViewAnimatorDidStop?(chartView: ChartViewBase, animator: ChartAnimator): void;

	chartViewDidEndPanning?(chartView: ChartViewBase): void;
}
declare var ChartViewDelegate: {

	prototype: ChartViewDelegate;
};

declare class ChartViewPortHandler extends NSObject {

	static alloc(): ChartViewPortHandler; // inherited from NSObject

	static new(): ChartViewPortHandler; // inherited from NSObject

	readonly canZoomInMoreX: boolean;

	readonly canZoomInMoreY: boolean;

	readonly canZoomOutMoreX: boolean;

	readonly canZoomOutMoreY: boolean;

	readonly chartHeight: number;

	readonly chartWidth: number;

	readonly contentBottom: number;

	readonly contentCenter: CGPoint;

	readonly contentHeight: number;

	readonly contentLeft: number;

	readonly contentRect: CGRect;

	readonly contentRight: number;

	readonly contentTop: number;

	readonly contentWidth: number;

	readonly hasChartDimens: boolean;

	readonly hasNoDragOffset: boolean;

	readonly isFullyZoomedOut: boolean;

	readonly isFullyZoomedOutX: boolean;

	readonly isFullyZoomedOutY: boolean;

	readonly maxScaleX: number;

	readonly maxScaleY: number;

	readonly minScaleX: number;

	readonly minScaleY: number;

	readonly offsetBottom: number;

	readonly offsetLeft: number;

	readonly offsetRight: number;

	readonly offsetTop: number;

	readonly scaleX: number;

	readonly scaleY: number;

	readonly touchMatrix: CGAffineTransform;

	readonly transX: number;

	readonly transY: number;

	constructor(o: { width: number; height: number; });

	centerViewPortWithPtChart(pt: CGPoint, chart: ChartViewBase): void;

	fitScreen(): CGAffineTransform;

	initWithWidthHeight(width: number, height: number): this;

	isInBoundsBottom(y: number): boolean;

	isInBoundsLeft(x: number): boolean;

	isInBoundsRight(x: number): boolean;

	isInBoundsTop(y: number): boolean;

	isInBoundsWithPoint(point: CGPoint): boolean;

	isInBoundsWithXY(x: number, y: number): boolean;

	isInBoundsX(x: number): boolean;

	isInBoundsY(y: number): boolean;

	isIntersectingLineFromTo(startPoint: CGPoint, endPoint: CGPoint): boolean;

	refreshWithNewMatrixChartInvalidate(newMatrix: CGAffineTransform, chart: ChartViewBase, invalidate: boolean): CGAffineTransform;

	resetZoom(): CGAffineTransform;

	restrainViewPortWithOffsetLeftOffsetTopOffsetRightOffsetBottom(offsetLeft: number, offsetTop: number, offsetRight: number, offsetBottom: number): void;

	setChartDimensWithWidthHeight(width: number, height: number): void;

	setDragOffsetX(offset: number): void;

	setDragOffsetY(offset: number): void;

	setMaximumScaleX(xScale: number): void;

	setMaximumScaleY(yScale: number): void;

	setMinMaxScaleXWithMinScaleXMaxScaleX(minScaleX: number, maxScaleX: number): void;

	setMinMaxScaleYWithMinScaleYMaxScaleY(minScaleY: number, maxScaleY: number): void;

	setMinimumScaleX(xScale: number): void;

	setMinimumScaleY(yScale: number): void;

	setZoomWithScaleXScaleY(scaleX: number, scaleY: number): CGAffineTransform;

	setZoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): CGAffineTransform;

	translateWithPt(pt: CGPoint): CGAffineTransform;

	zoomInXY(x: number, y: number): CGAffineTransform;

	zoomOutWithXY(x: number, y: number): CGAffineTransform;

	zoomWithScaleXScaleY(scaleX: number, scaleY: number): CGAffineTransform;

	zoomWithScaleXScaleYXY(scaleX: number, scaleY: number, x: number, y: number): CGAffineTransform;
}

declare class ChartViewPortJob extends NSObject {

	static alloc(): ChartViewPortJob; // inherited from NSObject

	static new(): ChartViewPortJob; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; xValue: number; yValue: number; transformer: ChartTransformer; view: ChartViewBase; });

	doJob(): void;

	initWithViewPortHandlerXValueYValueTransformerView(viewPortHandler: ChartViewPortHandler, xValue: number, yValue: number, transformer: ChartTransformer, view: ChartViewBase): this;
}

declare class ChartXAxis extends ChartAxisBase {

	static alloc(): ChartXAxis; // inherited from NSObject

	static new(): ChartXAxis; // inherited from NSObject

	avoidFirstLastClippingEnabled: boolean;

	readonly isAvoidFirstLastClippingEnabled: boolean;

	readonly isWordWrapEnabled: boolean;

	labelHeight: number;

	labelPosition: XAxisLabelPosition;

	labelRotatedHeight: number;

	labelRotatedWidth: number;

	labelRotationAngle: number;

	labelWidth: number;

	wordWrapEnabled: boolean;

	wordWrapWidthPercent: number;
}

declare class ChartXAxisRenderer extends ChartAxisRendererBase {

	static alloc(): ChartXAxisRenderer; // inherited from NSObject

	static new(): ChartXAxisRenderer; // inherited from NSObject

	readonly gridClippingRect: CGRect;

	constructor(o: { viewPortHandler: ChartViewPortHandler; xAxis: ChartXAxis; transformer: ChartTransformer; });

	computeSize(): void;

	drawGridLineWithContextXY(context: any, x: number, y: number): void;

	drawLabelWithContextFormattedLabelXYAttributesConstrainedToSizeAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, constrainedToSize: CGSize, anchor: CGPoint, angleRadians: number): void;

	drawLabelsWithContextPosAnchor(context: any, pos: number, anchor: CGPoint): void;

	initWithViewPortHandlerXAxisTransformer(viewPortHandler: ChartViewPortHandler, xAxis: ChartXAxis, transformer: ChartTransformer): this;

	renderLimitLineLabelWithContextLimitLinePositionYOffset(context: any, limitLine: ChartLimitLine, position: CGPoint, yOffset: number): void;

	renderLimitLineLineWithContextLimitLinePosition(context: any, limitLine: ChartLimitLine, position: CGPoint): void;
}

declare class ChartYAxis extends ChartAxisBase {

	static alloc(): ChartYAxis; // inherited from NSObject

	static new(): ChartYAxis; // inherited from NSObject

	readonly axisDependency: AxisDependency;

	drawBottomYLabelEntryEnabled: boolean;

	drawTopYLabelEntryEnabled: boolean;

	drawZeroLineEnabled: boolean;

	inverted: boolean;

	readonly isDrawBottomYLabelEntryEnabled: boolean;

	readonly isDrawTopYLabelEntryEnabled: boolean;

	readonly isInverted: boolean;

	labelAlignment: NSTextAlignment;

	labelPosition: YAxisLabelPosition;

	labelXOffset: number;

	maxWidth: number;

	minWidth: number;

	readonly needsOffset: boolean;

	spaceBottom: number;

	spaceTop: number;

	zeroLineColor: UIColor;

	zeroLineDashLengths: NSArray<number>;

	zeroLineDashPhase: number;

	zeroLineWidth: number;

	constructor(o: { position: AxisDependency; });

	getRequiredHeightSpace(): number;

	initWithPosition(position: AxisDependency): this;

	requiredSize(): CGSize;
}

declare class ChartYAxisRenderer extends ChartAxisRendererBase {

	static alloc(): ChartYAxisRenderer; // inherited from NSObject

	static new(): ChartYAxisRenderer; // inherited from NSObject

	readonly gridClippingRect: CGRect;

	constructor(o: { viewPortHandler: ChartViewPortHandler; yAxis: ChartYAxis; transformer: ChartTransformer; });

	drawGridLineWithContextPosition(context: any, position: CGPoint): void;

	drawZeroLineWithContext(context: any): void;

	initWithViewPortHandlerYAxisTransformer(viewPortHandler: ChartViewPortHandler, yAxis: ChartYAxis, transformer: ChartTransformer): this;

	transformedPositions(): NSArray<NSValue>;
}

declare var ChartsVersionNumber: number;

declare var ChartsVersionString: interop.Reference<number>;

declare class ChevronDownShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): ChevronDownShapeRenderer; // inherited from NSObject

	static new(): ChevronDownShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class ChevronUpShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): ChevronUpShapeRenderer; // inherited from NSObject

	static new(): ChevronUpShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class CircleShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): CircleShapeRenderer; // inherited from NSObject

	static new(): CircleShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class CombinedChartData extends BarLineScatterCandleBubbleChartData {

	static alloc(): CombinedChartData; // inherited from NSObject

	static new(): CombinedChartData; // inherited from NSObject

	readonly allData: NSArray<ChartData>;

	barData: BarChartData;

	bubbleData: BubbleChartData;

	candleData: CandleChartData;

	lineData: LineChartData;

	scatterData: ScatterChartData;

	dataByIndex(index: number): ChartData;

	getDataSetByHighlight(highlight: ChartHighlight): IChartDataSet;
}

interface CombinedChartDataProvider extends BarChartDataProvider, BubbleChartDataProvider, CandleChartDataProvider, LineChartDataProvider, ScatterChartDataProvider {

	combinedData: CombinedChartData;
}
declare var CombinedChartDataProvider: {

	prototype: CombinedChartDataProvider;
};

declare const enum CombinedChartDrawOrder {

	Bar = 0,

	Bubble = 1,

	Line = 2,

	Candle = 3,

	Scatter = 4
}

declare class CombinedChartHighlighter extends ChartHighlighter {

	static alloc(): CombinedChartHighlighter; // inherited from NSObject

	static new(): CombinedChartHighlighter; // inherited from NSObject

	constructor(o: { chart: CombinedChartDataProvider; barDataProvider: BarChartDataProvider; });

	initWithChartBarDataProvider(chart: CombinedChartDataProvider, barDataProvider: BarChartDataProvider): this;
}

declare class CombinedChartRenderer extends ChartDataRendererBase {

	static alloc(): CombinedChartRenderer; // inherited from NSObject

	static new(): CombinedChartRenderer; // inherited from NSObject

	chart: CombinedChartView;

	drawBarShadowEnabled: boolean;

	drawValueAboveBarEnabled: boolean;

	readonly isDrawBarShadowEnabled: boolean;

	readonly isDrawValueAboveBarEnabled: boolean;

	subRenderers: NSArray<ChartDataRendererBase>;

	constructor(o: { chart: CombinedChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	getSubRendererWithIndex(index: number): ChartDataRendererBase;

	initWithChartAnimatorViewPortHandler(chart: CombinedChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class CombinedChartView extends BarLineChartViewBase implements CombinedChartDataProvider {

	static alloc(): CombinedChartView; // inherited from NSObject

	static appearance(): CombinedChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CombinedChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CombinedChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CombinedChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CombinedChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CombinedChartView; // inherited from UIAppearance

	static new(): CombinedChartView; // inherited from NSObject

	drawBarShadowEnabled: boolean;

	drawOrder: NSArray<number>;

	drawValueAboveBarEnabled: boolean;

	fillFormatter: IChartFillFormatter;

	highlightFullBarEnabled: boolean;

	readonly barData: BarChartData; // inherited from BarChartDataProvider

	readonly bubbleData: BubbleChartData; // inherited from BubbleChartDataProvider

	readonly candleData: CandleChartData; // inherited from CandleChartDataProvider

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly combinedData: CombinedChartData; // inherited from CombinedChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly isDrawBarShadowEnabled: boolean; // inherited from BarChartDataProvider

	readonly isDrawValueAboveBarEnabled: boolean; // inherited from BarChartDataProvider

	readonly isHighlightFullBarEnabled: boolean; // inherited from BarChartDataProvider

	readonly lineData: LineChartData; // inherited from LineChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly scatterData: ScatterChartData; // inherited from ScatterChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getAxis(axis: AxisDependency): ChartYAxis;

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare class CrossShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): CrossShapeRenderer; // inherited from NSObject

	static new(): CrossShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class HorizontalBarChartHighlighter extends BarChartHighlighter {

	static alloc(): HorizontalBarChartHighlighter; // inherited from NSObject

	static new(): HorizontalBarChartHighlighter; // inherited from NSObject
}

declare class HorizontalBarChartRenderer extends BarChartRenderer {

	static alloc(): HorizontalBarChartRenderer; // inherited from NSObject

	static new(): HorizontalBarChartRenderer; // inherited from NSObject
}

declare class HorizontalBarChartView extends BarChartView {

	static alloc(): HorizontalBarChartView; // inherited from NSObject

	static appearance(): HorizontalBarChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): HorizontalBarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HorizontalBarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HorizontalBarChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HorizontalBarChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): HorizontalBarChartView; // inherited from UIAppearance

	static new(): HorizontalBarChartView; // inherited from NSObject
}

interface IBarChartDataSet extends IBarLineScatterCandleBubbleChartDataSet {

	barBorderColor: UIColor;

	barBorderWidth: number;

	barShadowColor: UIColor;

	highlightAlpha: number;

	isStacked: boolean;

	stackLabels: NSArray<string>;

	stackSize: number;
}
declare var IBarChartDataSet: {

	prototype: IBarChartDataSet;
};

interface IBarLineScatterCandleBubbleChartDataSet extends IChartDataSet {

	highlightColor: UIColor;

	highlightLineDashLengths: NSArray<number>;

	highlightLineDashPhase: number;

	highlightLineWidth: number;
}
declare var IBarLineScatterCandleBubbleChartDataSet: {

	prototype: IBarLineScatterCandleBubbleChartDataSet;
};

interface IBubbleChartDataSet extends IBarLineScatterCandleBubbleChartDataSet {

	highlightCircleWidth: number;

	isNormalizeSizeEnabled: boolean;

	maxSize: number;
}
declare var IBubbleChartDataSet: {

	prototype: IBubbleChartDataSet;
};

interface ICandleChartDataSet extends ILineScatterCandleRadarChartDataSet {

	barSpace: number;

	decreasingColor: UIColor;

	decreasingFilled: boolean;

	increasingColor: UIColor;

	increasingFilled: boolean;

	isDecreasingFilled: boolean;

	isIncreasingFilled: boolean;

	isShadowColorSameAsCandle: boolean;

	neutralColor: UIColor;

	shadowColor: UIColor;

	shadowColorSameAsCandle: boolean;

	shadowWidth: number;

	showCandleBar: boolean;
}
declare var ICandleChartDataSet: {

	prototype: ICandleChartDataSet;
};

interface IChartAxisValueFormatter {

	stringForValueAxis(value: number, axis: ChartAxisBase): string;
}
declare var IChartAxisValueFormatter: {

	prototype: IChartAxisValueFormatter;
};

interface IChartDataSet {

	axisDependency: AxisDependency;

	colors: NSArray<UIColor>;

	drawIconsEnabled: boolean;

	drawValuesEnabled: boolean;

	entryCount: number;

	form: ChartLegendForm;

	formLineDashLengths: NSArray<number>;

	formLineDashPhase: number;

	formLineWidth: number;

	formSize: number;

	highlightEnabled: boolean;

	iconsOffset: CGPoint;

	isDrawIconsEnabled: boolean;

	isDrawValuesEnabled: boolean;

	isHighlightEnabled: boolean;

	isVisible: boolean;

	label: string;

	needsFormatter: boolean;

	valueColors: NSArray<UIColor>;

	valueFont: UIFont;

	valueFormatter: IChartValueFormatter;

	valueTextColor: UIColor;

	visible: boolean;

	xMax: number;

	xMin: number;

	yMax: number;

	yMin: number;

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	valueTextColorAt(index: number): UIColor;
}
declare var IChartDataSet: {

	prototype: IChartDataSet;
};

interface IChartFillFormatter {

	getFillLinePositionWithDataSetDataProvider(dataSet: ILineChartDataSet, dataProvider: LineChartDataProvider): number;
}
declare var IChartFillFormatter: {

	prototype: IChartFillFormatter;
};

interface IChartHighlighter {

	getHighlightWithXY(x: number, y: number): ChartHighlight;
}
declare var IChartHighlighter: {

	prototype: IChartHighlighter;
};

interface IChartMarker {

	offset: CGPoint;

	drawWithContextPoint(context: any, point: CGPoint): void;

	offsetForDrawingAtPoint(atPoint: CGPoint): CGPoint;

	refreshContentWithEntryHighlight(entry: ChartDataEntry, highlight: ChartHighlight): void;
}
declare var IChartMarker: {

	prototype: IChartMarker;
};

interface IChartValueFormatter {

	stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: ChartDataEntry, dataSetIndex: number, viewPortHandler: ChartViewPortHandler): string;
}
declare var IChartValueFormatter: {

	prototype: IChartValueFormatter;
};

interface ILineChartDataSet extends ILineRadarChartDataSet {

	circleColors: NSArray<UIColor>;

	circleHoleColor: UIColor;

	circleHoleRadius: number;

	circleRadius: number;

	cubicIntensity: number;

	drawCircleHoleEnabled: boolean;

	drawCirclesEnabled: boolean;

	fillFormatter: IChartFillFormatter;

	isDrawCircleHoleEnabled: boolean;

	isDrawCirclesEnabled: boolean;

	lineCapType: CGLineCap;

	lineDashLengths: NSArray<number>;

	lineDashPhase: number;

	mode: LineChartMode;

	getCircleColorAtIndex(atIndex: number): UIColor;

	resetCircleColors(index: number): void;

	setCircleColor(color: UIColor): void;
}
declare var ILineChartDataSet: {

	prototype: ILineChartDataSet;
};

interface ILineRadarChartDataSet extends ILineScatterCandleRadarChartDataSet {

	drawFilledEnabled: boolean;

	fill: ChartFill;

	fillAlpha: number;

	fillColor: UIColor;

	isDrawFilledEnabled: boolean;

	lineWidth: number;
}
declare var ILineRadarChartDataSet: {

	prototype: ILineRadarChartDataSet;
};

interface ILineScatterCandleRadarChartDataSet extends IBarLineScatterCandleBubbleChartDataSet {

	drawHorizontalHighlightIndicatorEnabled: boolean;

	drawVerticalHighlightIndicatorEnabled: boolean;

	isHorizontalHighlightIndicatorEnabled: boolean;

	isVerticalHighlightIndicatorEnabled: boolean;

	setDrawHighlightIndicators(enabled: boolean): void;
}
declare var ILineScatterCandleRadarChartDataSet: {

	prototype: ILineScatterCandleRadarChartDataSet;
};

interface IPieChartDataSet extends IChartDataSet {

	automaticallyDisableSliceSpacing: boolean;

	entryLabelColor: UIColor;

	entryLabelFont: UIFont;

	highlightColor: UIColor;

	selectionShift: number;

	sliceSpace: number;

	useValueColorForLine: boolean;

	valueLineColor: UIColor;

	valueLinePart1Length: number;

	valueLinePart1OffsetPercentage: number;

	valueLinePart2Length: number;

	valueLineVariableLength: boolean;

	valueLineWidth: number;

	xValuePosition: PieChartValuePosition;

	yValuePosition: PieChartValuePosition;
}
declare var IPieChartDataSet: {

	prototype: IPieChartDataSet;
};

interface IRadarChartDataSet extends ILineRadarChartDataSet {

	drawHighlightCircleEnabled: boolean;

	highlightCircleFillColor: UIColor;

	highlightCircleInnerRadius: number;

	highlightCircleOuterRadius: number;

	highlightCircleStrokeAlpha: number;

	highlightCircleStrokeColor: UIColor;

	highlightCircleStrokeWidth: number;

	isDrawHighlightCircleEnabled: boolean;
}
declare var IRadarChartDataSet: {

	prototype: IRadarChartDataSet;
};

interface IScatterChartDataSet extends ILineScatterCandleRadarChartDataSet {

	scatterShapeHoleColor: UIColor;

	scatterShapeHoleRadius: number;

	scatterShapeSize: number;

	shapeRenderer: IShapeRenderer;
}
declare var IScatterChartDataSet: {

	prototype: IScatterChartDataSet;
};

interface IShapeRenderer {

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}
declare var IShapeRenderer: {

	prototype: IShapeRenderer;
};

declare class LineChartData extends ChartData {

	static alloc(): LineChartData; // inherited from NSObject

	static new(): LineChartData; // inherited from NSObject
}

interface LineChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {

	lineData: LineChartData;

	getAxis(axis: AxisDependency): ChartYAxis;
}
declare var LineChartDataProvider: {

	prototype: LineChartDataProvider;
};

declare class LineChartDataSet extends LineRadarChartDataSet implements ILineChartDataSet {

	static alloc(): LineChartDataSet; // inherited from NSObject

	static new(): LineChartDataSet; // inherited from NSObject

	lineDashPhase: number;

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	circleColors: NSArray<UIColor>; // inherited from ILineChartDataSet

	circleHoleColor: UIColor; // inherited from ILineChartDataSet

	circleHoleRadius: number; // inherited from ILineChartDataSet

	circleRadius: number; // inherited from ILineChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	cubicIntensity: number; // inherited from ILineChartDataSet

	drawCircleHoleEnabled: boolean; // inherited from ILineChartDataSet

	drawCirclesEnabled: boolean; // inherited from ILineChartDataSet

	drawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	fill: ChartFill; // inherited from ILineRadarChartDataSet

	fillAlpha: number; // inherited from ILineRadarChartDataSet

	fillColor: UIColor; // inherited from ILineRadarChartDataSet

	fillFormatter: IChartFillFormatter; // inherited from ILineChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawCircleHoleEnabled: boolean; // inherited from ILineChartDataSet

	readonly isDrawCirclesEnabled: boolean; // inherited from ILineChartDataSet

	readonly isDrawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	lineCapType: CGLineCap; // inherited from ILineChartDataSet

	lineDashLengths: NSArray<number>; // inherited from ILineChartDataSet

	lineWidth: number; // inherited from ILineRadarChartDataSet

	mode: LineChartMode; // inherited from ILineChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	getCircleColorAtIndex(atIndex: number): UIColor;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetCircleColors(index: number): void;

	resetColors(): void;

	setCircleColor(color: UIColor): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	valueTextColorAt(index: number): UIColor;
}

declare const enum LineChartMode {

	Linear = 0,

	Stepped = 1,

	CubicBezier = 2,

	HorizontalBezier = 3
}

declare class LineChartRenderer extends LineRadarChartRenderer {

	static alloc(): LineChartRenderer; // inherited from NSObject

	static new(): LineChartRenderer; // inherited from NSObject

	dataProvider: LineChartDataProvider;

	constructor(o: { dataProvider: LineChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawCubicBezierWithContextDataSet(context: any, dataSet: ILineChartDataSet): void;

	drawDataSetWithContextDataSet(context: any, dataSet: ILineChartDataSet): void;

	drawHorizontalBezierWithContextDataSet(context: any, dataSet: ILineChartDataSet): void;

	drawLinearWithContextDataSet(context: any, dataSet: ILineChartDataSet): void;

	initWithDataProviderAnimatorViewPortHandler(dataProvider: LineChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class LineChartView extends BarLineChartViewBase implements LineChartDataProvider {

	static alloc(): LineChartView; // inherited from NSObject

	static appearance(): LineChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LineChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LineChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LineChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LineChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LineChartView; // inherited from UIAppearance

	static new(): LineChartView; // inherited from NSObject

	lineChartData: LineChartData;

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly lineData: LineChartData; // inherited from LineChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getAxis(axis: AxisDependency): ChartYAxis;

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;

	setData(): void;

	setScaleEnable(): void;

	setXRange(): void;
}

declare class LineRadarChartDataSet extends LineScatterCandleRadarChartDataSet implements ILineRadarChartDataSet {

	static alloc(): LineRadarChartDataSet; // inherited from NSObject

	static new(): LineRadarChartDataSet; // inherited from NSObject

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	fill: ChartFill; // inherited from ILineRadarChartDataSet

	fillAlpha: number; // inherited from ILineRadarChartDataSet

	fillColor: UIColor; // inherited from ILineRadarChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	lineWidth: number; // inherited from ILineRadarChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	valueTextColorAt(index: number): UIColor;
}

declare class LineRadarChartRenderer extends LineScatterCandleRadarChartRenderer {

	static alloc(): LineRadarChartRenderer; // inherited from NSObject

	static new(): LineRadarChartRenderer; // inherited from NSObject

	drawFilledPathWithContextPathFillColorFillAlpha(context: any, path: any, fillColor: UIColor, fillAlpha: number): void;

	drawFilledPathWithContextPathFillFillAlpha(context: any, path: any, fill: ChartFill, fillAlpha: number): void;
}

declare class LineScatterCandleRadarChartDataSet extends BarLineScatterCandleBubbleChartDataSet implements ILineScatterCandleRadarChartDataSet {

	static alloc(): LineScatterCandleRadarChartDataSet; // inherited from NSObject

	static new(): LineScatterCandleRadarChartDataSet; // inherited from NSObject

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	valueTextColorAt(index: number): UIColor;
}

declare class LineScatterCandleRadarChartRenderer extends BarLineScatterCandleBubbleChartRenderer {

	static alloc(): LineScatterCandleRadarChartRenderer; // inherited from NSObject

	static new(): LineScatterCandleRadarChartRenderer; // inherited from NSObject

	drawHighlightLinesWithContextPointSet(context: any, point: CGPoint, set: ILineScatterCandleRadarChartDataSet): void;
}

declare class MoveChartViewJob extends ChartViewPortJob {

	static alloc(): MoveChartViewJob; // inherited from NSObject

	static new(): MoveChartViewJob; // inherited from NSObject
}

declare class NSUIAccessibilityElement extends UIAccessibilityElement {

	static alloc(): NSUIAccessibilityElement; // inherited from NSObject

	static new(): NSUIAccessibilityElement; // inherited from NSObject
}

declare class NSUIView extends UIView {

	static alloc(): NSUIView; // inherited from NSObject

	static appearance(): NSUIView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NSUIView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSUIView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSUIView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSUIView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSUIView; // inherited from UIAppearance

	static new(): NSUIView; // inherited from NSObject

	accessibilityChildren(): NSArray<any>;

	nsuiTouchesBeganWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

	nsuiTouchesCancelledWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

	nsuiTouchesEndedWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;

	nsuiTouchesMovedWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void;
}

declare class PieChartData extends ChartData {

	static alloc(): PieChartData; // inherited from NSObject

	static new(): PieChartData; // inherited from NSObject

	readonly yValueSum: number;
}

declare class PieChartDataEntry extends ChartDataEntry {

	static alloc(): PieChartDataEntry; // inherited from NSObject

	static new(): PieChartDataEntry; // inherited from NSObject

	label: string;

	value: number;

	constructor(o: { value: number; });

	constructor(o: { value: number; data: any; });

	constructor(o: { value: number; icon: UIImage; });

	constructor(o: { value: number; icon: UIImage; data: any; });

	constructor(o: { value: number; label: string; });

	constructor(o: { value: number; label: string; data: any; });

	constructor(o: { value: number; label: string; icon: UIImage; });

	constructor(o: { value: number; label: string; icon: UIImage; data: any; });

	initWithValue(value: number): this;

	initWithValueData(value: number, data: any): this;

	initWithValueIcon(value: number, icon: UIImage): this;

	initWithValueIconData(value: number, icon: UIImage, data: any): this;

	initWithValueLabel(value: number, label: string): this;

	initWithValueLabelData(value: number, label: string, data: any): this;

	initWithValueLabelIcon(value: number, label: string, icon: UIImage): this;

	initWithValueLabelIconData(value: number, label: string, icon: UIImage, data: any): this;
}

declare class PieChartDataSet extends ChartDataSet implements IPieChartDataSet {

	static alloc(): PieChartDataSet; // inherited from NSObject

	static new(): PieChartDataSet; // inherited from NSObject

	automaticallyDisableSliceSpacing: boolean; // inherited from IPieChartDataSet

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	entryLabelColor: UIColor; // inherited from IPieChartDataSet

	entryLabelFont: UIFont; // inherited from IPieChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IPieChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	selectionShift: number; // inherited from IPieChartDataSet

	sliceSpace: number; // inherited from IPieChartDataSet

	useValueColorForLine: boolean; // inherited from IPieChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueLineColor: UIColor; // inherited from IPieChartDataSet

	valueLinePart1Length: number; // inherited from IPieChartDataSet

	valueLinePart1OffsetPercentage: number; // inherited from IPieChartDataSet

	valueLinePart2Length: number; // inherited from IPieChartDataSet

	valueLineVariableLength: boolean; // inherited from IPieChartDataSet

	valueLineWidth: number; // inherited from IPieChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	xValuePosition: PieChartValuePosition; // inherited from IPieChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	yValuePosition: PieChartValuePosition; // inherited from IPieChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	valueTextColorAt(index: number): UIColor;
}

declare class PieChartHighlighter extends PieRadarChartHighlighter {

	static alloc(): PieChartHighlighter; // inherited from NSObject

	static new(): PieChartHighlighter; // inherited from NSObject
}

declare class PieChartRenderer extends ChartDataRendererBase {

	static alloc(): PieChartRenderer; // inherited from NSObject

	static new(): PieChartRenderer; // inherited from NSObject

	chart: PieChartView;

	constructor(o: { chart: PieChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	calculateMinimumRadiusForSpacedSliceWithCenterRadiusAngleArcStartPointXArcStartPointYStartAngleSweepAngle(center: CGPoint, radius: number, angle: number, arcStartPointX: number, arcStartPointY: number, startAngle: number, sweepAngle: number): number;

	drawDataSetWithContextDataSet(context: any, dataSet: IPieChartDataSet): void;

	getSliceSpaceWithDataSet(dataSet: IPieChartDataSet): number;

	initWithChartAnimatorViewPortHandler(chart: PieChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare const enum PieChartValuePosition {

	InsideSlice = 0,

	OutsideSlice = 1
}

declare class PieChartView extends PieRadarChartViewBase {

	static alloc(): PieChartView; // inherited from NSObject

	static appearance(): PieChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PieChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PieChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PieChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PieChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PieChartView; // inherited from UIAppearance

	static new(): PieChartView; // inherited from NSObject

	readonly absoluteAngles: NSArray<number>;

	centerAttributedText: NSAttributedString;

	readonly centerCircleBox: CGPoint;

	centerText: string;

	centerTextOffset: CGPoint;

	centerTextRadiusPercent: number;

	readonly circleBox: CGRect;

	readonly drawAngles: NSArray<number>;

	drawCenterTextEnabled: boolean;

	drawEntryLabelsEnabled: boolean;

	drawHoleEnabled: boolean;

	drawSlicesUnderHoleEnabled: boolean;

	entryLabelColor: UIColor;

	entryLabelFont: UIFont;

	holeColor: UIColor;

	holeRadiusPercent: number;

	readonly isDrawCenterTextEnabled: boolean;

	readonly isDrawEntryLabelsEnabled: boolean;

	readonly isDrawHoleEnabled: boolean;

	readonly isDrawSlicesUnderHoleEnabled: boolean;

	readonly isUsePercentValuesEnabled: boolean;

	maxAngle: number;

	transparentCircleColor: UIColor;

	transparentCircleRadiusPercent: number;

	usePercentValuesEnabled: boolean;

	dataSetIndexForIndex(xValue: number): number;

	needsHighlightWithIndex(index: number): boolean;
}

declare class PieRadarChartHighlighter extends ChartHighlighter {

	static alloc(): PieRadarChartHighlighter; // inherited from NSObject

	static new(): PieRadarChartHighlighter; // inherited from NSObject

	closestHighlightWithIndexXY(index: number, x: number, y: number): ChartHighlight;
}

declare class PieRadarChartViewBase extends ChartViewBase {

	static alloc(): PieRadarChartViewBase; // inherited from NSObject

	static appearance(): PieRadarChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PieRadarChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PieRadarChartViewBase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PieRadarChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PieRadarChartViewBase; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PieRadarChartViewBase; // inherited from UIAppearance

	static new(): PieRadarChartViewBase; // inherited from NSObject

	readonly diameter: number;

	readonly isRotationEnabled: boolean;

	readonly isRotationWithTwoFingers: boolean;

	minOffset: number;

	readonly radius: number;

	readonly rawRotationAngle: number;

	rotationAngle: number;

	rotationEnabled: boolean;

	rotationWithTwoFingers: boolean;

	angleForPointWithXY(x: number, y: number): number;

	distanceToCenterWithXY(x: number, y: number): number;

	getPositionWithCenterDistAngle(center: CGPoint, dist: number, angle: number): CGPoint;

	indexForAngle(angle: number): number;

	spinWithDurationFromAngleToAngle(duration: number, fromAngle: number, toAngle: number): void;

	spinWithDurationFromAngleToAngleEasing(duration: number, fromAngle: number, toAngle: number, easing: (p1: number, p2: number) => number): void;

	spinWithDurationFromAngleToAngleEasingOption(duration: number, fromAngle: number, toAngle: number, easingOption: ChartEasingOption): void;

	stopDeceleration(): void;

	stopSpinAnimation(): void;
}

declare class RadarChartData extends ChartData {

	static alloc(): RadarChartData; // inherited from NSObject

	static new(): RadarChartData; // inherited from NSObject

	highlightColor: UIColor;

	highlightLineDashLengths: NSArray<number>;

	highlightLineDashPhase: number;

	highlightLineWidth: number;

	labels: NSArray<string>;
}

declare class RadarChartDataEntry extends ChartDataEntry {

	static alloc(): RadarChartDataEntry; // inherited from NSObject

	static new(): RadarChartDataEntry; // inherited from NSObject

	value: number;

	constructor(o: { value: number; });

	constructor(o: { value: number; data: any; });

	initWithValue(value: number): this;

	initWithValueData(value: number, data: any): this;
}

declare class RadarChartDataSet extends LineRadarChartDataSet implements IRadarChartDataSet {

	static alloc(): RadarChartDataSet; // inherited from NSObject

	static new(): RadarChartDataSet; // inherited from NSObject

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	drawHighlightCircleEnabled: boolean; // inherited from IRadarChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	fill: ChartFill; // inherited from ILineRadarChartDataSet

	fillAlpha: number; // inherited from ILineRadarChartDataSet

	fillColor: UIColor; // inherited from ILineRadarChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightCircleFillColor: UIColor; // inherited from IRadarChartDataSet

	highlightCircleInnerRadius: number; // inherited from IRadarChartDataSet

	highlightCircleOuterRadius: number; // inherited from IRadarChartDataSet

	highlightCircleStrokeAlpha: number; // inherited from IRadarChartDataSet

	highlightCircleStrokeColor: UIColor; // inherited from IRadarChartDataSet

	highlightCircleStrokeWidth: number; // inherited from IRadarChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawFilledEnabled: boolean; // inherited from ILineRadarChartDataSet

	readonly isDrawHighlightCircleEnabled: boolean; // inherited from IRadarChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	lineWidth: number; // inherited from ILineRadarChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	valueTextColorAt(index: number): UIColor;
}

declare class RadarChartHighlighter extends PieRadarChartHighlighter {

	static alloc(): RadarChartHighlighter; // inherited from NSObject

	static new(): RadarChartHighlighter; // inherited from NSObject
}

declare class RadarChartRenderer extends LineRadarChartRenderer {

	static alloc(): RadarChartRenderer; // inherited from NSObject

	static new(): RadarChartRenderer; // inherited from NSObject

	chart: RadarChartView;

	constructor(o: { chart: RadarChartView; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawWebWithContext(context: any): void;

	initWithChartAnimatorViewPortHandler(chart: RadarChartView, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class RadarChartView extends PieRadarChartViewBase {

	static alloc(): RadarChartView; // inherited from NSObject

	static appearance(): RadarChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RadarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RadarChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RadarChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RadarChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RadarChartView; // inherited from UIAppearance

	static new(): RadarChartView; // inherited from NSObject

	drawWeb: boolean;

	readonly factor: number;

	innerWebColor: UIColor;

	innerWebLineWidth: number;

	skipWebLineCount: number;

	readonly sliceAngle: number;

	webAlpha: number;

	webColor: UIColor;

	webLineWidth: number;

	readonly yAxis: ChartYAxis;

	readonly yRange: number;
}

declare class ScatterChartData extends BarLineScatterCandleBubbleChartData {

	static alloc(): ScatterChartData; // inherited from NSObject

	static new(): ScatterChartData; // inherited from NSObject

	getGreatestShapeSize(): number;
}

interface ScatterChartDataProvider extends BarLineScatterCandleBubbleChartDataProvider {

	scatterData: ScatterChartData;
}
declare var ScatterChartDataProvider: {

	prototype: ScatterChartDataProvider;
};

declare class ScatterChartDataSet extends LineScatterCandleRadarChartDataSet implements IScatterChartDataSet {

	static alloc(): ScatterChartDataSet; // inherited from NSObject

	static new(): ScatterChartDataSet; // inherited from NSObject

	static rendererForShape(shape: ScatterShape): IShapeRenderer;

	scatterShapeHoleColor: UIColor;

	scatterShapeHoleRadius: number;

	scatterShapeSize: number;

	shapeRenderer: IShapeRenderer;

	readonly axisDependency: AxisDependency; // inherited from IChartDataSet

	readonly colors: NSArray<UIColor>; // inherited from IChartDataSet

	drawHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	drawIconsEnabled: boolean; // inherited from IChartDataSet

	drawValuesEnabled: boolean; // inherited from IChartDataSet

	drawVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly entryCount: number; // inherited from IChartDataSet

	readonly form: ChartLegendForm; // inherited from IChartDataSet

	readonly formLineDashLengths: NSArray<number>; // inherited from IChartDataSet

	readonly formLineDashPhase: number; // inherited from IChartDataSet

	readonly formLineWidth: number; // inherited from IChartDataSet

	readonly formSize: number; // inherited from IChartDataSet

	highlightColor: UIColor; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightEnabled: boolean; // inherited from IChartDataSet

	highlightLineDashLengths: NSArray<number>; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineDashPhase: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	highlightLineWidth: number; // inherited from IBarLineScatterCandleBubbleChartDataSet

	iconsOffset: CGPoint; // inherited from IChartDataSet

	readonly isDrawIconsEnabled: boolean; // inherited from IChartDataSet

	readonly isDrawValuesEnabled: boolean; // inherited from IChartDataSet

	readonly isHighlightEnabled: boolean; // inherited from IChartDataSet

	readonly isHorizontalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVerticalHighlightIndicatorEnabled: boolean; // inherited from ILineScatterCandleRadarChartDataSet

	readonly isVisible: boolean; // inherited from IChartDataSet

	readonly label: string; // inherited from IChartDataSet

	readonly needsFormatter: boolean; // inherited from IChartDataSet

	readonly valueColors: NSArray<UIColor>; // inherited from IChartDataSet

	valueFont: UIFont; // inherited from IChartDataSet

	valueFormatter: IChartValueFormatter; // inherited from IChartDataSet

	valueTextColor: UIColor; // inherited from IChartDataSet

	visible: boolean; // inherited from IChartDataSet

	readonly xMax: number; // inherited from IChartDataSet

	readonly xMin: number; // inherited from IChartDataSet

	readonly yMax: number; // inherited from IChartDataSet

	readonly yMin: number; // inherited from IChartDataSet

	addColor(color: UIColor): void;

	addEntry(e: ChartDataEntry): boolean;

	addEntryOrdered(e: ChartDataEntry): boolean;

	calcMinMax(): void;

	calcMinMaxYFromXToX(fromX: number, toX: number): void;

	clear(): void;

	colorAtIndex(atIndex: number): UIColor;

	contains(e: ChartDataEntry): boolean;

	entriesForXValue(xValue: number): NSArray<ChartDataEntry>;

	entryForIndex(i: number): ChartDataEntry;

	entryForXValueClosestToY(xValue: number, yValue: number): ChartDataEntry;

	entryForXValueClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): ChartDataEntry;

	entryIndexWithEntry(e: ChartDataEntry): number;

	entryIndexWithXClosestToYRounding(xValue: number, yValue: number, rounding: ChartDataSetRounding): number;

	notifyDataSetChanged(): void;

	removeEntry(entry: ChartDataEntry): boolean;

	removeEntryWithIndex(index: number): boolean;

	removeEntryWithX(x: number): boolean;

	removeFirst(): boolean;

	removeLast(): boolean;

	resetColors(): void;

	setColor(color: UIColor): void;

	setDrawHighlightIndicators(enabled: boolean): void;

	setScatterShape(shape: ScatterShape): void;

	valueTextColorAt(index: number): UIColor;
}

declare class ScatterChartRenderer extends LineScatterCandleRadarChartRenderer {

	static alloc(): ScatterChartRenderer; // inherited from NSObject

	static new(): ScatterChartRenderer; // inherited from NSObject

	dataProvider: ScatterChartDataProvider;

	constructor(o: { dataProvider: ScatterChartDataProvider; animator: ChartAnimator; viewPortHandler: ChartViewPortHandler; });

	drawDataSetWithContextDataSet(context: any, dataSet: IScatterChartDataSet): void;

	initWithDataProviderAnimatorViewPortHandler(dataProvider: ScatterChartDataProvider, animator: ChartAnimator, viewPortHandler: ChartViewPortHandler): this;
}

declare class ScatterChartView extends BarLineChartViewBase implements ScatterChartDataProvider {

	static alloc(): ScatterChartView; // inherited from NSObject

	static appearance(): ScatterChartView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ScatterChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ScatterChartView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ScatterChartView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ScatterChartView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ScatterChartView; // inherited from UIAppearance

	static new(): ScatterChartView; // inherited from NSObject

	readonly centerOffsets: CGPoint; // inherited from ChartDataProvider

	readonly chartXMax: number; // inherited from ChartDataProvider

	readonly chartXMin: number; // inherited from ChartDataProvider

	readonly chartYMax: number; // inherited from ChartDataProvider

	readonly chartYMin: number; // inherited from ChartDataProvider

	readonly data: ChartData; // inherited from ChartDataProvider

	readonly highestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly lowestVisibleX: number; // inherited from BarLineScatterCandleBubbleChartDataProvider

	readonly maxHighlightDistance: number; // inherited from ChartDataProvider

	readonly maxVisibleCount: number; // inherited from ChartDataProvider

	readonly scatterData: ScatterChartData; // inherited from ScatterChartDataProvider

	readonly xRange: number; // inherited from ChartDataProvider

	getTransformerForAxis(forAxis: AxisDependency): ChartTransformer;

	isInvertedWithAxis(axis: AxisDependency): boolean;
}

declare const enum ScatterShape {

	Square = 0,

	Circle = 1,

	Triangle = 2,

	Cross = 3,

	X = 4,

	ChevronUp = 5,

	ChevronDown = 6
}

declare class SquareShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): SquareShapeRenderer; // inherited from NSObject

	static new(): SquareShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class TriangleShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): TriangleShapeRenderer; // inherited from NSObject

	static new(): TriangleShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare class ValueFormatter extends NSObject implements IChartValueFormatter {

	static alloc(): ValueFormatter; // inherited from NSObject

	static new(): ValueFormatter; // inherited from NSObject

	stringForValueEntryDataSetIndexViewPortHandler(value: number, entry: ChartDataEntry, dataSetIndex: number, viewPortHandler: ChartViewPortHandler): string;
}

declare const enum XAxisLabelPosition {

	Top = 0,

	Bottom = 1,

	BothSided = 2,

	TopInside = 3,

	BottomInside = 4
}

declare class XAxisRendererHorizontalBarChart extends ChartXAxisRenderer {

	static alloc(): XAxisRendererHorizontalBarChart; // inherited from NSObject

	static new(): XAxisRendererHorizontalBarChart; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; xAxis: ChartXAxis; transformer: ChartTransformer; chart: BarChartView; });

	drawLabelWithContextFormattedLabelXYAttributesAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, anchor: CGPoint, angleRadians: number): void;

	initWithViewPortHandlerXAxisTransformerChart(viewPortHandler: ChartViewPortHandler, xAxis: ChartXAxis, transformer: ChartTransformer, chart: BarChartView): this;
}

declare class XAxisRendererRadarChart extends ChartXAxisRenderer {

	static alloc(): XAxisRendererRadarChart; // inherited from NSObject

	static new(): XAxisRendererRadarChart; // inherited from NSObject

	chart: RadarChartView;

	constructor(o: { viewPortHandler: ChartViewPortHandler; xAxis: ChartXAxis; chart: RadarChartView; });

	drawLabelWithContextFormattedLabelXYAttributesAnchorAngleRadians(context: any, formattedLabel: string, x: number, y: number, attributes: NSDictionary<string, any>, anchor: CGPoint, angleRadians: number): void;

	initWithViewPortHandlerXAxisChart(viewPortHandler: ChartViewPortHandler, xAxis: ChartXAxis, chart: RadarChartView): this;
}

declare class XShapeRenderer extends NSObject implements IShapeRenderer {

	static alloc(): XShapeRenderer; // inherited from NSObject

	static new(): XShapeRenderer; // inherited from NSObject

	renderShapeWithContextDataSetViewPortHandlerPointColor(context: any, dataSet: IScatterChartDataSet, viewPortHandler: ChartViewPortHandler, point: CGPoint, color: UIColor): void;
}

declare const enum YAxisLabelPosition {

	OutsideChart = 0,

	InsideChart = 1
}

declare class YAxisRendererHorizontalBarChart extends ChartYAxisRenderer {

	static alloc(): YAxisRendererHorizontalBarChart; // inherited from NSObject

	static new(): YAxisRendererHorizontalBarChart; // inherited from NSObject

	drawYLabelsWithContextFixedPositionPositionsOffset(context: any, fixedPosition: number, positions: NSArray<NSValue> | NSValue[], offset: number): void;
}

declare class YAxisRendererRadarChart extends ChartYAxisRenderer {

	static alloc(): YAxisRendererRadarChart; // inherited from NSObject

	static new(): YAxisRendererRadarChart; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; yAxis: ChartYAxis; chart: RadarChartView; });

	initWithViewPortHandlerYAxisChart(viewPortHandler: ChartViewPortHandler, yAxis: ChartYAxis, chart: RadarChartView): this;
}

declare class YAxisValueFormatter extends NSObject implements IChartAxisValueFormatter {

	static alloc(): YAxisValueFormatter; // inherited from NSObject

	static new(): YAxisValueFormatter; // inherited from NSObject

	stringForValueAxis(value: number, axis: ChartAxisBase): string;
}

declare class ZoomChartViewJob extends ChartViewPortJob {

	static alloc(): ZoomChartViewJob; // inherited from NSObject

	static new(): ZoomChartViewJob; // inherited from NSObject

	constructor(o: { viewPortHandler: ChartViewPortHandler; scaleX: number; scaleY: number; xValue: number; yValue: number; transformer: ChartTransformer; axis: AxisDependency; view: ChartViewBase; });

	initWithViewPortHandlerScaleXScaleYXValueYValueTransformerAxisView(viewPortHandler: ChartViewPortHandler, scaleX: number, scaleY: number, xValue: number, yValue: number, transformer: ChartTransformer, axis: AxisDependency, view: ChartViewBase): this;
}
