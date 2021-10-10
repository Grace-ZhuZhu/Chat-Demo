import _ from 'lodash';

export const hasAttachment = (message) => {
    return !_.isEmpty(message) && !_.isEmpty(message.attachments);
}

export const isTextMessage = (message) => {
    return message && !hasAttachment(message);
}

export const getClassNameForMyOrOtherMessage = (isMyMessage) => isMyMessage ? 'my-message' : 'other-message';

export const getClassNameForMyOrOtherContent = (isMyMessage) => isMyMessage ? 'my-content' : 'other-content';