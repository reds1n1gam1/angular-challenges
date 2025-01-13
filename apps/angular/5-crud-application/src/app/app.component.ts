import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoApiServiceService } from './todo-api-service.service';
import { Todo } from './types';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  private readonly todoApiService = inject(TodoApiServiceService);

  todos!: Todo[];

  ngOnInit(): void {
    this.todoApiService.getTodoList().subscribe((todoList: Todo[]) => {
      this.todos = todoList;
    });
  }

  update(todo: Todo) {
    this.todoApiService.updateTodo(todo).subscribe((todoUpdated: Todo) => {
      this.todos[todoUpdated.id - 1] = todoUpdated;
    });
  }
}
