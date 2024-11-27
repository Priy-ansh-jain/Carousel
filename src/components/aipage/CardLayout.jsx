import { useState } from "react";

const CardLayout = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      label: "Difficulty lvl",
      icon: "🛡️",
      bgColor: "bg-orange-100",
      options: ["Begineer", "Intermediate", "Advanced"],
    },
    {
      id: 2,
      label: "Duration Per Question",
      icon: "⏲️",
      bgColor: "bg-gray-100",
      options: ["60 Sec", "90 Sec", "120 Sec"],
    },
    {
      id: 3,
      label: "Type your custom interview question here...",
      icon: "✏️",
      bgColor: "bg-gray-100",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (cardIndex) => {
    setSelectedCard(selectedCard === cardIndex ? null : cardIndex);
  };

  // Update card value on selecting an option
  const updateCardValue = (cardIndex, newValue) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].value = newValue;
    setCards(updatedCards);
    setSelectedCard(null); // Close the dropdown
  };

  return (
    <div className="flex space-x-4 justify-center">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`flex flex-col w-64 h-14 px-4 py-2 ${card.bgColor} rounded-lg shadow-md relative`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{card.icon}</span>
              <div>
                <div className="text-xs text-gray-500">{card.label}</div>
                <div className="text-sm font-medium">{card.value || "Select"}</div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform ${selectedCard === index ? "rotate-180" : ""
                }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414L9.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {selectedCard === index && (
            <div className="absolute top-16 left-0 w-full bg-white h-14 rounded-lg z-10">
              <ul className="py-2">
                {card.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="p-3 hover:bg-gray-100 cursor-pointer rounded-lg border border-gray-300 mt-1 "
                    onClick={() => updateCardValue(index, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
