import React from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import Post from './Post.component';


const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    paddingLeft: 20,
  },
  list: {
    padding: 8,

  }
});

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState({posts: res});
      })
      .catch((err) => {
        alert('Can not fetch posts', err.message);
      });
  }

  render() {
    const {posts} = this.state;
    return (
      <View>
        <StatusBar hidden={true}/>
        <Text style={styles.header}>Posts</Text>
        <FlatList
          style={styles.list}
          data={posts}
          renderItem={({item}) => (
            <Post key={item.id} post={item} />
          )}
          keyExtractor={(item, index) => String(index)}/>
      </View>
    );
  }
}

export default Posts;