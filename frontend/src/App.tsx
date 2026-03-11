import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./features/dashboard/Page";
import ProjectsPage from "./features/projects/Page";
import ProjectsIdPage from "./features/projects/PageId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectsIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;