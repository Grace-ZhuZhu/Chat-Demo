/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { SYSTEM_NOTIFICATION_TYPES } from '../../Constants/Types';

const SystemNotification = ({
  show,
  type,
  dismissEdit,
  editMessage,
}) => {
  if (!show) {
    return null;
  }

  if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT) {
    return (
      <div className="system-notification">
        You have deleted a message.
        <span className="edit" onClick={editMessage}> edit massages </span>
        <span className="dismiss" onClick={dismissEdit}> dismiss </span>
      </div>
    );
  }

  if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_MEDIA) {
    return (
      <div className="system-notification">
        You have deleted a message.
      </div>
    );
  }

  return null;
};

export default SystemNotification;
