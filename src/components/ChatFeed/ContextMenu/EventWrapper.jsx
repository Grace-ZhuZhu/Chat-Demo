import React, { useRef, useEffect } from 'react';

const useEventWrapper = (ref, closeMenu) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleExit = (event) => {
      const { key } = event;
      if (key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleExit);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleExit);
    };
  }, [ref, closeMenu]);
};

const EventWrapper = (props) => {
  const { closeMenu, children } = props;
  const wrapperRef = useRef(null);
  useEventWrapper(wrapperRef, closeMenu);

  return <div ref={wrapperRef}>{ children }</div>;
};

export default EventWrapper;
