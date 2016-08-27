import { createStore } from 'redux';
import { reducer } from './list.reducer';
import { IAction } from './list.action';

export class ValueStore {

    public store: Redux.Store<Array<string>>;

    constructor (values: Array<string>) {
        this.store = createStore( reducer, values );
    }

    get values(): Array<string> {
        return this.store.getState();
    }

    dispatch(action: IAction) {
        this.store.dispatch( action );
    }
}
