import AsyncStorage from '@react-native-async-storage/async-storage';

//Общая лента новостей
export async function getStorageNewsPost() {
  const posts = await AsyncStorage.getItem('newsPosts');
  return posts ? JSON.parse(posts) : false;
}
export async function setStorageNewsPost(posts: any) {
  if (!posts) {
    return false;
  }
  await AsyncStorage.setItem('newsPosts', JSON.stringify(posts));
}
export async function deleteStorageNewsPost() {
  await AsyncStorage.removeItem('newsPosts');
}

//Личная лента профиля
export async function getStorageProfilePosts() {
  const posts = await AsyncStorage.getItem('profilePosts');
  return posts ? JSON.parse(posts) : false;
}
export async function setStorageProfilePosts(posts: any) {
  if (!posts) {
    return false;
  }
  await AsyncStorage.setItem('profilePosts', JSON.stringify(posts));
}
export async function deleteStorageProfilePosts() {
  await AsyncStorage.removeItem('profilePosts');
}