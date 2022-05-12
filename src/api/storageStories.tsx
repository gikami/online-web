import AsyncStorage from '@react-native-async-storage/async-storage';

//Общая лента новостей
export async function getStorageNewsStories() {
  const stories = await AsyncStorage.getItem('newsStories');
  return stories ? JSON.parse(stories) : false;
}
export async function setStorageNewsStories(stories: any) {
  if (!stories) {
    return false;
  }
  await AsyncStorage.setItem('newsStories', JSON.stringify(stories));
}
export async function deleteStorageNewsStories() {
  await AsyncStorage.removeItem('newsStories');
}