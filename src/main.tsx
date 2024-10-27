import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex justify-center min-h-screen bg-neutral-300 text-neutral-900">
      <div className="w-full max-w-7xl">
        <App />
      </div>
    </div>
  </StrictMode>
)
