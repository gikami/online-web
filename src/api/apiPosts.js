import { getInstance } from './config';

export function createPost(formData) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts', formData).then(async (response) => {
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
export function editPost(postId, formData) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).patch('posts/' + postId, formData).then(async (response) => {
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
export function deletePost(id) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).delete('posts/' + id).then(async (response) => {
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

export async function addComment(userId, postId, text) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts/comments', { userId, postId, text }).then(async (response) => {
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
export async function answerComment(userId, postCommentId, text) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts/commentsReplies', { userId, postCommentId, text }).then(async (response) => {
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
export async function editComment(userId, postId, commentId, text) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).patch('posts/comments/' + commentId, { userId, postId, text, page: 1 }).then(async (response) => {
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
export function deleteComment(id) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).delete('posts/comments/' + id).then(async (response) => {
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
export async function getProfilePosts(userid, authId, page) {
  const parseAuthId = authId ?? ''
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('user/posts/' + userid + '/' + parseAuthId, { page, limit: 21, orderBy: 'desc' }).then(async (response) => {
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
export async function getPost(postId, authId) {
  const parseAuthId = authId ?? ''
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('posts/' + postId + '/' + parseAuthId).then(async (response) => {
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
export async function getComments(id, page) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('posts/comments/' + id, { page: 1, limit: 100 }).then(async (response) => {
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
export async function getTags(page = 1) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance()).post('posts/tags', { page }).then(async (response) => {
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

export async function addView(userId, postId) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts/view', { userId, postId }).then(async (response) => {
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
export async function addReport(userId, postId) {
  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts/report', { userId, postId, reportTypeId: 1 }).then(async (response) => {
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
export async function addLike(method, userId, postId) {
  return await new Promise(async (resolve, reject) => {
    if (method == 'post' || !method) {
      (await getInstance('user')).post('posts/likes', { userId, postId })
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
      (await getInstance('user')).delete('posts/likes', { data: { userId, postId } })
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
export async function addBookmarks(method, userId, postId) {
  return await new Promise(async (resolve, reject) => {
    if (method == 'post' || !method) {
      (await getInstance('user')).post('user/bookmarks', { userId, postId })
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
      (await getInstance('user')).delete('user/bookmarks', { data: { userId, postId } })
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
export async function getNewsPost(type = 'news', page = 1, authId) {
  const parseAuthId = authId ?? ''

  //recommendations or news
  return await new Promise(async (resolve, reject) => {
    (await getInstance(type == 'news' ? 'user' : '')).post(type == 'news' ? 'user/news/' + parseAuthId : 'user/news/recommendations/' + parseAuthId, { page, limit: 21, orderBy: 'desc' }).then(async (response) => {
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

export async function getInterestings(page = 1, postId, authId) {
  const parseAuthId = authId ?? ''

  return await new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('posts/recommendationsForPost/' + postId + '/' + parseAuthId, { page, limit: 10, orderBy: 'desc' }).then(async (response) => {
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