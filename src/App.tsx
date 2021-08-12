import React from "react"
import "./App.css"
import Card from "./components/card"

function App() {
  const cards = [
    {
      number: 1,
      img: "https://images.nintendolife.com/f0db0ebef63ea/top-50-game-boy-games.original.jpg",
      name: "Gameboy"
    },
    {
      number: 2,
      img: "https://cdn.britannica.com/78/117078-050-3C42A8E5/jacks.jpg",
      name: "Jackstone"
    },
    {
      number: 3,
      img: "https://dantesrestoran.ru/public/9223103.jpg",
      name: "Kite"
    },
    {
      number: 4,
      img: "https://3.bp.blogspot.com/-yKQgHcgQeMI/WrEdKuygsBI/AAAAAAAAAeg/CKXZr9JDX6MD-hIStjisHvnzop9eryONwCLcBGAs/s1600/Luksong%2BBaka.jpg",
      name: "Luksong Baka"
    },
    {
      number: 5,
      img: "https://thumbs.gfycat.com/IncompleteThunderousGiantschnauzer-mobile.jpg",
      name: "Pika"
    },
    {
      number: 6,
      img: "https://m.media-amazon.com/images/I/61f6Le+WT5L.jpg",
      name: "Rainbow Spring"
    }
  ]

  return (
    <div className="row">
      {cards.map(detail => {
        return <div className="col">{<Card card={detail} />}</div>
      })}
    </div>
  )
}

export default App
