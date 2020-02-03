import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

// functions don't have state or life cycle methods...that's why class is used

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = { photos: [] };

  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received
  componentDidMount() {
    fetch(PHOTO_LIST_URL).then(response => response.json()).then(photoData => {
      this.setState({ photos: photoData });
    });
  }

  render() {
    // same as const photos = this.state.photos
    const { photos = [] } = this.state;   // destructuring syntax
    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>
        </header>
        
        <div className="collage">
          {/* We use map here because Array.prototype.map is an expression,
           * and for loops are not. You'll learn more about this soon!
           */}
          {photos.map(photo => (
            
            <img
              className='photos1'
              alt={photo.filename}
              key={photo.id}
              src={PHOTO_URL(photo.id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
