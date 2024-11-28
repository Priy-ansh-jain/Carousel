import { useState } from "react";
// Import SVGs if using module imports
import ShieldIcon from "../../../assets/Shield.svg";
import TimerIcon from "../../../assets/Timer.svg";
import WriteIcon from "../../../assets/write.svg";

const DropdownCard = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      label: "Difficulty Level",
      value: "Intermediate",
      icon: ShieldIcon, // Imported icon
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 2,
      label: "Duration Per Question",
      value: "90 Sec",
      icon: TimerIcon, // Imported icon
      options: ["60 Sec", "90 Sec", "120 Sec"],
    },
    {
      id: 3,
      label: "Type custom interview questions",
      value: " ",
      icon: WriteIcon, // Imported icon
      options: ["Option 1", "Option 2", "Option 3"],
      question1: "", // State for custom question 1
      question2: "", // State for custom question 2
      question3: "", // State for custom question 3
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const updateCardValue = (cardIndex, newValue) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].value = newValue;
    setCards(updatedCards);
    setSelectedCard(null);
  };

  const handleQuestionChange = (e, questionNumber) => {
    const updatedCards = [...cards];
    updatedCards[2][`question${questionNumber}`] = e.target.value; // Update specific question
    setCards(updatedCards);
  };

  const saveCustomQuestions = () => {
    // You can handle saving the questions here, for example, log them
    console.log({
      question1: cards[2].question1,
      question2: cards[2].question2,
      question3: cards[2].question3,
    });
    setSelectedCard(null); // Close the modal after saving
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="flex flex-col items-center justify-center w-[250px] sm:w-[350px] lg:w-[430px] h-[100px] rounded-lg shadow-md bg-gradient-to-r from-[#5C9AFF] via-[#5C9AFF] to-[#4a68a9] p-[2px] hover:shadow-lg hover:scale-105 transition transform duration-300 "
          onClick={() => setSelectedCard(index)}
        >
          <div className="flex items-center justify-center w-full h-full bg-white rounded-md px-10 cursor-pointer">
            {/* Render SVG image */}
            <img
              src={card.icon}
              alt={`${card.label} Icon`}
              className="w-8 h-8 mr-4"
            />
            <div className="flex flex-col justify-center ">
              <h3 className="text-2xl font-bold text-[#5C9AFF]">{card.label}</h3>
              <p className="text-gray-600 text-sm">{card.value || "Select"}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedCard !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="p-[2px] bg-gradient-to-r from-[#78a1df] via-[#6898ec] to-[#e0c1f2] rounded-lg shadow-xl">
            <div className="bg-white rounded-lg p-6 sm:w-[400px] lg:w-[607px] h-[330px] relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedCard(null)}
              >
                ✖
              </button>
              <h3 className="text-lg font-bold mb-4 text-center">
                {cards[selectedCard].label}
              </h3>
              <hr className="border-t-2 border-gray-300 my-4" />
              <form className="space-y-4">
                {selectedCard === 2 ? ( // Only for the third card
                  <>
                    {/* Write Question 1 */}
                    <div className="relative">
                      <input
                        type="text"
                        value={cards[selectedCard].question1}
                        onChange={(e) => handleQuestionChange(e, 1)}
                        placeholder="Question 1"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-gray-300"
                      />
                      <img
                        src={WriteIcon}
                        alt="Write Icon"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                      />
                    </div>

                    {/* Write Question 2 */}
                    <div className="relative">
                      <input
                        type="text"
                        value={cards[selectedCard].question2}
                        onChange={(e) => handleQuestionChange(e, 2)}
                        placeholder=" Question 2"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-[#EBEBEB]"
                      />
                      <img
                        src={WriteIcon}
                        alt="Write Icon"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                      />
                    </div>

                    {/* Write Question 3 */}
                    <div className="relative">
                      <input
                        type="text"
                        value={cards[selectedCard].question3}
                        onChange={(e) => handleQuestionChange(e, 3)}
                        placeholder=" Question 3"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-[#EBEBEB]"
                      />
                      <img
                        src={WriteIcon}
                        alt="Write Icon"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                      />
                    </div>

                    {/* Save Button */}
                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        onClick={saveCustomQuestions}
                        className="w-full sm:w-[80px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>

                  </>
                ) : selectedCard === 1 ? ( // For the second card (Duration)
                  <div className="relative">
                    <select
                      value={cards[selectedCard].value}
                      onChange={(e) => updateCardValue(selectedCard, e.target.value)}
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-[#EBEBEB]"
                    >
                      {cards[selectedCard].options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                  </div>
                ) : (
                  cards[selectedCard].options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`option-${selectedCard}`}
                        value={option}
                        checked={cards[selectedCard].value === option}
                        onChange={() => updateCardValue(selectedCard, option)}
                        className="form-radio text-black focus:ring-black"
                      />
                      <span
                        className={`text-sm ${cards[selectedCard].value === option
                          ? "font-bold text-black"
                          : ""
                          }`}
                      >
                        {option}
                      </span>
                    </label>
                  ))
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
