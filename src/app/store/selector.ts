import {TableState, tableInitialState,tableReducer} from './table-details';
import {ActionReducerMap, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';
import { JsonpClientBackend } from '@angular/common/http';
import { stringify } from 'querystring';

export interface KerpowState {
    tableState: TableState;
}

export const kerpowInitialState: KerpowState={
    tableState: tableInitialState
}

const kerpowReducers: ActionReducerMap<KerpowState> = {
    tableState: tableReducer
}

export const kerpowReducer = combineReducers(kerpowReducers,kerpowInitialState);


export const getKerpowState = createFeatureSelector<KerpowState>(
    'kerpow'
);

export const getTables = createSelector(
    getKerpowState,
    (state) => {
        return state}
)

// export const getTablesLoading = createSelector(
//     getKerpowState,
//     (state) => state.tableDetail.loading
// )

// export const getTablesLoaded = createSelector(
//     getKerpowState,
//     (state) => state.loaded
// )

// export const getError = createSelector(
//     getTablesFeatureState,
//     (state: TableState) => state.error
// )