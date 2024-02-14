import "./NavBar.css";

const items = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Search",
    path: "/Search",
  },
  {
    text: "Login",
    path: "/login",
  },
  {
    text: "Sign up",
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
