import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import PageRoutes from "./routes/PageRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AppHeader />
      <PageRoutes />
    </>
  );
}

export default App;
