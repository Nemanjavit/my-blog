import { Routes, Route, Link } from "react-router-dom";
import "./css/main.css";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <header>
          <nav>
            <MainNav />
          </nav>
        </header>

        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
