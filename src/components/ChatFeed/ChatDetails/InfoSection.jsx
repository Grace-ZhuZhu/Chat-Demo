/* eslint-disable react/button-has-type */
import React from 'react';
import { MinusOutlined, UserOutlined } from '@ant-design/icons';
import './ChatDetails.css';

const InfoSection = ({ showInfo, handleShowInfo }) => (
  <>
    { showInfo && (
      <div className="info-section">
        Info:
        <ul>
          <li>
            <MinusOutlined className="minus-icon" />
            {' '}
            Remove member
            {' '}
          </li>
          <li>
            <UserOutlined className="user-icon" />
            {' '}
            Login as current user
            {' '}
          </li>
          <li>Right click - Delete a message </li>
          <li>Each user can only delete his/her own messages </li>
          <li>Sending messages takes a few seconds till the server responds, please be patient </li>
        </ul>
      </div>
    )}
    <button className="info-button" onClick={handleShowInfo}>
      { showInfo ? 'Hide Info' : 'Show info' }
    </button>
  </>
);

export default InfoSection;
