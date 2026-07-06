import './index.css';
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Notice the '!' at the very end of the getElementById call
const root = createRoot(document.getElementById("root")!);
root.render(<App />);