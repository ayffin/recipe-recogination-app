import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
  if(isSignedIn){
    return(
      <nav className="dt w-100 border-box shadow-5 pa3 ph5-ns">
          <p className="dtc v-mid mid-gray link dim w-25"  title="Home">
            <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
          </p>
          <div className="dtc v-mid w-75 tr">
            <p className="link dim dark-gray f2 f5-ns dib"
                onClick = {() => onRouteChange("signout")}
              >Sign Out</p>
          </div>
      </nav>
    )
  } else {
      return(
            <nav className="dt w-100 border-box pa3 ph5-ns">
              <p className="dtc v-mid mid-gray link dim w-25"  title="Home">
                <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
              </p>
              <div className="dtc v-mid w-75 tr">
                <p className="link dim dark-gray f2 f5-ns dib mr3 mr4-ns"
                    onClick = {() => onRouteChange("signin")}
                  >Sign In</p>
                <p className="link dim dark-gray f2 f5-ns dib" onClick = {() => onRouteChange("register")}>Register</p>
              </div>
          </nav>
      )
  }
}
export default Navigation;
