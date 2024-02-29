import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="bg-zinc-950 p-8 fixed top-0 left-0 right-0 bottom-0 overflow-auto">
      <App />
    </div>
  </React.StrictMode>
);
