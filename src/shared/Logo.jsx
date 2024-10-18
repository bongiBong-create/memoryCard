import logoShama from "../assets/imgs/logo/shama.png";

export default function Logo({ onclick, style, size }) {
  return (
    <div onClick={onclick} className="logo__shama">
      <img
        width={size}
        className={style}
        src={logoShama}
        alt="logo"
      />
    </div>
  )
}
