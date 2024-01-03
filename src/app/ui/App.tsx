import React, { lazy } from 'react';
import styles from './App.module.css';
import { OwnProps } from './AppTs.interface';
import { Route, Routes } from 'react-router-dom';

const TestComp = lazy(() => import('pages/test'))
const FinalTestComp = lazy(() => import('pages/finalTest'))

const App: React.FC<OwnProps> = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<TestComp />} />
        <Route path='/test' element={<FinalTestComp />} />
      </Routes>
    </div>
  );
}

export default App;
