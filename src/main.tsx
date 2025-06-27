import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Move these meta tags to your public/index.html file inside the <head> section.
// If you want to set meta tags dynamically, use a library like react-helmet in your App component.
