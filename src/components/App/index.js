import React from "react";
import Main from "components/Layout/Main";
import { Routes, Route } from "react-router-dom";

import Intro from "pages/Intro";
import Team from "pages/Team";
import Profession from "pages/Profession";
import Adventure from "pages/Adventure";
import Training from "pages/Training";
import Inventory from "pages/Inventory";

import * as Styled from "./index.styles";

const App = () => {
  return (
    <Styled.App>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Intro />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/jobs" element={<Profession />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/training" element={<Training />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}
        </Route>
      </Routes>
    </Styled.App>
  );
};

export default App;
