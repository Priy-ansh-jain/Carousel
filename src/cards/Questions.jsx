import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState(['', '', '']); // Initialize with three empty input fields
  const [questionsList, setQuestionsList] = useState([]); // List to store added questions

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleInputChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleSaveQuestions = () => {
    // Save only non-empty questions to the list
    setQuestionsList([...questionsList, ...questions.filter(q => q.trim() !== '')]);
    setQuestions(['', '', '']); // Reset fields after saving
    toggleDialog(); // Close the dialog after saving
  };

  return (
    <>
      <div
        className="SelectionPanel"
        style={{
          width: 425.47,
          height: 106,
          paddingLeft: 24,
          paddingRight: 24,
          background: 'white',
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)',
          borderRadius: 10,
          border: '2px #5C9AFF solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 16,
          display: 'inline-flex'
        }}
        onClick={toggleDialog}
      >
        <div
          className="Frame1000008202 cursor-pointer"
          style={{
            flex: '1 1 0',
            height: 106,
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 16,
            display: 'flex',
            background: "none",
          }}
        >
          <svg
            style={{ width: 'fit-content', background: "white", }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.08335 6.72795H5.25077C4.27872 6.72795 3.34647 7.1141 2.65913 7.80145C1.97178 8.48879 1.58563 9.42104 1.58563 10.3931V26.8862C1.58563 27.8583 1.97178 28.7905 2.65913 29.4779C3.34647 30.1652 4.27872 30.5514 5.25077 30.5514H21.7439C22.716 30.5514 23.6482 30.1652 24.3356 29.4779C25.0229 28.7905 25.4091 27.8583 25.4091 26.8862V25.0537"
              stroke="#0072DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.1982 5.3067L26.8305 10.939M29.4308 8.28244C30.1702 7.54301 30.5856 6.54014 30.5856 5.49444C30.5856 4.44874 30.1702 3.44587 29.4308 2.70645C28.6914 1.96702 27.6885 1.55162 26.6428 1.55162C25.5971 1.55162 24.5942 1.96702 23.8548 2.70645L8.05615 18.4488V24.0811H13.6885L29.4308 8.28244Z"
              stroke="#0072DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className="Content"
            style={{
              flex: 1,
              height: '100%',
              padding: 16,
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: "white",
            }}
          >
            <div
              className="Heading flex flex-col justify-center"
              style={{
                color: '#5C9AFF',
                fontSize: 24,
                fontFamily: 'SF UI Text',
                fontWeight: 600,
                lineHeight: '28px',
                wordWrap: 'break-word',
                background: "white",
              }}
            >
              <span> Type custom interview questions </span>
              <span className='text-[15px] text-black font-bold'>{questionsList.length} Question{questionsList.length !== 1 ? 's' : ''} Added</span>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={toggleDialog}
        sx={{
          '& .MuiDialog-paper': {
            border: '4px solid #D388FF',
            borderRadius: '10px',
            boxShadow: '0px 0px 8px #D388FF',
            padding: '40px 24px',
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <div style={{ width: 'fit-content' }}>
            <svg
              onClick={toggleDialog}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ cursor: 'pointer' }}
              aria-hidden="true"
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
            textAlign: 'center',
            color: '#333232',
            fontSize: 32,
            fontFamily: 'SF UI Text',
            fontWeight: 600,
            padding: 0
          }}
        >
          Type custom interview questions
        </DialogTitle>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {questions.map((question, index) => (
            <div
              key={index}
              style={{
                padding: '16px',
                background: 'rgba(0, 0, 0, 0.05)',
                borderRadius: 10,

              }}
            >
              <input
                type="text"
                placeholder={`Question ${index + 1}`}
                value={question}
                onChange={(e) => handleInputChange(index, e)}
                style={{
                  width: '100%',
                  height: 36,
                  padding: '0 8px',
                  fontSize: 16,
                  borderRadius: 6,
                  border: '1px solid #ddd',
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleSaveQuestions}
            style={{
              backgroundColor: '#5C9AFF',
              color: 'white',
              padding: '10px 20px',
              fontSize: 16,
              borderRadius: 8,
              border: 'none',
            }}
          >
            Save Questions
          </button>
        </div>
      </Dialog >
    </>
  );
};

export default Questions;
