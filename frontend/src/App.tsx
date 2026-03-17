import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./features/dashboard/Page";
import ProjectsPage from "./features/projects/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/projects/:id" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;