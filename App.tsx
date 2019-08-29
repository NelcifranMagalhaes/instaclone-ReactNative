import React from 'react';
import { Text, View, Image, Dimensions, ScrollView} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const photo = [ {id: 1, user: 'Sasuke'}, 
  {id: 2, user: 'Naruto'},
  {id: 3, user: 'Deidara'}];
export default function App() {
  return (
    <ScrollView style = {{marginTop: 20}}>
      {photo.map(f => 
        <View key={f.id}>
          <Text>{f.user}</Text>
          <Image source={require('./resources/img/sasuke.png')}
          style={{width: width, height: height}}/>
        </View>
      )}
    </ScrollView>
  );
}

