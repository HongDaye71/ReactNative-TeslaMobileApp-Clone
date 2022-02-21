import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './CarsList'; 

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      {/*CarsList(스크롤링 시 나타날 3개 페이지 내 정보)*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
