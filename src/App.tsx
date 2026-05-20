import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { lazy } from "react";

const IndexPage = lazy(() => import("./pages/index"));
const AboutPage = lazy(() => import("./pages/about"));

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <header>
                    <Link to="/">Главная</Link>
                    <Link to="/about">О нас</Link>
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={<IndexPage />}
                    />
                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
