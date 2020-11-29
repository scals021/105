import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleList, { examples } from './ExampleList';
import Menu105, { menus } from './menu';


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
                icon="menu"
                onPress={() =>
                  ((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
                }
              />
            ) : null}
            <Appbar.Content title={scene.descriptor.options.title} />
          </Appbar.Header>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Menu105}
        options={{ title: '105 🎾' }}
      />
      {(Object.keys(menus) as Array<keyof typeof menus>).map(id => (
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
