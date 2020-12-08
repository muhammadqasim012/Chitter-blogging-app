import React from "react";

import Slideshow from "react-native-image-slider-show";

export default class SlideshowTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url:
            "https://i.pinimg.com/originals/73/b5/3d/73b53de6be2e525fbee2f0c2104e3985.jpg"
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIVFBJmnL8pT3WnAW6wh8Cu2Ba0amfjzuzMgk3s0EO9eCyngPC"
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 4000)
    });
  }

  render() {
    return (
      <Slideshow
        indicatorSelectedColor="#DA251D"
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
      />
    );
  }
}
