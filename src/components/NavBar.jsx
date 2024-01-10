import "./NavBar.css";

const items = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Buy Car",
    path: "/Search",
  },
  {
    text: "Login",
    path: "/login",
  },
  {
    text: "Signup",
    path: "/signup",
  },
];

export const NavBar = () => {
  return (
    <ul className="navBarWrapper">
      {items.map(({ text, path }, index) => (
        <li key={index}>
          <a href={path} className="navLink">
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
