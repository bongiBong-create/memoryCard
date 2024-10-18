import Button from "../shared/Button";
import sad from "../assets/imgs/sad.gif";

export default function Lose({clear}) {
  return (
    <div className="lose">
      <h1 className="title">You are ...</h1>
      <img src={sad} alt="sad" />
      <Button onclick={clear} styleBtn="styleBtn" text="try to become king" />
    </div>
  )
}
