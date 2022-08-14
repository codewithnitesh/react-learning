import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    const newText = event.target.value.split(/^[ ]+[ ]$/).join(" ");

    setText(newText);
  };

  const handleUppercaseClick = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("success", "Text successfully converted to upper case");
  };

  const handleLowercaseClick = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("success", "Text successfully converted to lower case");
  };

  const handleClearTextClick = () => {
    setText('');
    props.showAlert("success", "Text cleared successfully");
  };

  const handleTitleCaseClick = () => {
    const titleCaseText = text.replace(
        /\w\S*/g,
        function(word) {
          return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        }
    );
    
    setText(titleCaseText);
      props.showAlert("success", "Text successfully converted to title case");
    };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Text successfully copied to clipboard");
  }

  const handleExtraSpacesClick = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText); 
    props.showAlert("success", "Removed extra white spaces from the text");
  }

  const getWordsCount = () => {
    if (!text || !text.trim().length) {
      return 0;
    }

    return text?.trim().split(/\s+/).length;
  };

  const getCharactersCount = () => {
    return text.trim().length;
  };

  return (
    <div 
    style={{
      color: props.mode === 'light' ? '#042743' : 'white',
    }}>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'light' ? '#042743' : 'white',
            }}
          ></textarea>
        </div>
        <div className="buttons">
            <button disabled={!text.length} className="btn btn-primary" onClick={handleUppercaseClick}>
              Convert to Uppercase
            </button>

            <button disabled={!text.length} className="btn btn-primary" onClick={handleLowercaseClick}>
              Convert to Lowercase
            </button>

            <button disabled={!text.length} className="btn btn-primary" onClick={handleTitleCaseClick}>
              Convert to Title Case
            </button>

            <button disabled={!text.length} className="btn btn-primary" onClick={handleExtraSpacesClick}>
              Remove Extra Spaces
            </button>

            <button disabled={!text.length} className="btn btn-primary" onClick={handleCopyClick}>
              Copy Text
            </button>

            <button disabled={!text.length} className="btn btn-primary" onClick={handleClearTextClick}>
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
        <p className="my-2">{text.length ? text : 'Nothing to preview'}</p>
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
