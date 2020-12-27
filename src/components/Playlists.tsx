import * as React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme,
} from 'react-native-paper';
import { WebView } from 'react-native-webview';
import Iframe from 'react-iframe'

const Playlists = () => {
  const {
    colors: { background },
  } = useTheme();

const iframeString2 = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1031034793&color=%23161828&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bigbootiemix" title="Two Friends Big Bootie Mix" target="_blank" style="color: #cccccc; text-decoration: none;">Two Friends Big Bootie Mix</a> · <a href="https://soundcloud.com/bigbootiemix/sets/two-friends-big-bootie-mixes" title="Two Friends Big Bootie Mixes" target="_blank" style="color: #cccccc; text-decoration: none;">Two Friends Big Bootie Mixes</a></div>'

const iframeString = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1031034793&color=%23161828&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: background }]}
      contentContainerStyle={styles.content}
    >
  
 
      <Card style={styles.card}>
        <Card.Cover source={require('../../assets/images/wrecked-ship.jpg')} />
        <Card.Title title="Abandoned Ship" />
        <Card.Content>
          <Paragraph>
            The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
            originally being a ship named the S.S. Cactus. The second part of
            the ship can only be accessed by using Dive and contains the
            Scanner.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Cover source={iframeString} />
        <Card.Content>
        <Iframe  url="http://www.youtube.com/embed/xDMP3i36naA"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"
    allowFullScreen/>

        <Paragraph>
        {iframeString}
        </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {}}>Share</Button>
          <Button onPress={() => {}}>Explore</Button>
        </Card.Actions>
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
