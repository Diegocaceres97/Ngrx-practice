import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { filtrosVarios } from '../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosVarios = 'todos';

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    //this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    });
  }
}
