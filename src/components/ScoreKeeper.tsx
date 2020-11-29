import * as React from 'react';
import Component from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
import {
  Avatar,
  Paragraph,
  Card,
  IconButton,
} from 'react-native-paper';

let count = 0
let redTitle = "Red: " + count.toString();
let history = [];
let position = 0;




const ScoreKeeper = () => {
  const { colors } = useTheme();
  state = { count: 0 };
  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
    
    <Card style={styles.card}>
        <Card.Title title= {redTitle} />
        <Card.Content>
        <Button
            mode="outlined"
            onPress={this.setCount}
            style={styles.button}
          >
          +1
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +5
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +10
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +20
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Blue: 90" />
        <Card.Content>
        <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +1
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +5
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +10
          </Button>
           <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
          >
          +20
          </Button>
        </Card.Content>
      </Card>
       <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
          >
          Undo
          </Button>
           <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
          >
          New Game
          </Button>
    </ScrollView>
  );
};

ScoreKeeper.title = 'Keep Score';

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
  },
});


export default ScoreKeeper;
