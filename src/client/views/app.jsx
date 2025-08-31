import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopBar } from "@oliasoft-open-source/react-ui-library";
import Logo from "client/views/images/logo.svg";

import { Main } from "client/views/main/main";
import { Rigs } from "client/views/main/rigs";

export const App = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" style={{ height: 28 }} />,
        }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rigs" element={<Rigs />} />
      </Routes>
    </>
  );
};
