import {View, Text} from 'react-native';

interface H {
  name: string;
}
export default function Home (props: H)  {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};
