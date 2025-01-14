import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoApiServiceService } from './todo-api-service.service';
import { Todo } from './types';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos; let i = index">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo, i)">Delete</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  private readonly todoApiService = inject(TodoApiServiceService);

  todos!: Todo[];

  public ngOnInit(): void {
    this.todoApiService.getTodoList().subscribe((todoList: Todo[]) => {
      this.todos = todoList;
    });
  }

  public update(todo: Todo) {
    this.todoApiService.updateTodo(todo).subscribe((todoUpdated: Todo) => {
      this.todos[todoUpdated.id - 1] = todoUpdated;
    });
  }

  public delete(todo: Todo, index: number) {
    this.todos.splice(index, 1);
    this.todoApiService.deleteTodo(todo).subscribe((result) => console.log);
  }
}
