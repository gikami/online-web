import AsyncStorage from '@react-native-async-storage/async-storage';

//Медиа файлы
export async function getStorageMedias() {
  const medias = await AsyncStorage.getItem('medias');
  return medias ? JSON.parse(medias) : false;
}
export async function setStorageMedias(medias: any) {
  if (!medias) {
    return false;
  }
  await AsyncStorage.setItem('medias', JSON.stringify(medias));
}
export async function deleteStorageMedias() {
  await AsyncStorage.removeItem('medias');
}

//Альбомы
export async function getStorageAlbums() {
  const albums = await AsyncStorage.getItem('albums');
  return albums ? JSON.parse(albums) : false;
}
export async function setStorageAlbums(albums: any) {
  if (!albums) {
    return false;
  }
  await AsyncStorage.setItem('albums', JSON.stringify(albums));
}
export async function deleteStorageAlbums() {
  await AsyncStorage.removeItem('albums');
}