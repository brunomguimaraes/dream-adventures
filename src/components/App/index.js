import React from "react";
import Main from "components/Layout/Main";
import { Routes, Route } from "react-router-dom";

import Team from "pages/Team";

import * as Styled from "./index.styles";

const App = () => {
  return (
    <Styled.App>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Team />} />
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
