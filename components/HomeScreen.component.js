import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import FadeOutView from "./FideOutView.component";

class HomeScreen extends React.Component {

  state = {
    isView: false
  };

  toggleView = () => {
    if (this.state.isView) {
      this.myRef.hide();
      this.setState({isView: false});
    } else {
      this.myRef.show();
      this.setState({isView: true});
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <FadeOutView ref={(elem) => this.myRef = elem}>
          <Text>hello</Text>
        </FadeOutView>
        <Button title={ this.state.isView ? 'Hide' : 'Show'} onPress={this.toggleView.bind(this)}>Toggle View</Button>
      </View>
    );
  }
}

export default HomeScreen;
