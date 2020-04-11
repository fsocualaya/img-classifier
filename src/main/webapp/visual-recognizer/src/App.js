import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from "./component/Image";


class App extends Component {

  state = {
    images: []
  };

  componentDidMount() {
    const response = require('./res/images');
    this.setState({ images: response});
  }

  render(){
    const {images, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    // <img src={logo} className="App-logo" alt="logo" width={200}/>

    return (
        <div className="App">
          <header className="App-header">
            <h2>Image Classifier</h2>

            {images.map(image =>
              <Image id={image.id} url={image.url} name={image.name} key={image.id} />
            )}

          </header>
        </div>
    );
  }

}

export default App;
