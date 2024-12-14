import { useEffect, useState } from "react";
import Card from "../Card-Fold/Card";

const Cards = ({ handleCookClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6">
        {cards.map(card => (
          <Card key={card.id} cardArg={card} handleCookClick={handleCookClick}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;