import Button from "../shared/Button";

export default function Menu({ onclick }) {
  return (
    <div className="menu">
      <Button onclick={onclick} text="become a king" styleBtn="menuBtn"/>
    </div>
  )
}
