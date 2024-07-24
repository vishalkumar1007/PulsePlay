import React from 'react';
import { useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SignUp from './src/page/SignUp/SignUp';
import Login from './src/page/Login/Login'

function App(): React.JSX.Element {
  const [activePage , setActivePage] = useState();
  return (
    <SafeAreaView>
      {/* <Login/> */}
      <SignUp/>
    </SafeAreaView>
  );
}

export default App;