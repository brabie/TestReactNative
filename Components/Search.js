import React from 'react';
import { StyleSheet, Button, TextInput, View} from 'react-native';

export default function Search() {
  return (
    <View>
      <TextInput style={styles.textinput} placeholder="Entrer le titre du film" />
      <Button title="Rechercher" onPress={ () => {} } />
    </View>
  );
}
const styles = StyleSheet.create({
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
