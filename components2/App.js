import React from 'react';
import { View, StyleSheet, StatusBar,TouchableOpacity, Text, Switch, ActivityIndicator, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import img from './assets/hourglass.png';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
    }
  }
 
  render() {
    return (
      <View style={styles.view}>
        
        <TouchableOpacity onPress={_ => alert('Pressionando')} activeOpacity={0.5}>
          <Text>Um texto clicável
          </Text>      
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 30}}>
          <Text>Ativar opção?</Text>
        <Switch value={this.state.isEnable}
        onValueChange={_ => this.setState({isEnable: !this.state.isEnable})} 
        thumbColor="red"
        trackColor={{false: "red", true: "green"}} />
        </View>

        <ActivityIndicator color="blue" size="large" />

        <ScrollView horizontal={false} onScrollEndDrag={_ => alert("fim")}>
          <Image source={img} />
          <Image source={img} />
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    padding: 16,
    marginTop: 20,
  },
});
