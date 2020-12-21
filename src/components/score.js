import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView, Image } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';


// TODO: Abstract Score Keeping
// TODO: Learn Horizontal Screen Mode
// TODO: Add BLue 
// TODO: Button Styling Colro




class Counter extends React.Component {
  state = { redScore: 0, blueScore:0, redScoreHistory: [], blueScoreHistory:[] };

  incramentScoreRed = (num) => this.setState(
    prevState => ({ ...prevState, redScore: this.state.redScore + num })
  )
  
  incramentScoreBlue = (num) => this.setState(
    prevState => ({ ...prevState, blueScore: this.state.blueScore + num })
  )
  resetCount = () => this.setState(
    prevState => ({ ...prevState, redScore: 0 , blueScore:0 })
  )
  
  
  render() {
    const { redScore } = this.state;
    const { redScoreHistory } = this.state;
    const { Blu } = this.state;
    const { blueScore } = this.state;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        row: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 12,
        },
        button: {
          margin: 4,
        }});
    // const { colors } = useTheme();
    const styles2 = StyleSheet.create({
        redscoreStyle: { fontSize: 25, color: '#FF6700', fontWeight: 'bold' },
        blueScoreStyle: { fontSize: 25, color: '#04d9ff', fontWeight: 'bold' }
        });
    return (
       <ScrollView
      style={[styles.container]}>
      <View style={[styles.bg]}>
      <List.Section >
      <Text style={styles2.redscoreStyle}>Orange: {redScore}</Text>   
      <Text> {redScoreHistory} </Text>    
      <View style={styles.row}>   
      <Button style={styles.button} onPress={ () => {this.incramentScoreRed(1)}} mode =               "contained">
          +1
          </Button>
          <Button style={styles.button} onPress={ () => {this.incramentScoreRed(5)}} mode =               "contained">
          +5
          </Button>
          <Button style={styles.button} onPress={ () => {this.incramentScoreRed(10)}} mode =               "contained">
          +10
          </Button>
           <Button style={styles.button} onPress={ () => {this.incramentScoreRed(20)}} mode =               "contained">
          +20
          </Button>
          <Button style={styles.button} onPress={ () => {this.incramentScoreRed(-1)}} mode =               "contained">
          -1
          </Button>
          </View>
          </List.Section>
           <Text style={styles2.blueScoreStyle}>Blue: {blueScore}</Text> 
           <View style={styles.row}>           
           <Button style={styles.button} onPress={ () => {this.incramentScoreBlue(1)}} mode =               "contained">
          +1
          </Button>
          <Button style={styles.button} onPress={ () => {this.incramentScoreBlue(5)}} mode =               "contained">
          +5
          </Button>
          <Button style={styles.button} onPress={ () => {this.incramentScoreBlue(10)}} mode =               "contained">
          +10
          </Button>
           <Button style={styles.button} onPress={ () => {this.incramentScoreBlue(20)}} mode =               "contained">
          +20
          </Button>
          </View>


          <View style={[styles.bg]} height={100}>
           <Button style={styles.button} onPress={this.resetCount} mode =               "outlined">
          ResetGame
          </Button>
      
          </View>
      </View></ScrollView>
    )
  }
}

Counter.title = "Keep Score"

const KeepScore = () => (
  
  <Counter />
  
);

export default Counter;