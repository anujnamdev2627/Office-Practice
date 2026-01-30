export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public title: string) {}
}

export class ToggleTodo {
  static readonly type = '[Todo] Toggle';
  constructor(public id: number) {}
}
export class DeleteTodo {
  static readonly type = '[Todo] Delete';
  constructor(public id: number) {}
}
