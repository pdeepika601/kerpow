import { Action } from '@ngrx/store';
import { TableDetails } from './../../model/table-detail.model';

export enum TableDetailsActionTypes {
    LOAD_TABLE_DETAILS = "[customer] Load Table Details",
    LOAD_TABLE_DETAILS_SUCCESS = "[customer] Load Table Details Success",
    LOAD_TABLE_DETAILS_FAIL = "[customer] Load Table Details Fail"
}

export class LoadTableDetails implements Action {
    readonly type = TableDetailsActionTypes.LOAD_TABLE_DETAILS
}

export class LoadTableDetailsSuccess implements Action {
    readonly type = TableDetailsActionTypes.LOAD_TABLE_DETAILS_SUCCESS
    constructor(public payload: TableDetails[]) { }
}

export class LoadTableDetailsFail implements Action {
    readonly type = TableDetailsActionTypes.LOAD_TABLE_DETAILS_FAIL
    constructor(public payload: string) { }
}
export type Action = LoadTableDetails | LoadTableDetailsSuccess | LoadTableDetailsFail;