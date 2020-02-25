import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, FlatList} from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem'

export default function Search() {
  return (
    <View style={styles.main_container}>
      <TextInput style = {styles.textinput} placeholder = "Entrer le titre du film" />
      <Button title = "Rechercher" onPress = { () => {} } />
      <FlatList
      data = {films}
      keyExtractor = {(item) => {item.id.toString()}}
      renderItem = {({item}) => <FilmItem/>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main_container:{
    marginTop: 20,
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
