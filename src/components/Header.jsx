import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
        alt="Logo App"
      />
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="">Bonjour</a>
        </li>
        <li>
          <a href="">Bonsoir</a>
        </li>
      </ul>
      <a href="">Contact</a>
    </header>
  );
}

export default Header;
