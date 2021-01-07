import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Linking } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme,
} from 'react-native-paper';
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import DefaultTheme from  '../../assets/styles/DefaultTheme';


const accent_color = DefaultTheme.colors.accent

const Playlists = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: background }]}
      contentContainerStyle={styles.content}
    >
  
 
      <Card style={styles.card}>
        <Card.Cover source={require('../../assets/images/17.jpg')}/>
        <Card.Title title="Big Booty List 17" />
        <Card.Content>   
<Card.Actions>
       <Button onPress={() => {
    WebBrowser.openBrowserAsync('https://soundcloud.com/bigbootiemix/bb17');
  }}
  title="Press Me" color= {accent_color} icon='play' mode='contained'>
      Listen Now</Button>
      
      

    </Card.Actions>          
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover source={require('../../assets/images/17.jpg')}/>
        <Card.Title title="Big Booty List 17" />
        <Card.Content>   
<Card.Actions>
       <Button onPress={() => {
    WebBrowser.openBrowserAsync('https://soundcloud.com/bigbootiemix/bb17');
  }}
  title="Press Me" color= {accent_color} icon='play' mode='contained'>
      Listen Now</Button>
      
      

    </Card.Actions>          
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover source={require('../../assets/images/17.jpg')}/>
        <Card.Title title="Big Booty List 17" />
        <Card.Content>   
<Card.Actions>
       <Button onPress={() => {
    WebBrowser.openBrowserAsync('https://soundcloud.com/bigbootiemix/bb17');
  }}
  title="Press Me" color= {accent_color} icon='play' mode='contained'>
      Listen Now</Button>
      
      

    </Card.Actions>          
        </Card.Content>
      </Card>

    </ScrollView>
  );
};

Playlists.title = 'Playlists';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
});

export default Playlists;
