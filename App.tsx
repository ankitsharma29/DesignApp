import {View} from 'react-native';
import Home from './src/home';
import About from './src/about';
import Person from './src/person';
import PersonLists from './src/PersonList';

export default function App() {
  const data = {
    name: 'ankit',
    age: 10,
    cource: 'mca',
  };

  const PersonList = [
    {
      name: 'ankit',
      age: 20,
    },
    {
      name: 'aniket',
      age: 23,
    },
    {
      name: 'mohit',
      age: 22,
    },
    {
      name: 'ream',
      age: 24,
    },
  ];
  return (
    <View>
      <Home name="Home page" flag={false} />
      <About value="ankit sharma about page" number={60} />
      <Person user={data} />
      <PersonLists userslist={PersonList} />
    </View>
  );
}
