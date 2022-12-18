import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Palette from '../styles/Palette';
// import { PanGestureHandler } from 'react-native-gesture-handler'
// import Animated, {
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue
// } from 'react-native-reanimated'
// import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerTypesCompat'

type Props = {
  task: string;
};

const TaskCard: FC<Props> = ({task}) => {
  const scheme = useColorScheme() === 'dark';
  const themeStyle = {
    backgroundColor: scheme
      ? Palette.darkTh.cardColor
      : Palette.lightTh.cardColor,
    color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
  };

  // const translateX = useSharedValue(0)

  // const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
  //   onActive: event => {
  //     translateX.value = event.translationX
  //   },
  //   onEnd: () => {}
  // })

  // const rStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateX: translateX.value
  //     }
  //   ]
  // }))

  return (
    // <PanGestureHandler onGestureEvent={panGesture}>

    /* <Animated.View style={rStyle}> */

    <View
      style={[styles.taskItem, {backgroundColor: themeStyle.backgroundColor}]}>
      <Text style={[styles.taskItemText, {color: themeStyle.color}]}>
        {task && task.length > 79 ? `${task.slice(0, 79)}...` : task}
      </Text>
    </View>

    // </Animated.View>
    // </PanGestureHandler>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  taskItem: {padding: 14, marginBottom: 10, borderRadius: 20},
  taskItemText: {fontSize: 18},
});
