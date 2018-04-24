import React from 'react';
import { Animated, StyleSheet, TextInput, StatusBar, TouchableHighlight, FlatList, Button, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class FadeOutView extends React.Component {
  state = { opacityAnimated:  new Animated.Value(0)};

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

class Main extends React.Component {
  state = {
    todos: [ { text: 'First todo', complete: false, key: '0' } ],
    userInput: '',
    nextId: 0
  };

  placeholder = 'Type text here';

  submitInput () {
    this.setState((prevState) =>({
      todos: [...prevState.todos, { text: prevState.userInput, complete: false, key: String(prevState.nextId + 1) }],
      userInput: '',
      nextId: prevState.nextId + 1
    }))
  }

  changeText (text) {
    this.setState((prevState) => ({ ...prevState, userInput: text }));
  }

  onComplete (id) {
    const newTodos = this.state.todos.slice();
    const todo = newTodos.find((todo) => todo.key === id );
    todo.complete = !todo.complete;

    this.setState((prevState) => (
      { ...prevState, todos: newTodos }
    ));
  }

  render() {
    const { userInput, todos } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <FlatList data={todos} renderItem={({item}) => (
          <TouchableHighlight onPress={() => this.onComplete.bind(this)(item.key)}>
            <Text
              style={item.complete ? { textDecorationLine: 'line-through'} : { textDecorationLine: 'none'}}
            >
              {item.text}
            </Text>
          </TouchableHighlight>
          )}/>
        <TextInput
          style={{width: 150, height: 50, backgroundColor: 'steelblue'}}
          placeholder={this.placeholder}
          value={userInput}
          onChangeText={this.changeText.bind(this)}/>
        <Button title={'submit1'} onPress={this.submitInput.bind(this)}/>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}

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
          <FadeOutView ref={(elem) => this.myRef = elem}>
            <Text>hello</Text>
          </FadeOutView>
          <Button title={ this.state.isView ? 'Hide' : 'Show'} onPress={this.toggleView.bind(this)}>Toggle View</Button>
        </View>
      );
  }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
              <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
              />
              <Button
                title="Go to About"
                onPress={() => this.props.navigation.navigate('About')}
              />
            </View>
        );
    }
}

export default TabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    About: { screen: Main }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
