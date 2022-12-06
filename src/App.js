import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import TransferConfirm from "./components/TransferConfirm/TransferConfirm";
import UserTransfer from "./components/UserTransfer/UserTransfer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/:id" exact element={<UserTransfer />} />
        <Route
          path="/transferconfirm/:id1/:id2"
          exact
          element={<TransferConfirm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
