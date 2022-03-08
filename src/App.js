import "./App.css";

import Navigation from "./Page/Shared/Navigation/Navigation";
import Container from "@mui/material/Container";
import Postpage from "./Page/Postpage/Postpage/Postpage";
import Getpage from "./Page/Getpage/Getpage/Getpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container sx={{ paddingTop: "100px" }}>
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Postpage />} />
            <Route path="/getpage" element={<Getpage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
