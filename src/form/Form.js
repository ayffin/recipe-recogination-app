import React from "react";
import "./Form.css"

const Form = ({onInputChange,onSubmit}) => {
  return(
    <div className= "">
        <p className ="f3 ma3">
          {'This magic brain will detect ingredients in your pictures'}
        </p>
        <div className = "ma3 cen">
          <div className ='shadow-5 pa4 br3 form'>
            <input type ="text"
              className = "w-70 pa2 f4 center"
              onChange ={onInputChange}
            />
            <button
              className ='w-30 f4 grow pa2 ph3 pv2 white bg-light-red dib'
              onClick = {onSubmit}
              >Detect</button>
          </div>
        </div>
  </div>
  )
}
export default Form;
