// EXT
import React, { useState, useRef } from 'react';
import { ActivityIndicator, Button, TextInput, View, FlatList} from 'react-native';

// INT
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
import styles from '../Styles/Search'

export default function Search() {

  // REFERENCES
  const searchedText = useRef(null)
  const page = useRef(0)
  const totalPage = useRef(0)

  // STATES & REFERENCES
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  console.log("page ", page.current);

  // FUNCIONS
  function _searchTextInputChanged(text) {
    searchedText.current = text
  }

  function _loadFilms() {
    if (searchedText.current) {
      setLoading(true)
      getFilmsFromApiWithSearchedText(searchedText.current, page.current + 1)
        .then((data) => {
          page.current = page.current + 1;
          setFilms([...films, ...data.results]);
          setLoading(false)
        })
    } else {
      console.log("Empty searched text !");
    }
  }

  function _newSearch() {
    if ( films.length != 0 ) {
      setFilms([]);
      page.current = 0
      totalPage.current = 0
    }
    _loadFilms();
  }

  // RETURN
  return (

    <View style={styles.main_container}>
      <TextInput style = {styles.textinput}
                 placeholder = "Entrer le titre du film"
                 onSubmitEditing = { () => _newSearch()}
                 onChangeText = { (text) => _searchTextInputChanged(text) } />
      <Button title = "Rechercher" onPress = { () => _newSearch() } />
      <FlatList
        data = {films}
        keyExtractor = {(item) => item.id.toString()}
        onEndReachedThreshold = {0.5}
        onEndReached = { () => _loadFilms()}
        renderItem = {({item}) => <FilmItem film = {item} />}
      />
      { loading ?
        <ActivityIndicator size="large" color="#0000ff" />
      :
        <></>
      }


    </View>
  );
}
