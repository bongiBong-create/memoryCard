import "../styles/btn.css";

export default function Button({ onclick, text, styleBtn, img }) {
  return (
      <button className={styleBtn} onClick={onclick}>
        {img ? <img width={50} src={img} alt="audio" /> : text}
      </button>
  )
}
