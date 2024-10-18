import Button from "../shared/Button";
import happy from "../assets/imgs/happy.gif"

export default function Win({clear}) {
  return (
    <div className="lose">
      <h1 className="title">You are king!</h1>
      <img src={happy} alt="happy" />
      <Button onclick={clear} styleBtn="styleBtn" text="Win again" />
    </div>
  )
}
