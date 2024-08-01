import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * reactDescription.length);
}

function Header() {
  const description = reactDescription[getRandomInt()];
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
