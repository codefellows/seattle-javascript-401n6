export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT_BY = 'DECREMENT_BY';

export function increment() {
	return {type: INCREMENT}
}

export function decrement() {
	return {type: DECREMENT}
}

export function incrementBy(value) {
	return {type: INCREMENT, value}
}

export function decrementBy(value) {
	return {type: INCREMENT, value}
}

