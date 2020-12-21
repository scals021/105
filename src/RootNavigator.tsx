import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleList, { examples } from './ExampleList';
import Menu105, { menus } from './menu';
import DefaultTheme from '../assets/styles/DefaultTheme';
import { Ionicons } from '@expo/vector-icons';


const alternativeColor2 = DefaultTheme.alternativeColor;
const alternativeColor = '#ffffff';
const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, scene, previous }) => (
          <Appbar.Header>
            {previous ? (
              <Appbar.BackAction onPress={() => navigation.goBack()} />
            ) : (navigation as any).openDrawer ? (
              <Appbar.Action
                onPress={() =>
                  ((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
                }
              />
            ) : null}
            <Appbar.Content
              color={alternativeColor}
              title={scene.descriptor.options.title}
            />

          </Appbar.Header>
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Menu105}
        options={{ title: '105 🎾' }}
      />
      {(Object.keys(menus) as Array<keyof typeof menus>).map((id) => (
        <Stack.Screen
          key={id}
          name={id}
          component={menus[id]}
          options={{ title: menus[id].title }}
        />
      ))}
    </Stack.Navigator>
  );
}
