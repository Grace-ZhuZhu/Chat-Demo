import React from 'react';

const ImageContent = ({ file }) => (
  <img
    src={file}
    alt="message-attachment"
    className="message-image"
  />
);

export default ImageContent;
