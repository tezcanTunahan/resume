import "@/styles/work.scss";

export default function Work() {
  return (
    <div className="work">
      <div className="work__top">
        <h1 className="work__top__title">Work Experiance</h1>
      </div>
      <div className="work__mid">
        <div className="work__mid__card">
          <h1 className="work__mid__card__title">Your Company could be next</h1>
          <p>
            I am looking for teammates with whom I can share my energy and
            motivation if you think the same feel free to connect me.
          </p>
        </div>
        <div className="work__mid__card">
          <a
            href="https://www.archisacademy.com"
            className="work__mid__card__title"
          >
            Archi's Academy
          </a>
          <p>
            I attended a bootcamp as a frontend developer focusing on React and
            Next.js. Throughout the bootcamp, I learned the fundamentals of both
            React and Next.js and gained hands-on experience through practical
            projects.
          </p>
        </div>
        <div className="work__mid__card">
          <a href="https://www.appcent.mobi" className="work__mid__card__title">
            Appcent
          </a>
          <p>
            I worked as a front-end developer intern focusing on React and
            Next.js. Throughout the internship, I learned the fundamentals of
            both React and Next.js and gained hands-on experience through
            practical projects.
          </p>
        </div>
      </div>
    </div>
  );
}
