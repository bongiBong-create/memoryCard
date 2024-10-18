import Logo from "../shared/Logo";
import "../styles/header.css"

export default function Header({handle, style}) {
  return (
    <header className="header">
    <Logo onclick={handle} style={style}/>
    </header>
  )
}
