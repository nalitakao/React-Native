import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  //construtor
  constructor(props) {
    super(props);
    //definição de uma variável de estado
    this.state = {
      mensagem: "",
    };
  }

  mudouMensagem = msg => {
    //alteração do valor da variável de estado
    this.setState({ mensagem: msg});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputStyle} onChangeText={this.mudouMensagem} />
        {/*uso da variável de estado*/}
        <Text style={styles.textStyle}>{this.state.mensagem}</Text>
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    padding: 16,
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 32,
    padding: 5,
    marginBottom: 32,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
