import Tilt from 'react-parallax-tilt';

export default function Card({onclick, src, name }) {
  return (
    <Tilt>
      <div onClick={onclick} className="card__item">
        <img
          name={name}
          src={src}
          alt="img"
        />
      </div>
    </Tilt>
  )
}
