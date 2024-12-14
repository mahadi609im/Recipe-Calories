import { useState } from "react";

const Cooking = ({ cook, handleRemove }) => {
  const [prepare, setPrepare] = useState([]);
  const [prepareTime, setPrepareTime] = useState(0);
  const [prepareCalories, setprepareCalories] = useState(0);

  const handlePrepareClick = (preparing, time, calory) => {
    const newPrepare = [...prepare, preparing];
    setPrepare(newPrepare);

    const newPrepareTime = prepareTime + time;
    setPrepareTime(newPrepareTime);

    const newPrepareCalories = prepareCalories + calory;
    setprepareCalories(newPrepareCalories);
  };

  return (
    <div>
      <div className="w-[512px] border border-[#28282833] pb-32">
        <div>
          <div className="mt-8 mb-6">
            <h3 className="font-semibold text-2xl text-[#282828] text-center">
              Want to cook: {cook.length}
            </h3>
          </div>
          <div>
            <div className="overflow-x-hidden">
              <table className="min-w-full text-left">
                <thead className="bg-gray-100 border-b border-b-gray-300 text-[#878787] font-medium text-base">
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Calories</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cook.map((cookClick, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 text-[#282828b3] text-base font-normal"
                    >
                      <td className="px-4 py-2 text-[#282828cc]">
                        {cookClick.id}
                      </td>
                      <td className="px-4 py-2">{cookClick.title}</td>
                      <td className="px-4 py-2">{cookClick.minutes} minutes</td>
                      <td className="px-4 py-2">
                        {cookClick.calories} calories
                      </td>
                      <td className="px-4 py-2 text-green-600">
                        <button
                          onClick={() => {
                              handlePrepareClick(
                                cookClick,
                                cookClick.minutes,
                                cookClick.calories
                              );
                              handleRemove(cookClick.id);
                            }
                          }
                          
                          className="font-medium text-base text-[#150B2B] rounded-full bg-[#0BE58A] py-[9px] px-[18px]"
                        >
                          Preparing
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 mb-6">
            <h3 className="font-semibold text-2xl text-[#282828] text-center">
              Currently cooking: {prepare.length}
            </h3>
          </div>
          <div>
            <div className="overflow-x-hidden">
              <table className="min-w-full text-left">
                <thead className="bg-gray-100 border-b border-b-gray-300 text-[#878787] font-medium text-base">
                  <tr>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Calories</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {prepare.map(prepareClick => (
                    <tr
                      key={prepareClick.id}
                      className="hover:bg-gray-50 text-[#282828b3] text-base font-normal"
                    >
                      <td className="px-4 py-2 text-[#282828cc]">
                        {prepareClick.id}
                      </td>
                      <td className="px-4 py-2">{prepareClick.title}</td>
                      <td className="px-4 py-2">
                        {prepareClick.minutes} minutes
                      </td>
                      <td className="px-4 py-2">
                        {prepareClick.calories} calories
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex ml-[50%] mt-4 w-[230px] text-base font-medium text-[#282828cc]">
                <p className="">Total Time = {prepareTime} minutes</p>
                <p className="">Total Calories = {prepareCalories} calories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
