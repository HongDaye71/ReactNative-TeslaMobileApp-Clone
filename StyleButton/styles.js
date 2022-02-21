import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:10,
    },

    button: {
        height:40,
        borderRadius:20, /*Button radius설정*/
        justifyContent : 'center', /*vertical기준 : Text Center*/
        alignItems :'center', /*Horizontal기준 : Text Center*/
    },

    text: {
        fontSize:12,
        fontWeight:'500',
        textTransform:'uppercase', /*대문자 세팅*/
    }
});

export default styles;