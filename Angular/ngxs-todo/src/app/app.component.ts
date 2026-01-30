import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { TodoState } from './todo/todo.state';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Todo } from './todo/todo.model';
import { AddTodo, DeleteTodo, ToggleTodo } from './todo/todo.actions';
import { CommonModule, NgFor } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ButtonComponent } from './button/button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule,TodoListComponent,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // @Select(TodoState.todos)
  // todos$!: Observable<Todo[]>;
  // todos: Signal<Todo[]>;

  // constructor(private store: Store) {
  //   // convert observable from NGXS store into a signal
  //   this.todos = toSignal(this.store.select(TodoState.todos), {
  //     initialValue: [],
  //   });
  // }
  // addTodo(title: string) {
  //   console.log('Add Fired ');

  //   if (!title.trim()) return;
  //   this.store.dispatch(new AddTodo(title));
  // }
  // toggleTodo(id: number) {
  //   if (!id) return;
  //   this.store.dispatch(new ToggleTodo(id));
  // }

  // deleteTodo(id: number) {
  //   if (!id) return;
  //   this.store.dispatch(new DeleteTodo(id));
  // }
  handled(){
    alert("Button pushed");
    
  }
}
