import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Difficulty = () => {
  const [open, setOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  const handleSelection = (level) => {
    setSelectedLevel(level); // Update selected level
    setOpen(false); // Close dialog on selection
    console.log(`Selected Difficulty: ${level}`);
  };

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Trigger Button (Selection Panel) */}
      <div
        className="SelectionPanel"
        onClick={toggleDialog}
        style={{
          width: 425,
          height: 106,
          paddingLeft: 24,
          paddingRight: 24,
          background: "white",
          borderRadius: 10,
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
          border: "2px #5C9AFF solid",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 16,
          display: "inline-flex",
          cursor: "pointer",
        }}
      >
        <div
          className="Frame1000008202 cursor-pointer"
          style={{
            flex: "1 1 0",
            height: 106,
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 16,
            display: "flex",
            background: "none",
          }}
        >
          <svg
            style={{ width: "fit-content", background: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1035 32.4483C16.1035 32.4483 28.9771 26.269 28.9771 17V4.64138L16.1035 1.55173L3.22998 4.64138V17C3.22998 26.269 16.1035 32.4483 16.1035 32.4483Z"
              stroke="#0072DC"
              strokeWidth="2.57471"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className="Content"
            style={{
              flex: 1,
              height: "100%",
              padding: 16,
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
            }}
          >
            <div
              className="Heading"
              style={{
                color: "#5C9AFF",
                fontSize: 24,
                fontFamily: "SF UI Text",
                fontWeight: 600,
                lineHeight: "28px",
                wordWrap: "break-word",
                background: "white",
              }}
            >
              Difficulty Level
            </div>
            {/* Display Selected Level */}
            <div
              style={{
                color: "#333232",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              {selectedLevel}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog with Difficulty Selector */}
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            border: "4px solid var(--logo-gr-Blue-to-pink, #D388FF)",
            borderRadius: "10px",
            boxShadow: "0px 0px 8px #D388FF",
          },
        }}
        open={open}
        onClose={toggleDialog}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 24,
            paddingRight: 24,
          }}
        >
          <div style={{ width: "fit-content" }}>
            <svg
              onClick={toggleDialog}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ alignSelf: "flex-end", cursor: "pointer" }}
            >
              <path
                d="M28.8336 3.16676C27.8211 2.1542 26.1795 2.1541 25.1669 3.16655L15.9987 12.3334L6.83302 3.16687C5.82052 2.15428 4.17885 2.15428 3.16635 3.16687V3.16687C2.15398 4.17933 2.15398 5.82075 3.16635 6.83321L12.3324 16L3.16635 25.1669C2.15398 26.1793 2.15398 27.8208 3.16635 28.8332V28.8332C4.17885 29.8458 5.82052 29.8458 6.83302 28.8332L15.9987 19.6667L25.1669 28.8335C26.1795 29.846 27.8211 29.8459 28.8336 28.8333V28.8333C29.846 27.8208 29.846 26.1793 28.8336 25.1668L19.6676 16L28.8336 6.83332C29.846 5.8208 29.846 4.17928 28.8336 3.16676V3.16676Z"
                fill="#0072DC"
              />
            </svg>
          </div>
        </div>

        <DialogTitle
          style={{
            textAlign: "center",
            color: "#333232",
            fontSize: 32,
            fontFamily: "SF UI Text",
            fontWeight: 600,
            padding: 0,
          }}
        >
          Difficulty Level
        </DialogTitle>
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <hr style={{ width: "85%", marginBottom: 24 }} />

          {/* Difficulty Options */}
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <div
              key={level}
              onClick={() => handleSelection(level)}
              style={{
                width: "80%",
                padding: "10px",
                cursor: "pointer",
                border:
                  selectedLevel === level
                    ? "2px solid #0072DC"
                    : "2px solid transparent",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <input
                type="radio"
                name="difficulty"
                value={level}
                checked={selectedLevel === level}
                onChange={() => handleSelection(level)}
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "#0072DC", // Custom color for modern browsers
                }}
              />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default Difficulty;
