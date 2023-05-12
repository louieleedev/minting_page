import React from "react";
import "./Spinner.css";

function Spinner() {
  {
    /** HERE: WE HAVE TO IMPORT THE JS-SCRIPT FILE (spinnerFunction.js) FOR THE FUNCTIONALLITY */
  }

  return (
    <div>
      <div class="ctrl">
        <div class="ctrl__button ctrl__button--decrement">&ndash;</div>
        <div class="ctrl__counter">
          <input
            class="ctrl__counter-input"
            maxlength="9999"
            type="text"
            value="1"
          />
          <div class="ctrl__counter-num">1</div>
        </div>
        <div class="ctrl__button ctrl__button--increment">+</div>
      </div>
    </div>
  );
}

export default Spinner;
