import AsyncStorage from '@react-native-async-storage/async-storage';
import {localStorageKeyType} from './types';

export const storeInterviewQuestionData = async (data: any) => {
  try {
    await AsyncStorage.setItem(
      localStorageKeyType.questionBookMarkedData,
      JSON.stringify(data),
    );
  } catch (error) {
    console.log('error storeInterviewQuestionData ->', error);
  }
};

export const getLocalStorageData = async (key: localStorageKeyType) => {
  try {
    const savedUser: any = await AsyncStorage.getItem(key);
    const currentUser = JSON.parse(savedUser);
    return currentUser;
  } catch (error) {
    console.log('error getLocalStorageData- >', error);
    return [];
  }
};

export const removeUser = async (key: localStorageKeyType): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearData = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
