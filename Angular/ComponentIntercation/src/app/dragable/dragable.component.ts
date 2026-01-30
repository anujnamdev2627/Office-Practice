import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-dragable',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './dragable.component.html',
  styleUrl: './dragable.component.css',
})
export class DragableComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  @Input() Input: string | null = '';

  // ngOnChanges() {
  //   this.Input?.valueChange().pipe(debounceTime(1000))
  // }
}
