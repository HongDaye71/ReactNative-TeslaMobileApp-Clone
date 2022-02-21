import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {

    const {type, content, onPress} = props;
    {/*type, contet, onPress : CarItem_index.js에서 별도지정될 수 있도록 선언*/}

    const backgroundColor = type === 'primary' ? '#171a20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171a20CC';
    /*Background Color, Text Color : CarItem_index.js에서 지정한 type에 따라 색상을 어떻게 설정할지 Setting*/

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor : backgroundColor}]}
                onPress={()=>onPress()}
            >
                <Text style={[styles.text, {color : textColor}]}>{content}</Text>
            </Pressable>
            {/*Background Color, Text Color, Content: 위에서 Setting한 type별 색상이 적용되도록 설정*/}
        </View>
    );
};

export default StyleButton;
