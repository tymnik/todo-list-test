import React, { useState } from 'react';
import { FcUp } from 'react-icons/fc';

import styles from './ScrollToTop.module.css';

const ScrollToTop= () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`}
      onClick={scrollToTop}
    >
      <FcUp style={{ fontSize: '30px'}} />
    </div>
  );
};

export default ScrollToTop;
