import { IAction } from './list.action';
import * as _ from 'underscore';

export function reducer(state: Array<string>, action: IAction) {

    switch (action.type) {
        case 'ADD':
            return _.union( state, [ action.value ] );
        case 'REMOVE':
            return _.filter( state, function (item) { return item != action.value } );
        default:
            return state;
    }
}
