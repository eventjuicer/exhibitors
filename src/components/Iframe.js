import React from 'react';
import styles from '../styles/iframes';

const Iframe = ({ src }) => (
  <div>
    <div style={styles.container}>
      <div style={styles.beforeContainer} />
      <iframe style={styles.iframe} src={src} title="ifr" />
    </div>
  </div>
);

export default Iframe;
