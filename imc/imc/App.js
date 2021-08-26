import React from 'react';
import { View, StyleSheet, StatusBar, TextInput, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
  }

  cliqueBotao = () => {
    const { nome } = this.state;
    if (!nome) {
      alert("Informe seu nome")
    }
    else {
      alert(nome);
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput style={styles.inputUser} placeholder={"Informe seu nome:"} onChangeText={nome => this.setState({ nome })} />
        
        <Button title="Clique-me" color="red" onPress={this.cliqueBotao} />
        {/*onPress={_ => alert("Botão pressionado.")}}
        <StatusBar style="auto" />
      </View>
     
    );
  }
}
*/
//Aplicativo IMC
  export default class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        txtPeso: "",
        txtAltura: "",
      };
    }

    calcular = () => {
      const {txtPeso, txtAltura} = this.state;
      const peso = parseFloat(txtPeso);
      const altura = parseFloat(txtAltura)

      if (Number.isNaN(peso) || Number.isNaN(altura)) {
        Alert.alert("Preencha os campos corretamente!");
        return;
      }
      
      const imc = peso/(altura*altura);
      let categoria = "";

      if (imc < 18.5) {
        categoria = "Abaixo do peso"
      }
      else if (18.5 <= imc < 25) {
        categoria = "Peso Adequado"
      }
      else if (25 <= imc < 30) {
        categoria = "Acima do peso"
      }
      else {
        categoria = "Obesidade"
      }

      alert(`IMC: ${imc.toFixed(1)} - ${categoria}`);
    }

    render() {
      return (
        <View style={styles.view} >
          <TextInput style={styles.inputUser} placeholder={"Peso"}
            onChangeText={peso => this.setState({txtPeso: peso})} 
            keyboardType="numeric" />

          <TextInput style={styles.inputUser} placeholder={"Altura"}
            onChangeText={altura => this.setState({txtAltura: altura})}
            keyboardType="numeric" />

          <Button title="CALCULAR" onPress={this.calcular} />

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
  inputUser: {
    marginBottom: 24,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    height: 30,
  },
  
});
