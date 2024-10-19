import ReactHowler from "react-howler";
import musicShama from "../assets/shama.mp3";
import { useState } from "react";
import Button from "../shared/Button";
import audio from "../assets/imgs/headphones.svg";

export default function Music() {
  const [play, setPlay] = useState(false);

  const changePlay = () => {
    setPlay(!play)
  }

  return (
    <div className="music__btn">
      <ReactHowler src={musicShama} playing={play}/>

      <Button onclick={changePlay} text="X" img={audio}/>
    </div>
  )
}
