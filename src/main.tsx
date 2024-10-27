import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-screen min-h-screen overflow-auto bg-neutral-300 text-neutral-900">
      <App />
    </div>
  </StrictMode>
)
