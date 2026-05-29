import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<div></div>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};

export default MainRouter;