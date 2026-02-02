import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { DataService } from './data.service';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[hoverApi]',
  standalone: true,
})
export class HoverapiDirective {
  @Input('hoverApi') id!: string;

  private tooltipRef: any;
  constructor(
    private el: ElementRef,
    private vcr: ViewContainerRef,
    private dataService: DataService,
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.tooltipRef) return;

    this.tooltipRef = this.vcr.createComponent(TooltipComponent);
    this.tooltipRef.instance.loading = true;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const tooltipEl = this.tooltipRef.location.nativeElement;

    tooltipEl.style.top = `${rect.bottom + 5}px`;
    tooltipEl.style.left = `${rect.left}px`;

    // this.dataService.getData(this.id).subscribe({
    //   next: (data) => {
    //     this.tooltipRef.instance.data = data;
    //     this.tooltipRef.instance.loading = false;
    //   },
    //   error: () => {
    //     this.tooltipRef.instance.error = true;
    //     this.tooltipRef.instance.loading = false;
    //   },
    // });
    this.dataService.getData(this.id)
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.tooltipRef?.destroy();
    this.tooltipRef = null;
  }
}
