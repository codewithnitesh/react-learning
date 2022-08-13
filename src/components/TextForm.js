import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    setText(text.trim());
    const upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLowercaseClick = () => {
    setText(text.trim());
    const upperText = text.toLowerCase();
    setText(upperText);
  };

  const handleClearTextClick = () => {
    setText('');
  };

  const handleTitleCaseClick = () => {
    setText(text.trim());

    const titleCaseText = text.replace(
        /\w\S*/g,
        function(word) {
          return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        }
    );
    
    setText(titleCaseText);
  };

  const handleCopyClick = () => {
    const myBoxElement = document.getElementById('myBox');
    myBoxElement.select();
    navigator.clipboard.writeText(myBoxElement.value);
  }

  const handleExtraSpacesClick = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText); 
  }

  const getWordsCount = () => {
    if (!text || !text.trim().length) {
      return 0;
    }

    return text?.trim().split(" ").length;
  };

  const getCharactersCount = () => {
    return text.trim().length;
  };

  return (
    <div 
    style={{
      color: props.mode === 'light' ? '#042743' : 'white',
    }}>
      <div className="container my-5">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            placeholder="Enter your text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'light' ? '#042743' : 'white',
            }}
          ></textarea>
        </div>
        <div className="buttons">
            <button className="btn btn-primary" onClick={handleUppercaseClick}>
              Convert to Uppercase
            </button>

            <button className="btn btn-primary" onClick={handleLowercaseClick}>
              Convert to Lowercase
            </button>

            <button className="btn btn-primary" onClick={handleTitleCaseClick}>
              Convert to Title Case
            </button>

            <button className="btn btn-primary" onClick={handleExtraSpacesClick}>
              Remove Extra Spaces
            </button>

            <button className="btn btn-primary" onClick={handleCopyClick}>
              Copy Text
            </button>

            <button className="btn btn-primary" onClick={handleClearTextClick}>
            Clear Text
            </button>
        </div>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <div>
          <p>
            <b>{getWordsCount()}</b> Words
          </p>
          <p>
            <b>{getCharactersCount()}</b> Characters (excluding whitespaces at
            the start and end of the text
          </p>

          <p>
            <b>{(0.008 * getWordsCount()).toFixed(2)}</b> Minutes to read
          </p>
        </div>
      </div>
      <div className="container">
        <h3>Preview</h3>
        <p className="my-2">{text}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter your text below",
};
