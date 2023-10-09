import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import StorePage from "./pages/StorePage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/store" element={<StorePage />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
