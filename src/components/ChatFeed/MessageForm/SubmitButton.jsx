import React from 'react'
import { SendOutlined } from '@ant-design/icons';

const SubmitButton = () => {
    return (
        <button type="submit" className="send-button">
       	 	<SendOutlined className="send-icon" />
      	</button>
    )
}

export default SubmitButton
