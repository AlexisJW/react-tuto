const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.path}>{link.text}</a>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
