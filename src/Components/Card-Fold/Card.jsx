import { MdOutlineWatchLater } from 'react-icons/md';
import { AiTwotoneFire } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Card = ({ cardArg, handleCookClick }) => {
  const { id, img, title, description, ingredients, minutes, calories } = cardArg;
  
  return (
    <div className="p-6 border border-[#28282833] rounded-2xl">
      <img className="w-full h-[200px] rounded-2xl" src={img} alt="" />
      <div className="mt-6 mb-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-normal text-[#878787] text-base mt-4">
          {description}
        </p>
      </div>
      <div className="mt-6">
        <div className="mb-4 ">
          <div className='flex-grow'>
            {
              <h3 className="font-normal text-[#282828] text-lg">
                Ingredients: {ingredients.length}
              </h3>
            }

            <ul className="mt-4 h-full pl-4">
              {ingredients.map((i, idx) => (
                <li
                  key={idx}
                  className="list-disc font-medium text-[#878787] text-lg"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="flex gap-4 text-base font-normal text-[#282828cc]">
            <p className="flex items-center gap-2">
              <MdOutlineWatchLater />
              <span>{minutes} minutes</span>
            </p>
            <p className="flex items-center gap-2">
              <AiTwotoneFire />
              <span>{calories} calories</span>
            </p>
          </div>
          <button
            onClick={() => {
              handleCookClick(cardArg, id);
            }}
            className="bg-[#0BE58A] font-medium text-lg py-3 px-6 mt-6 rounded-full text-[#150B2B] border "
          >
            Want to Cook
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Card;
