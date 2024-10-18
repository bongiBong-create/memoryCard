import "../styles/background.css";
import shaman from "../assets/video/shaman.mp4";

export default function Background() {
  return (
    <video autoPlay muted loop className="background">
      <source src={shaman} type="video/webm" />
    </video>
  )
}
