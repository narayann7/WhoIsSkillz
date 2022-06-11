import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootProvider from "./context_api/root_context";
const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <RootProvider>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </RootProvider>
  </BrowserRouter>,

  root
);
