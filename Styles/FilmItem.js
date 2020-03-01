import { StyleSheet } from 'react-native';

export default StyleSheet.create({
main_container: {
  flex: 1,
  height: 190,
  flexDirection: 'row'

},
image_container: {
  flex: 1,
  width: 100,
  margin: 3,
},
text_container: {
  flex: 3,
  flexDirection: 'column',
  margin: 3,
},
header_container: {
  flexDirection: 'row',
  flex: 3,
  margin: 3,
},
title_text: {
  flex: 1,
  fontWeight: 'bold',
  fontSize: 20,
  flexWrap: 'wrap',
  paddingRight: 5
},
vote_text: {
  fontWeight: 'bold',
  fontSize: 26,
},
description_container: {
  flex: 7,
  margin: 3,
},
description_text: {
  fontStyle: 'italic',
  color: 'gray'
},
date_container: {
  flex: 1,
  margin: 3,
},
date_text: {
  textAlign: 'right',
  fontSize: 14
}
})
