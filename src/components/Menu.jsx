import Button from "../shared/Button";
import Logo from "../shared/Logo";

export default function Menu({ onclick }) {
  return (
    <div className="menu">
      <Button onclick={onclick} text="BECOME A KING" />
    </div>
  )
}
