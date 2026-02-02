import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  // template: `
  //   <div class="tooltip">
  //     <ng-container *ngIf="loading">Loading...</ng-container>
  //     <ng-container *ngIf="error">Failed to load</ng-container>
  //     <ng-container *ngIf="data">
  //       {{ data }}
  //     </ng-container>
  //   </div>
  // `,
  // styles: [
  //   `
  //     .tooltip {
  //       position: absolute;
  //       background: #333;
  //       color: #fff;
  //       padding: 6px 10px;
  //       border-radius: 4px;
  //       font-size: 12px;
  //       z-index: 1000;
  //       max-width: 200px;
  //     }
  //   `,
  // ],
})
export class TooltipComponent {
  // @Input() data: any;
  // @Input() loading = false;
  // @Input() error = false;
}
