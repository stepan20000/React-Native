import React from 'react';
import {Text, View} from 'react-native';

const Post = ({post}) => {
  return (
    <View>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

export default Post;