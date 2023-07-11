import "@/styles/nav.scss";
export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">tunahantezcan.dev</div>
      <div className="nav__right">
        <ul className="nav__right__ul">
          <li className="nav__right__ul__li">Contact</li>
          <li className="nav__right__ul__li">Work</li>
          <li className="nav__right__ul__li">Blog</li>
        </ul>
      </div>
    </div>
  );
}
