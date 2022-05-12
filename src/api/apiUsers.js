import { getInstance } from './config';
import { setUserAsyncStorage } from "./storageAuth";

export async function getUser(userId, myId = false) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('user/' + userId + (myId ? '/' + myId : '')).then(async (response) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}
export async function getUserPosts(userId, page) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('user/posts/' + userId, { page, limit: 30, orderBy: 'desc' }).then(async (response) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}
export async function addReport(fromId, toId) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('user/report', { fromId, toId, reportTypeId: 1 }).then(async (response) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}
export async function addBlackList(method, fromId, toId) {
  return await new Promise(async (resolve, reject) => {
    if (method == 'delete') {
      (await getInstance('user')).delete('user/block', { data: { fromId, toId } }).then(async (response) => {
        try {
          resolve(response);
        } catch (e) {
          reject(e)
        }
      }).catch((err) => {
        reject(err)
      });
    } else {
      (await getInstance('user')).post('user/block', { fromId, toId }).then(async (response) => {
        try {
          resolve(response);
        } catch (e) {
          reject(e)
        }
      }).catch((err) => {
        reject(err)
      });
    }
  });

}
export async function addFollow(method, fromId, toId) {
  return await new Promise(async (resolve, reject) => {
    if (method == 'post' || !method) {
      (await getInstance('user')).post('user/subscribe', { fromId, toId })
        .then(async (response) => {
          try {
            resolve(response);
          } catch (e) {
            reject(e)
          }
        }).catch((err) => {
          reject(err)
        });
    } else if (method == 'delete') {
      (await getInstance('user')).delete('user/subscribe', { data: { fromId, toId } })
        .then(async (response) => {
          try {
            resolve(response);
          } catch (e) {
            reject(e)
          }
        }).catch((err) => {
          reject(err)
        });
    }
  });
}
export async function getUserFollows(userId, authId, type = 'subscribers') {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('user/' + type + '/' + userId + '/' + authId, { page: 1, limit: 50 }).then(async (response) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}
export async function getUserBookmarks(userId, page) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('user/bookmarks/' + userId, { page, limit: 30, orderBy: 'desc' }).then(async (response) => {
      try {
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}