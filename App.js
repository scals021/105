export { default } from './src/index';
// import * as ScreenOrientation from 'expo-screen-orientation';
// ScreenOrientation.unlockAsync()


// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
// import React, { useState } from 'react';

// // import all the components we are going to use
// import { View, Text, Image, StyleSheet } from 'react-native';

// const App = () => {
//   const [align, setAlign] = useState('center');
//   const [alignsecond, setAlignsecond] = useState(false);

//   setTimeout(() => {
//     setAlign('flex-start'), setAlignsecond(true);
//   }, 3000);

//   return (
//     <View style={[styles.container, { justifyContent: align }]}>
//       <Image
//          source={{
//           uri:
//             'assets/images/17.jpg',}}
//         style={{ width: 100, height: 100 }}
//       />
//       {!alignsecond ? null : (
//         <View style={{ margin: 10 }}>
//           <Text >
//             105
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginHorizontal: 40,
//   },
// });
