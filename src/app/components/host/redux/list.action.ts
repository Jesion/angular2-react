export interface IAction {
    type: string;
    value: string;
}

export function add(value: string = null): IAction {
	return {
		type: 'ADD',		
		value: value		
	}
}

export function remove(value: string): IAction {
    return {
        type: 'REMOVE',
        value: value
    }
}
