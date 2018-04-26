import React from "react";
import {Button, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class Todos extends React.Component {
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

export default Todos;
