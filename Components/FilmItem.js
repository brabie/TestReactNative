// EXT
import React from 'react'
import { View, Text, Image } from 'react-native';

// INT
import styles from '../Styles/FilmItem'
import { getImageFromApi } from '../API/TMDBApi'

export default function FilmItem(props) {
  
  const film = props.film

  return (
    <View style = {styles.main_container}>

      <Image
        style = {styles.image_container}
        source = {{uri: getImageFromApi(film.poster_path)}}
      />

      <View style = {styles.text_container}>

        <View style = {styles.header_container}>
          <Text style = {styles.title_text}> {film.title} </Text>
          <Text style = {styles.vote_text}> {film.vote_average} </Text>
        </View>

        <View style = {styles.description_container}>
          <Text style = {styles.description_text} numberOfLines = {6}> {film.overview} </Text>
        </View>

        <View style = {styles.date_container}>
          <Text style = {styles.date_text}> Sortie le: {film.release_date} </Text>
        </View>
      </View>

    </View>
  );
}
