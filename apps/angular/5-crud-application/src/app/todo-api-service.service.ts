import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Observable } from 'rxjs';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodoApiServiceService {
  private readonly httpClient = inject(HttpClient);

  public getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
  }

  public updateTodo(todoToUpdate: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todoToUpdate.id}`,
      JSON.stringify({
        todo: todoToUpdate.id,
        title: randText(),
        body: todoToUpdate.body,
        userId: todoToUpdate.userId,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }
}
