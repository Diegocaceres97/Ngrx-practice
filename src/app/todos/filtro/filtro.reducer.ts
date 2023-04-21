import { Action, createReducer, on } from '@ngrx/store';
import { filtrosVarios, setFiltro } from './filtro.actions';

export const initialState: filtrosVarios = 'todos';

export const _filtroReducer = createReducer<filtrosVarios, Action>(
  initialState,
  on(setFiltro, (state, { filtro}) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
