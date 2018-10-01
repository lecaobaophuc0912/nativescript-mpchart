
declare const enum LabelPosition {

    Above = 0,

    Below = 1
}

declare class TTRangeSlider extends UIControl implements UIGestureRecognizerDelegate {

    static alloc(): TTRangeSlider; // inherited from NSObject

    static appearance(): TTRangeSlider; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): TTRangeSlider; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TTRangeSlider; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TTRangeSlider; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TTRangeSlider; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TTRangeSlider; // inherited from UIAppearance

    static new(): TTRangeSlider; // inherited from NSObject

    delegate: TTRangeSliderDelegate;

    disableRange: boolean;

    enableStep: boolean;

    handleBorderColor: UIColor;

    handleBorderWidth: number;

    handleColor: UIColor;

    handleDiameter: number;

    handleImage: UIImage;

    hideLabels: boolean;

    labelPadding: number;

    labelPosition: LabelPosition;

    lineBorderColor: UIColor;

    lineBorderWidth: number;

    lineHeight: number;

    maxDistance: number;

    maxLabelAccessibilityHint: string;

    maxLabelAccessibilityLabel: string;

    maxLabelColour: UIColor;

    maxLabelFont: UIFont;

    maxValue: number;

    minDistance: number;

    minLabelAccessibilityHint: string;

    minLabelAccessibilityLabel: string;

    minLabelColour: UIColor;

    minLabelFont: UIFont;

    minValue: number;

    numberFormatterOverride: NSNumberFormatter;

    selectedHandleDiameterMultiplier: number;

    selectedMaximum: number;

    selectedMinimum: number;

    step: number;

    tintColorBetweenHandles: UIColor;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

    gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

    gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

    gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

    gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

    gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

interface TTRangeSliderDelegate extends NSObjectProtocol {

    didEndTouchesInRangeSlider?(sender: TTRangeSlider): void;

    didStartTouchesInRangeSlider?(sender: TTRangeSlider): void;

    rangeSliderDidChangeSelectedMinimumValueAndMaximumValue?(sender: TTRangeSlider, selectedMinimum: number, selectedMaximum: number): void;
}
declare var TTRangeSliderDelegate: {

    prototype: TTRangeSliderDelegate;
};

declare var TTRangeSliderVersionNumber: number;

declare var TTRangeSliderVersionString: interop.Reference<number>;
