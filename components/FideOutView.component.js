import React from "react";
import {Animated, View} from "react-native";

class FadeOutView extends React.Component {
  state = { opacityAnimated:  new Animated.Value(0)}

  show = () => {
    Animated.timing(
      this.state.opacityAnimated,
      {
        toValue: 1,
        duration: 2000
      }
    ).start();
  };

  hide =  () => {
    Animated.timing(
      this.state.opacityAnimated,
      {
        toValue: 0,
        duration: 2000
      }
    ).start();
  };


  render () {
    const { style } = this.props;
    const { opacityAnimated } = this.state;
    return (
      <Animated.View style={{...style, opacity: opacityAnimated }}>
        <View>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

export default FadeOutView;