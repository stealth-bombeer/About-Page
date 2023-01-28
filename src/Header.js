import logo from "./logo.svg";
const Header = () => {
  return (
    <header className="nav-color">
      <nav className="nav">
        <img src={logo} className="App-logo" alt="logo" width="150px" />
      </nav>
      <ul className="nav-items">
        <li>Home</li>
        <li>Contact</li>
        <li>Mail</li>
      </ul>
    </header>
  );
};

export default Header;
