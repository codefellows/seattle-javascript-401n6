export const STARTED_SENDING_EMAIL = 'STARTED_SENDING_EMAIL';
export const CANCELLED_SENDING_EMAIL = 'CANCELLED_SENDING_EMAIL';
export const SEND_EMAIL = 'SEND_EMAIL';

export function startedSendingEmail() {
  return {
    type: STARTED_SENDING_EMAIL,
  };
}

export function cancelledSendingEmail() {
	return {type: CANCELLED_SENDING_EMAIL};
}

// params should be {to, subject, body}
export function sendEmail(params) {
  return {
    type: SEND_EMAIL,
    meta: {delay: 3000},
    ...params,
  };
}
