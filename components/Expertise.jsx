import "@/styles/expertise.scss";

export default function Expertise() {
  return (
    <div className="expertise">
      <div className="expertise__top">
        <h1 className="expertise__top__title">My Expertise</h1>
      </div>
      <div className="expertise__mid">
        <h3 className="expertise__mid__subtitle">
          HTML // CSS // Scss // Java // JavaScript // REACT// Node // Express
          // <span style={{ color: "#adff2f" }}>NEXTJS</span> // Redux // Git //
          MongoDB // NoSQL{" "}
          <span style={{ color: "grey" }}>
            and I'm willing to learn new tech stuff.
          </span>
        </h3>
        <p className="expertise__mid__text">
          I am a computer engineer who is in his senior year. I have a high
          interest in frontend and web development. I am willing to learn and
          try new things.
        </p>
      </div>
    </div>
  );
}
