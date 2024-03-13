import React from 'react'
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../components/RoundedButton';

export const Timing = ( {onChangeTime} ) => {
  return (
    <>
    <View style={styles.container}>
      <RoundedButton title="10" size={50} onPress={()=>{onChangeTime(10)}}/>
    </View>
    <View style={styles.container}>
      <RoundedButton title="15" size={50} onPress={()=>{onChangeTime(15)}}/>
    </View>
    <View style={styles.container}>
      <RoundedButton title="20" size={50} onPress={()=>{onChangeTime(20)}}/>
    </View>
    </>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});