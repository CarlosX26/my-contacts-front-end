import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthContextProvider } from "./contexts/authContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
)
