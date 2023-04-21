import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, eliminar, limpiarTodos, toggle, toggleAll } from './todo.action';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('vencer a thanos'),
  new Todo('Salvar a Tony')
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(limpiarTodos, state => state.filter(todo => !todo.completado)),
  on(toggle, (state, {id}) => { return state.map( todo => {

    if(todo.id === id){
    return {
        ...todo,
        completado: !todo.completado
      }
    } else {
      return todo;
    }
    }
  )}),
  on(editar, (state, {id,texto}) => { return state.map( todo => {

    if(todo.id === id){
    return {
        ...todo,
        texto: texto
      }
    } else {
      return todo;
    }
    }
  )}),
  on(eliminar, (state, {id})=> state.filter( todo => todo.id!==id)),
  on(toggleAll, (state => state.map( todo => {return{...todo, completado: !todo.completado}})))
);

export function TodoReducer(state, action){
  return _todoReducer(state, action);
}
