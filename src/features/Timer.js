import { React, useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import {Timing} from './Timing';

export const Timer = ({ currentSubject, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progressVal, setProgressVal] = useState(1);
  const [timerMinutes, setMinutes] = useState(0.1);

  const ONE_SEC_IN_MS = 1000;
  const PATTERN = [
    1* ONE_SEC_IN_MS,
    1* ONE_SEC_IN_MS,
    1* ONE_SEC_IN_MS,
    1* ONE_SEC_IN_MS,
    1* ONE_SEC_IN_MS,
  ];

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgressVal(1);
    reset();
    onTimerEnd(currentSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes = {timerMinutes}
          isPaused={!isStarted}
          onProgress={setProgressVal}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{currentSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm, paddingLeft: spacing.lg, paddingRight: spacing.lg }}>
        <ProgressBar
          color={colors.progressBarColor}
          style={{ height: spacing.sm }}
          progress={progressVal}
        />
      </View>
      <View style={styles.timeControlWrapper}>
        <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonwWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            size={125}
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            size={125}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
      
      <View style={styles.clearTimeWrapper}>
        <RoundedButton title='Stop' size={75} onPress={clearSubject}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonwWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeControlWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.lg,
  },
  clearTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
