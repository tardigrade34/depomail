import React from "react";
import ReactDOMClient from "react-dom/client";
import { AgencyLayout } from "./screens/AgencyLayout";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AgencyLayout />);
