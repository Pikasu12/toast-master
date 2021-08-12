import React, { useState } from "react"
import "../App.css"

interface IProps {
  card: {
    number: number
    img: string
    name: string
  }
}

const Card: React.FC<IProps> = ({ card }) => {
  const [flip, setFlip] = useState<string>("card__inner")

  const flipHandler = () => {
    if (flip === "card__inner") {
      setFlip("card__inner is-flipped")
    } else {
      setFlip("card__inner")
    }
  }

  return (
    <>
      <div className="card" onClick={flipHandler}>
        <div className={flip}>
          <div className="card__face card__face--front">
            <p className="numbering">{card.number}</p>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                <img src={card.img} alt="" className="pp" />
                <h2>{card.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
