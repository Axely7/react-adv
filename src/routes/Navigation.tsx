import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../../public/vite.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map((r, i) => (
                <li key={i}>
                  <NavLink
                    to={r.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {r.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((r, i) => (
              <Route key={i} path={r.path} element={<r.Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
