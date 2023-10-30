import { BrowserRouter, Route, Routes as WebRoutes } from "react-router-dom";
import HomeAdmin from "../pages/Admin/HomeAdmin";


export default function Routes() {
    return (
      <BrowserRouter>
        <WebRoutes>
          <Route path="/admin" element={< HomeAdmin />}>

          </Route>
        </WebRoutes>
      </BrowserRouter>
    );
  }