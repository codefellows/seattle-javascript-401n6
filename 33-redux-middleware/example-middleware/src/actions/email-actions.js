export const START_SENDING_EMAIL = 'START_SENDING_EMAIL';
export const CANCEL_SENDING_EMAIL = 'CANCEL_SENDING_EMAIL';
export const SEND_EMAIL = 'SEND_EMAIL';

export function startSendingEmail() {
	return {type: START_SENDING_EMAIL};
}

export function cancelSendingEmail() {
	return {type: CANCEL_SENDING_EMAIL};
}

// params should be {to, subject, body}
export function sendEmail(params) {
	return {type: SEND_EMAIL, ...params};
}
