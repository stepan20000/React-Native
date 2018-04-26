import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8
  },
  idWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  id: {
    fontSize: 20
  },
  titleWrapper: {
    backgroundColor: '#3CB371',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 26,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  body: {

  },
  postWrapper: {
    flex: 10,
    borderLeftWidth: 2,
    borderLeftColor: 'green',
    paddingLeft: 5
  }
});

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.idWrapper}>
        <Text style={styles.id}>{post.id}</Text>
      </View>
      <View style={styles.postWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{post.title}</Text>
        </View>
        <View>
          <Text>{post.body}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;