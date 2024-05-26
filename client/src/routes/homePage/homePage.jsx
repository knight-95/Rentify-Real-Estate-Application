import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.css";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your Journey to a New Home Begins Here</h1>
          <p>
          Explore a wide range of properties for buying and renting. From cozy apartments to spacious family homes, we have the perfect match for your lifestyle and budget.
          </p>
          <SearchBar />
          {/* <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div> */}
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
