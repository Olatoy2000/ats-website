import { ButtonStylesParams, MantineProvider } from "@mantine/core";
import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import App from "../pages/updates/updates";
import "./styles/index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
