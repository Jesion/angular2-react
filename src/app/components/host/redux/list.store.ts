import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './list.reducer';
import { IAction } from './list.action';

export class ValueStore {

    public store: Redux.Store<Array<string>>;

    public composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    constructor (values: Array<string>) {
        this.store = createStore( reducer, values, this.composeEnhancers() ) ;
    }

    get values(): Array<string> {
        return this.store.getState();
    }

    dispatch(action: IAction) {
        this.store.dispatch( action );
    }
}

/*
  import { createStore, applyMiddleware } from 'redux';
  import { composeWithDevTools } from 'redux-devtools-extension';

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

*/
