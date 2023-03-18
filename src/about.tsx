import {View, Text} from 'react-native';


interface about {
    value: string;
}
export default function Home (props: about)  {
    return (
      <View>
        <Text>{props.value}</Text>
      </View>
    );
  };