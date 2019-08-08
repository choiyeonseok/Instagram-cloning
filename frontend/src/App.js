import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
