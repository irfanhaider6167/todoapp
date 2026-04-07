import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import { AppProvider } from "./context/todoContex";

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout />
      </Router>
    </AppProvider>
  );
}

export default App;
