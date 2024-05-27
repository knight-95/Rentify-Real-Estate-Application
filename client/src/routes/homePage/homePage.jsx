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
          <p style={{color:"red"}}>*Search results are available for <span style={{fontWeight:"bold"}}>Kolkata City</span>, more to be added soon....</p>
          <SearchBar />
         
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
