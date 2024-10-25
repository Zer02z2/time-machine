import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-neutral-900 min-h-screen flex justify-center">
      <div className="max-w-7xl w-full">
        <App />
      </div>
    </div>
  </StrictMode>
)
