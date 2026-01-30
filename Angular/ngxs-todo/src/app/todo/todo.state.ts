import { Selector, State, StateContext, Action } from '@ngxs/store';
import { Todo, TodoStateModel } from './todo.model';
import { AddTodo, DeleteTodo, ToggleTodo } from './todo.actions';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: []
  },
})
export class TodoState {
  //Selelctor
  @Selector()
  static todos(state: TodoStateModel) {
    return state.todos;
  }
  //!Firts Action to add
  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    console.log("Add Action From State");
    console.log(action.title);
    
    const state = ctx.getState();
    const newTodo: Todo = {
      id: Date.now(),
      title: action.title,
      completed: false,
    };
    ctx.setState({ todos: [...state.todos, newTodo] });
    console.log(ctx.getState());
    
  }

  //!Action two to toggel completed
  @Action(ToggleTodo)
  toggleTodo(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
    const state = ctx.getState();
    const todos = state.todos.map((todo) =>
      todo.id === action.id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo,
    );
    ctx.setState({ todos });
    console.log(ctx.getState());
  }
//!Action 3 to delete any todo
  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo) {
    const state = ctx.getState();

    ctx.setState({
      todos: state.todos.filter((todo) => todo.id !== action.id),
    });
  }
}
