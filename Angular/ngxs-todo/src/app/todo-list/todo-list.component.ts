import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { TodoState } from '../todo/todo.state';
import { AddTodo, DeleteTodo, ToggleTodo } from '../todo/todo.actions';
import { Todo } from '../todo/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent,InputComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
 todos: Signal<Todo[]>;

  constructor(private store: Store) {
    this.todos = toSignal(this.store.select(TodoState.todos), {
      initialValue: [],
    });
  }
  addTodo(title: string) {
    console.log('Add Fired ');

    if (!title.trim()) return;
    this.store.dispatch(new AddTodo(title));
  }
  toggleTodo(id: number) {
    if (!id) return;
    this.store.dispatch(new ToggleTodo(id));
  }

  deleteTodo(id: number) {
    if (!id) return;
    this.store.dispatch(new DeleteTodo(id));
  }
}
