import Header from "../components/Header";
import About from "../components/profile/About";
import Home from "../components/profile/Profile";

function ProfilePage() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default ProfilePage;
