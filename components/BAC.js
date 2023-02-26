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
        {/* <Text style={Styles.label} >Choose gender</Text>
        <Text style={Styles.label}>Female
          <Switch style={Styles.switch}
            value={isMale}
            onValueChange={toggleIsChecked}
          /> Male</Text> */}

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




/* 
  
  
    return (
      <div>
        <h1>Beermeter</h1>
        <p>This application is alcometer that estimates the level of alcohol in ones system <br /> It's calculated with the persons weight, time passed and the amount of servings consumed.</p>
        <form onSubmit={Beermeter}>
          <div>
  
            <div>
              <label>Weight</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label>Time passed</label>
              <select onChange={(e) => setTime(e.target.value)}>
                <option value="1">1</option>
                <option value="7">7</option>
              
              </select>
            </div>
            <label>Beer</label>
           
            <select onChange={(e) => setServing(e.target.value)}>
              <option type="number" value="3">3</option>
      
            </select>
          </div>
          <div>
          
            <label>Gender</label>
            <label><input type="radio" label="male" checked={isMale} defaultChecked onChange={(e) => setIsMale(e.target.value)} />Male</label>
            <label><input type="radio" label="female" checked={!isMale} onChange={(e) => setIsMale(!e.target.value)} />Female</label>
          </div>
       
          <button>Calculate</button>
        
          <div>
            <label>Amount of alcohol in the system:</label>
            <output>{result}</output>
          </div>
  
        </form>
  
      </div>
    );
  
 */
