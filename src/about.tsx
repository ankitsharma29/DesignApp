import {View, Text} from 'react-native';


interface about {
    value: string;
    number:number
}
export default function Home (props: about)  {
    return (
      <View>
        <Text>{props.value}</Text>
        <Text>{props.number}</Text>
      </View>
    );
  };