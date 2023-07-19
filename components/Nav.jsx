"use client";
import "@/styles/nav.scss";

export default function Nav() {
  const handleMail = () => {
    window.open("mailto:ttezcan.1999@gmail.com");
  };
  const handleBlog = () => {
    window.open("https://hemlock.blog");
  };

  return (
    <div className="nav">
      <div className="nav__left">
        <a href="/">tunahantezcan.dev</a>
      </div>
      <div className="nav__right">
        <ul className="nav__right__ul">
          <li className="nav__right__ul__li">
            <a href="#" onClick={handleMail}>
              Contact <span style={{ color: "#adff2f" }}>me</span>
            </a>
          </li>
          <li className="nav__right__ul__li">
            <a href="#" onClick={handleBlog}>
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
