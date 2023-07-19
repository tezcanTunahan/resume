import "@/styles/ui/button.scss";
export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}
