import "./App.css";
import Mainpage from "./Page/Mainpage/Mainpage/Mainpage";
import Navigation from "./Page/Shared/Navigation/Navigation";
import Sidebar from "./Page/Sidebar/Sidebar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Container sx={{ paddingTop: "100px" }}>
        <Navigation />
      </Container>
    </div>
  );
}

export default App;
