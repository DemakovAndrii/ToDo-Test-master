import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface CounterState {
  tasks: {selectDay: number; task: string}[];
}

const initialState: CounterState = {
  tasks: [],
};

export const getStorageTasks = createAsyncThunk('', async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    return JSON.parse(tasks as any);
  } catch (error) {
    console.error(error);
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{selectDay: number; task: string}>) => {
      state.tasks = [...state.tasks, action.payload];
      AsyncStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  extraReducers: builder => {
    builder.addCase(getStorageTasks.fulfilled, (state, action) => {
      state.tasks = action.payload || [];
    });
  },
});

export const {add} = counterSlice.actions;

export default counterSlice.reducer;
