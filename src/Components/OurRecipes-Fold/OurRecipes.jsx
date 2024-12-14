import {useState } from "react";
import Cards from "../Cards-Fold/Cards";
import Cooking from "../Cooking-Fold/Cooking";
import RecipeTitle from "./RecipeTitle";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLs } from "../utilities/localStore";

const OurRecipes = () => {

  const [cooks, setCooks] = useState([])

  const handleCookClick = (cookClick,id) => {
    const pureId = cooks.find(i => i.id == id)
    if (pureId) {
      toast.error('This item is already added!', {
        position: 'top-right',
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    else {
      const newCook = [...cooks, cookClick];
      setCooks(newCook);
      addToLs(id)
    }
  }

  const handleRemove = id => {
    const romaing = cooks.filter(i => i.id !== id);
    setCooks(romaing);
  };

  return (
    <div>
      <section className="mb-24">
        <RecipeTitle></RecipeTitle>

        {/* Cards part start */}

        <div className="flex gap-6">
          <Cards handleCookClick={handleCookClick}></Cards>
          <Cooking cook={cooks} handleRemove={handleRemove}></Cooking>
        </div>
      </section>
    </div>
  );
};

export default OurRecipes;
