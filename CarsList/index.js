import React from 'react';
import {View, FlatList} from 'react-native';

import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
            /*FlatList : 출력해야 하는 데이터 양이 많은 경우, 모든 데이터를 한 번에 렌더링 하지 않고 보여지는 부분 혹은 수동으로 설정한 양 만큼의 데이터만 렌더링 되도록 하는 Comonent*/
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
            />
        </View>
    );
};

export default CarsList;