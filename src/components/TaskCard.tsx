import {Text, useColorScheme, View, StyleSheet, Dimensions} from 'react-native';
import React, {FC, useState} from 'react';
import Palette from '../styles/Palette';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Trash from '../icons/Trash';

type Props = {
  task: string;
  completed: boolean;
  onDismiss: void;
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.15;
// const TRANSLATE_X_CHECKED = SCREEN_WIDTH * 0.15;

const TaskCard: FC<Props> = ({
  task,
  completed,
  onDismiss,
  simultaneousHandlers,
}) => {
  const scheme = useColorScheme() === 'dark';
  const themeStyle = {
    backgroundColor: scheme
      ? Palette.darkTh.cardColor
      : Palette.lightTh.cardColor,
    color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
  };
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(70);
  // const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        // marginVertical.value = withTiming(10);
        opacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
      // const checkd = translateX.value > TRANSLATE_X_CHECKED;
      // if (checkd) {
      //   console.log('checked');
      // } else {
      //   translateX.value = withTiming(0);
      // }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      // marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[rTaskContainerStyle, styles.container]}>
      <Animated.View style={[styles.iconContainer]}>
        <Trash color={'red'} height={40} />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View
          style={[
            rStyle,
            styles.taskItem,
            {backgroundColor: themeStyle.backgroundColor},
          ]}>
          <Text style={[styles.taskItemText, {color: themeStyle.color}]}>
            {task && task.length > 100 ? `${task.slice(0, 100)}...` : task}
          </Text>
          {/* <Text onPress={test} style={{color: themeStyle.color}}>
            {completed ? '++++++++++++++++' : '----------------'}
          </Text>
          <Text style={{color: themeStyle.color}}>delete</Text> */}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', height: '100%'},
  taskItem: {
    padding: 14,
    marginBottom: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskItemText: {fontSize: 18},
  iconContainer: {
    height: '100%',
    position: 'absolute',
    right: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
