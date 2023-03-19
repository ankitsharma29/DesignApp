import {View, Text} from 'react-native';

type PersonProps = {
  user: {
    name: string;
    age: number;
    cource: string;
  }
};


export default function Person(props: PersonProps) {
  return (
    <View>
      <Text>{props.user.name}</Text>
      <Text>{props.user.age}</Text>
      <Text>{props.user.cource}</Text>
    </View>
  );
}
