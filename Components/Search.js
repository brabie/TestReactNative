// EXT
import React, { useState } from 'react';
import { ActivityIndicator, Button, TextInput, View, FlatList} from 'react-native';

// INT
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
import styles from '../Styles/Search'

export default function Search() {

  // CONST & VARS
  var searchedText = ""

  // STATES
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  // FUNCIONS
  function _searchTextInputChanged(text) {
    searchedText = text
  }

  function _loadFilms() {
    setLoading(true)
    getFilmsFromApiWithSearchedText(searchedText).then((data) => {setFilms(data.results); setLoading(false)})
  }

  // RETURN
  return (

    <View style={styles.main_container}>
      <TextInput style = {styles.textinput}
                 placeholder = "Entrer le titre du film"
                 onSubmitEditing = { () => _loadFilms()}
                 onChangeText = { (text) => _searchTextInputChanged(text) } />
      <Button title = "Rechercher" onPress = { () => _loadFilms() } />
      { loading ?
        <ActivityIndicator size="large" color="#0000ff" />
      :
        <FlatList
          data = {films}
          keyExtractor = {(item) => item.id.toString()}
          renderItem = {({item}) => <FilmItem film = {item} />}
        />
      }
    </View>
  );
}
