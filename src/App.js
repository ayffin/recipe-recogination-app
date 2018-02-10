import React, { Component } from 'react';
import "tachyons";
import './App.css';
import Form from "./form/Form";
import Navigation from "./Navigation/Navigation";
import ImageRec from "./ImageRec/ImageRec";
import Signin from "./Signin/Signin";
import Register from "./Register/Register";

import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'f6df1f3d07fe4baca78600c3de7bde53'
});

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      ImageUrl: "",
      Box: [],
      route: "signin",
      isSignedIn: false
    }
  }

  onInputChange = (event) => this.setState({input: event.target.value});
  onfaceRecogniation = (data) => data.rawData.outputs[0].data.concepts;
  onBox = (box) => this.setState({Box:box});

  onButtonSubmit = () => {
    this.setState({ImageUrl: this.state.input});
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input)
    .then((response) => this.onBox(this.onfaceRecogniation(response)))
    .catch(err => console.log(err))


  }

  onRouteChange = (route) =>{
    if(route === "home"){
      this.setState({isSignedIn: true})
    }else {
      this.setState({isSignedIn:  false})
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn ={this.state.isSignedIn}/>
        {
          this.state.route === "home"
            ?  <div>
                <Form
                  onInputChange={this.onInputChange}
                  onSubmit = { this.onButtonSubmit}
                />
                <ImageRec
                  imageUrl = {this.state.ImageUrl}
                  box = {this.state.Box}
                />
              </div>
            : (
                this.state.route === "signin"
                  ? <Signin onRouteChange= {this.onRouteChange}/>
                  :<Register onRouteChange= {this.onRouteChange}/>
            )

        }
      </div>
    );
  }
}

export default App;
