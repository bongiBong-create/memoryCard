import "../styles/btn.css";

export default function Button({ onclick, text, styleBtn }) {
  return (
    <button className={styleBtn} onClick={onclick}>
      {text}
    </button>
  )
}
