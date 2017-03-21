import { OnInit, ElementRef, Renderer, EventEmitter } from '@angular/core';
export declare class SlideControlComponent implements OnInit {
    private el;
    private renderer;
    private listenerMove;
    private listenerStop;
    step: number;
    floor: number;
    ceiling: number;
    precision: number;
    low: number;
    lowChange: EventEmitter<number>;
    bar: ElementRef;
    highlight: ElementRef;
    lowPointer: ElementRef;
    private pointerHalfWidth;
    private barWidth;
    private minOffset;
    private maxOffset;
    private minValue;
    private maxValue;
    private valueRange;
    private offsetRange;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    private setPointers();
    private start(event);
    private stop();
    private move(event);
    private getX(event);
    private roundStep(value, precision, step, floor);
    private contain(value);
    private percentValue(value);
    private percentOffset(offset);
    private pixelsToOffset(percent);
}