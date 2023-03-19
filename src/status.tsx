import { Text, View } from "react-native"

type statusprops ={
    status: string;

}
const status = (props: statusprops) =>{

    let message = '';

    if (props.status == 'loading') {
        message = 'loading';
    }else if (props.status == 'error') {
        message = 'error';
    }else if (props.status == 'success'){
        message = 'success and login proper credintials';
    }else{
        message = 'no data match';
    }

    
    return(
        <>
            <View>
                <Text> status {props.status} </Text>
                <Text> change and check message {message} </Text>
            </View>
        </>
    )
}


export default   status;