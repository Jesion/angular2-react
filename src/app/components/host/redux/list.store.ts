import { createStore, Store } from 'redux';
import { reducer } from './list.reducer';
import { IAction } from './list.action';

export class ValueStore {

    public store: Store<Array<string>>;

    constructor (values: Array<string>) {
        this.store = createStore( reducer, values, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() );
    }

    get values(): Array<string> {
        return this.store.getState();
    }

    dispatch(action: IAction) {
        this.store.dispatch( action );
    }
}
