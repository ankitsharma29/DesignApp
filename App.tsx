import {View} from 'react-native';
import Home from './src/home';
import About from './src/about';

export default function App() {
  return (
    <View>
      <Home name="Home page" />
      <About value="ankit sharma about page" />

    </View>
  );
}
