import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import NewPostPage from "./components/NewPostPage";
import ProfilePage from "./components/ProfilePage";
import FeedsHomePage from "./components/FeedsHomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/feeds-home" element={<FeedsHomePage />} />
          <Route exact path="/new-post" element={<NewPostPage />} />
          <Route exact path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
