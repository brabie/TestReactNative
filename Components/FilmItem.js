import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';

export default function FilmItem() {
  return (
    <View style = {styles.main_container}>
      <Image
      style = {styles.image_container}
      source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />

      <View style = {styles.text_container}>

        <View style = {styles.header_container}>
          <Text style = {styles.title_text}> title </Text>
          <Text style = {styles.vote_text}> vote </Text>
        </View>

        <View style = {styles.description_container}>
          <Text style = {styles.description_text} numberOfLines = {6}> description </Text>
        </View>

        <View style = {styles.date_container}>
          <Text style = {styles.date_text}> date </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
main_container : {
  flex : 1,
  height : 190,
  flexDirection : 'row'

},
image_container : {
  flex : 1,
  width : 100,
  margin : 3,
  borderWidth : 0.4
},
text_container : {
  flex : 3,
  flexDirection : 'column',
  margin : 3,
  borderWidth : 0.4
},
header_container : {
  flexDirection : 'row',
  flex : 1.5,
  margin : 3,
  borderWidth : 0.4
},
title_text : {
  flex : 1,
  fontWeight : 'bold',
  fontSize : 20,
  flexWrap : 'wrap',
  paddingRight : 5
},
vote_text : {
  fontWeight : 'bold',
  fontSize : 26,
},
description_container : {
  flex : 4,
  margin : 3,
  borderWidth : 0.4
},
description_text : {
  fontStyle : 'italic'
},
date_container : {
  flex : 1,
  margin : 3,
  borderWidth : 0.4,
},
date_text : {
  textAlign: 'right',
  fontSize : 14
}
})
