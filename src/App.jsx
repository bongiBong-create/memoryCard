import './App.css';
import { getApi } from './data/getApi';
import { useState, useEffect } from 'react';

function App() {
  const [img, setImg] = useState(null)

  useEffect(() => {
    const getImgs =  async () => {
      const imgs = await getApi();
      setImg(() => imgs.data)
    }
  getImgs()
  
  }, [])

  console.log(img)

  return (
    <>
    {img ? img.map((item, i) => {
      return <img key={i} src={item.character.images.jpg.image_url}/>
    }): "loading..."}
    </>
  )
}

export default App