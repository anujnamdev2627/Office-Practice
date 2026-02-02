import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { TreeNode } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';

import { TreeTableModule } from 'primeng/treetable';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipComponent } from './tooltip/tooltip.component';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [NgClass,ReactiveFormsModule,RouterOutlet,DataViewModule, MenubarModule,TooltipModule,TreeTableModule],
  imports: [TooltipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //   items: MenuItem[];
  //   products = [
  //     { name: 'Laptop', price: 1200 },
  //     { name: 'Phone', price: 800 }
  //   ];
  //   files: TreeNode[] = [
  //   {
  //     data: {
  //       name: 'Documents',
  //       size: '75kb',
  //       type: 'Folder'
  //     },
  //     children: [
  //       {
  //         data: {
  //           name: 'Resume.pdf',
  //           size: '25kb',
  //           type: 'PDF'
  //         }
  //       },
  //       {
  //         data: {
  //           name: 'CoverLetter.docx',
  //           size: '50kb',
  //           type: 'Word'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     data: {
  //       name: 'Documents',
  //       size: '75kb',
  //       type: 'Folder'
  //     },
  //     children: [
  //       {
  //         data: {
  //           name: 'Resume.pdf',
  //           size: '25kb',
  //           type: 'PDF'
  //         },children:[
  //           {data:{
  //             name:'Resume'
  //           }}
  //         ]
  //       },
  //       {
  //         data: {
  //           name: 'CoverLetter.docx',
  //           size: '50kb',
  //           type: 'Word'
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     data: {
  //       name: 'Documents',
  //       size: '75kb',
  //       type: 'Folder'
  //     },
  //     children: [
  //       {
  //         data: {
  //           name: 'Resume.pdf',
  //           size: '25kb',
  //           type: 'PDF'
  //         }
  //       },
  //       {
  //         data: {
  //           name: 'CoverLetter.docx',
  //           size: '50kb',
  //           type: 'Word'
  //         }
  //       }
  //     ]
  //   }
  // ];
  // this.items = [

  //   {
  //     label: 'Home',
  //     icon: 'pi pi-home',
  //     command: () => this.router.navigate(['/home']),
  //   },
  //   {
  //     label: 'Products',
  //     icon: 'pi pi-box',
  //     items: [
  //       {
  //         label: 'Add Product',
  //         icon: 'pi pi-plus',
  //         command: () => this.router.navigate(['/products/add']),
  //       },
  //       {
  //         label: 'List Products',
  //         icon: 'pi pi-list',
  //         command: () => this.router.navigate(['/products']),
  //       },
  //     ],
  //   },
  //   {
  //     label: 'Orders',
  //     icon: 'pi pi-shopping-cart',
  //     command: () => this.router.navigate(['/orders']),
  //   },
  //   {
  //     label: 'Admin',
  //     icon: 'pi pi-cog',
  //     items: [
  //       {
  //         label: 'Users',
  //         icon: 'pi pi-users',
  //         command: () => this.router.navigate(['/admin/users']),
  //       },
  //       {
  //         label: 'Settings',
  //         icon: 'pi pi-sliders-h',
  //         command: () => this.router.navigate(['/admin/settings']),
  //       },
  //     ],
  //   },
  // ];
  // constructor(private router: Router) {
  // }
  //  constructor(private vcr:ViewContainerRef){}
  //  addComponent(){
  //   this.vcr.createComponent(TooltipComponent)
  //  }
  @ViewChild('viewContainer', { read: ViewContainerRef })
  ViewContainer!: ViewContainerRef;
  @ViewChild('templateContainer', { read: TemplateRef })
  TemplateContainer!: TemplateRef<any>;
  // addComponent(){
  //   this.ViewContainer.createComponent(TooltipComponent)
  // }
  // removeComponent(){
  //   console.log("Exit");
  //   this.ViewContainer.clear();

  // }
  getStudents() {
    console.log("Button Clicked");
    
    const students = [
      {
        roll: 1,
        name: 'One',
        course: 'Maths',
      },
      {
        roll: 2,
        name: 'One',
        course: 'Maths',
      },
      {
        roll: 3,
        name: 'One',
        course: 'Maths',
      },
    ];
    this.ViewContainer.createEmbeddedView(this.TemplateContainer, {students});
  }

  // @ViewChild('footer',{read:ViewContainerRef})Footer!:HTMLParagraphElement;
}
