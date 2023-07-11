import "@/styles/animatedText.scss";

const IndexPage = ({ text }) => {
  return (
    <div className={"slide-container"}>
      <div className={"slide-item"}>{text}</div>
      <div className={"slide-item"}>{text}</div>
      <div className={"slide-item"}>{text}</div>
      <div className={"slide-item"}>{text}</div>
      <div className={"slide-item"}>{text}</div>
      <div className={"slide-item"}>{text}</div>
    </div>
  );
};

export default IndexPage;
