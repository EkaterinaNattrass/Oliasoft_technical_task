import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopBar } from '@oliasoft-open-source/react-ui-library';
import Logo from 'client/views/images/logo@2x.png';

import { Main } from 'client/views/main/main';

export const App = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" />,
          label: 'Hiring Challenge'
        }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};
