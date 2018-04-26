import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import Post from './Post.component';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.setState({posts: [{id: 1, title: 'title', body: 'body'}]});
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

  // componentDidMount() {
  //   this.setState({posts: [{id: 1, title: 'title', body: 'body'}]});
  // }


  render() {
    const {posts} = this.state;
    return (
      <View>
        <StatusBar hidden={true}/>
        <Text>Posts</Text>
        <FlatList data={posts} renderItem={({item}) => (
          <Post post={item} />
        )}/>
      </View>
    );
  }
}

export default Posts;