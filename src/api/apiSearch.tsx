import { getInstance } from './config';
import { setUserAsyncStorage } from "./storageAuth";

export async function getSearchUser(page = 1, query: string, userId?: number,) {
  const parseUserId: number | string = userId ?? ''
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('search/users/' + parseUserId, { page, limit: 50, query }).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}

export async function getReccomendsUser(page = 1, authId: number,) {
  return await new Promise(async (resolve, reject) => {
    if (authId) {
      (await getInstance('user')).post('user/possibleFriends/' + authId, { page, limit: 50 }).then(async (response: any) => {
        try {
          resolve(response);
        } catch (e) {
          reject(e)
        }
      }).catch((err: any) => {
        reject(err)
      });
    } else {
      (await getInstance()).post('search/users', { page, limit: 50, query: '' }).then(async (response: any) => {
        try {
          resolve(response);
        } catch (e) {
          reject(e)
        }
      }).catch((err: any) => {
        reject(err)
      });
    }
  });
}
export async function getSearchTags(page = 1, query: string) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('search/tags', { page, limit: 50, query }).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}

export async function getSearchTagsPost(page = 1, tag: string) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('posts/tags/' + tag.trim().slice(1), { page, limit: 24 }).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}