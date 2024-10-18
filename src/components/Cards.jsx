import { useEffect, useState } from "react"
import Card from "../shared/Card"
import "../styles/cards.css"

export default function Cards({ charactersPick, setCharactersPick, score, setScore, data, setWin, setLose }) {
  const [personals, setPersonals] = useState([])
  const characters = [
    { name: "Amidamaru" },
    { name: "Asakura, You" },
    { name: "Asakura, Hao" },
    { name: "Kyouyama, Anna" },
    { name: "Faust VIII, Johann" },
    { name: "Usui, Horokeu" },
    { name: "Umemiya, Ryuunosuke" },
    { name: "Eliza" },
    { name: "McDonell, Chocolove" },
    { name: "Tao, Jun" },
    { name: "Pyron, Lee" },
    { name: "Tao, Ren" },
    { name: "Diethel, Lyserg" },
    { name: "Bason" },
    { name: "Kororo" },
  ]

  const charactersSet = new Set(characters.map(character => character.name));

  useEffect(() => {
    const newCharacters = data.filter(item => charactersSet.has(item.character.name));
    setPersonals((personals) => [...newCharacters])
  }, [])

  useEffect(() => {
    if (charactersPick.length > 0) {
      checkWin(charactersPick[charactersPick.length - 1], score)
    }
  }, [charactersPick, score])

  const handleScore = (e) => {
    setCharactersPick((characters) => {
      const newCharactersPick = [...characters, e.target.name];
      return newCharactersPick;
    })
    setScore((score) => score + 1);
    setPersonals((personals) => [...personals].sort(() => Math.random() - 0.5))
  }

  const checkWin = (name, score) => {
    if (charactersPick.slice(0, -1).includes(name)) {
      setLose(true)
    }

    if (score == 5) {
      setWin(true)
    }
  }

  return (
    <div className='cards'>
      {data ? personals.map((item, i) => {
        return <Card onclick={handleScore} key={i} src={item.character.images.jpg.image_url} name={item.character.name} />
      }).slice(0, 5) : "loading..."}
    </div>
  )
}
