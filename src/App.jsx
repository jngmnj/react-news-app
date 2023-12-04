import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/:category?" element={<MainPage />} />
          <Route path="/article/:id" element={<DetailPage />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
