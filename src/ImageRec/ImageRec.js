import React from "react";
import "./ImageRec.css"

const ImageRec = ({imageUrl, box}) => {
  return(
    <div className = "" >
        <div className = "absolute ma3 mh7 w-70">
          <img id= "image" src ={imageUrl} alt= 'ingredients' width ="500px" height ="auto"/>

        </div>
        <div className="w-30  mr7">
          <ul className= "list  mt0 measure center" >
            <li className = "flex dib items-center lh-copy ph0-l bb b--black-10">
              <span className="f3 black-70">Ingredient</span>
              <span className="pl5 f3 ma2 black-70">Probablity</span>
            </li>
            {
              box.map(box => {
                return(
                  <li className = "flex dib items-center lh-copy  ph0-l bb b--black-10">
                    <span className="f3 db ">{box.name}</span>
                    <span className="pl5 f4 ma2">{box.value}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
  )
}
export default ImageRec;
