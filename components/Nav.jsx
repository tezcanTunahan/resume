import "@/styles/nav.scss";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <a href="/">Tunahan Tezcan</a>
      </div>
      <div className="nav__right">
        <ul className="nav__right__ul">
          <li className="nav__right__ul__li">
            <a href="mailto:ttezcan.1999@gmail.com" target="_blank">
              Contact <span>me</span>
            </a>
          </li>
          <li className="nav__right__ul__li">
            <a href="https://www.hemlock.blog/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
