import logo from "../assets/images/logo.svg";
import "../assets/styles/css/AppStyles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="card-title">React Resume Builder</h2>
        <Link className="btn btn-dark" to="/start">
          Let's Start
        </Link>
      </header>
    </div>
  );
};

export default Home;
