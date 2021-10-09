import _ from 'lodash';

export const hasAttachment = (message) => {
    return !_.isEmpty(message) && !_.isEmpty(message.attachments);
}

export const getClassNameForMyOrOtherMessage = (isMyMessage) => isMyMessage ? 'my-message' : 'other-message';

export const getClassNameForMyOrOtherContent = (isMyMessage) => isMyMessage ? 'my-content' : 'other-content';