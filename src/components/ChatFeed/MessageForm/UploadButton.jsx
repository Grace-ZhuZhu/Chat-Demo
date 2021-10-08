import React from 'react'
import { PictureOutlined } from '@ant-design/icons';

const UploadButton = ({ upload }) => {
    return (
        <>
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>

            <input
                type="file"
                multiple={false}
                id="upload-button"
                onChange={upload}
            />
      </>
    )
}

export default UploadButton
