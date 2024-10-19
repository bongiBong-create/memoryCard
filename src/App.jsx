import './App.css';
import { useState, useEffect } from 'react';
import { getApi } from './data/getApi';
import Header from './components/header';
import Cards from './components/Cards';
import Menu from './components/Menu';
import Score from './components/Score';
import Lose from './components/Lose';
import Win from './components/Win';
import Music from './components/Music';
import Background from './components/background';


function App() {
  const [charactersPick, setCharactersPick] = useState([])
  const [imgs, setImg] = useState(null);
  const [flag, setFlag] = useState(false);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  useEffect(() => {
    const getImgs = async () => {
      const imgs = await getApi();
      setImg(() => imgs.data)
    }
    getImgs()
  }, [])

  const handleFlag = () => {
    setFlag((flag) => !flag)
  }

  const clear = () => {
    setWin(false)
    setLose(false)
    setScore(0)
    setCharactersPick([])
  }

  return (
    <main className='main'>
      <Background />

      {flag ? <section className='play'>
        <Header handle={handleFlag} style="img__Shama logo" />
        <Cards
          score={score}
          setScore={setScore}
          data={imgs}
          setWin={setWin}
          setLose={setLose}
          charactersPick={charactersPick}
          setCharactersPick={setCharactersPick}
        />
        <Score score={score} />
      </section> : ""}

      {win ? <Win clear={clear} /> : ""}
      {lose ? <Lose clear={clear} /> : ""}

      {!flag ? <Menu onclick={handleFlag} /> : ""}

      <Music />
    </main>
  );
};

export default App;