import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
        <Route exact path="/">
          <Homepage />
        </Route>
    </Router>
  );
}

export default App;
