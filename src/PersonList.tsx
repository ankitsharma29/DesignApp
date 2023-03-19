import {View, Text} from 'react-native';

type PersonListProps = {
  userslist: {
    name: string;
    age: number;
  }[];
};

export default function PersonListProps(props: PersonListProps) {
  return (
    <View>
      {props.userslist.map(item => {
        return (
          <>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </>
        );
      })}
    </View>
  );
}
