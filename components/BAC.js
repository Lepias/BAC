import React, { useState } from "react";
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { RadioButton } from 'react-native-paper';
import Styles from "../styles/Styles";


export default BAC = () => {
  const [radio, setRadio] = useState('male')
  const [beer, setServing] = useState(0);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  
  
  function CBA() {
    let promille;
    const litres = Number(beer) * 0.33;
    const grams = Number(litres) * 8 * 4.5;
    const burning = Number(weight) / 10;
    const gramsleft = grams - burning * time;

    if (weight > 0) {
      if (radio =='male') {
        promille = gramsleft / (weight * 0.7);
      }
      else {
        promille = gramsleft / (weight * 0.6);

      }
      if (promille < 0) {
        setResult(0);
      }
      else {
        setResult(promille.toFixed(2));
      }
    } else {
      Alert.alert("please input your weight")
    }

  }
  return (
    <ScrollView style={[Styles.bgc]} >
      <View style={[Styles.container]}>
        <Text style={Styles.header}> Alcometer</Text>
        {/* Body weigth*/}
        <Text style={Styles.label} >Set your weight(kg)</Text>
        <TextInput style={Styles.textInput} keyboardType="number-pad"
          type="number"
          value={weight}

          onChangeText={setWeight}
        />

        {/* Consumed alcohol */}
        <Text style={Styles.label}>Bottles</Text>
        <NumericInput type="up-down" minValue={0}
          value={beer}
          onChange={setServing}
        />

        {/* Time passed  */}
        <Text style={Styles.label} >Hours</Text>
        <NumericInput type="up-down" minValue={0}
          value={time}
          onChange={setTime}
        />
        {/* Select gender */}

<RadioButton.Group onValueChange={newValue=>setRadio(newValue)} value={radio}>
          <View style={Styles.radioStyle}>
            <RadioButton value='male' />
              <Text style={Styles.label}>Male</Text>
              
          </View>
          <View style={Styles.radioStyle}>
            <RadioButton value='female'/>
              <Text style={Styles.label}>Female</Text>
          </View>
        </RadioButton.Group>
    
        <Pressable style={Styles.Button} onPress={CBA}>
          <Text style={Styles.BT}>Calculate</Text>
        </Pressable>
        {/* <Button style={Styles.Button} title="Calculate" onPress={CBA} /> */}
        <Text style={Styles.result}> {result}</Text>
      </View>
    </ScrollView>
  );
}



