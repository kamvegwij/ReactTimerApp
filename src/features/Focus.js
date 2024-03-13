import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { fontSizes, spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputContainer}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.buttonStyle}>
          <RoundedButton
            title={'+'}
            size={50}
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  textInputContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  buttonStyle: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.xl,
    justifyContent: 'top',
  },
});
