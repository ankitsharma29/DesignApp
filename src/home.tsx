import {View, Text} from 'react-native';

interface Home {
  name: string;
  flag:boolean
}
export default function Home (props: Home)  {
  return (
    <View>
      {props.flag == true ? (<Text>{props.name}</Text>):(<Text>not log in</Text>)}
      
    </View>
  );
};
