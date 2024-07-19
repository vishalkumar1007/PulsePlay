import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SignUp from './src/page/SignUp/SignUp';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <SignUp/>
    </SafeAreaView>
  );
}

export default App;