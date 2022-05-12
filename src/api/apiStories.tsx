import { getInstance } from './config';

export function createStories(formData: any) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('stories', formData).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e: any) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}
export function getStories(page = 1, userId: number, authId?: number) {
  return new Promise(async (resolve, reject) => {
    const parseAuthId: number | string = authId ?? '';
    (await getInstance('user')).post('user/news/stories/' + userId + '/' + parseAuthId, { page, limit: 50, orderBy: 'desc' }).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e: any) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}
export function getAllStories(page = 1, userId: number, authId?: number) {
  return new Promise(async (resolve, reject) => {
    const parseAuthId: number | string = authId ?? '';
    (await getInstance('user')).post('user/stories/' + userId + '/' + parseAuthId, { page, limit: 50, orderBy: 'desc' }).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e: any) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}
export async function getNewsStories(userId = 0) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('user/news/stories/subscribers/' + userId, { limit: 50, orderBy: 'desc' }).then(async (response: any) => {
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
export async function addView(userId: string, storiesId: number) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('stories/view', { userId, storiesId }).then(async (response: any) => {
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
export async function addReport(userId: string, storiesId: number) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('stories/report', { userId, storiesId, reportTypeId: 1 }).then(async (response: any) => {
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
export async function addLike(method: string, userId: number, storiesId: number) {
  return await new Promise(async (resolve, reject) => {
    if (method == 'post' || !method) {
      (await getInstance('user')).post('stories/likes', { userId, storiesId })
        .then(async (response: any) => {
          try {
            resolve(response);
          } catch (e) {
            reject(e)
          }
        }).catch((err: any) => {
          reject(err)
        });
    } else if (method == 'delete') {
      (await getInstance('user')).delete('stories/likes', { data: { userId, storiesId } })
        .then(async (response: any) => {
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
export function deleteStories(id: number) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).delete('stories/' + id).then(async (response: any) => {
      try {
        resolve(response);
      } catch (e: any) {
        reject(e)
      }
    }).catch((err: any) => {
      reject(err)
    });
  });
}