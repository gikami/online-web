import { getInstance } from './config';
import { resetAuthlocalStorage, setAuthlocalStorage, setRefreshToken, setUserlocalStorage } from "./storageAuth";
// import { deleteStorageMedias } from './storageMedia';
// import { deleteStorageNewsPost, deleteStorageProfilePosts } from './storagePost';
// import { deleteStorageNewsStories } from './storageStories';

function getProfile(userId) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('user/' + userId).then(async (response) => {
      try {
        if (response.data.body) {
          await setUserlocalStorage(response.data.body);
        }
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}

function editProfile(formData, userId) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).patch('user/' + userId, formData).then(async (response) => {
      try {
        if (response.data.body) {
          await setUserlocalStorage(response.data.body);
        }
        resolve(response);
      } catch (e) {
        reject(e)
      }
    }).catch((err) => {
      reject(err)
    });
  });
}
function login(emailOrNickname, password) {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('auth/login', {
      emailOrNickname, password
    }).then(async (response) => {
      try {
        if (response) {
          await setAuthlocalStorage(response);
        }
        resolve(response);
      } catch (e) { reject(e) }
    }).catch((err) => {
      reject(err)
    });
  });
}
function reg(data, step) {
  let info;
  if (step == 1 || step === 0) {
    info = {
      link: 'auth/register/userVerify',
      data: {
        email: data.email
      }
    }
  } else if (step == 2) {
    info = {
      link: 'auth/register/codeVerify',
      data: {
        email: data.email,
        verifyCode: data.code,
      }
    }
  } else if (step == 4) {
    info = {
      link: 'auth/register',
      data: {
        verifyCode: data.code,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        phone: data.phone,
        nickname: data.nickname,
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        birthday: data.birthday,
        city: data.city,
        sex: data.sex,
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post(info.link, info.data).then(async (response) => {
      try {
        resolve(response);
      } catch (e) { reject(e) }
    }).catch((error) => {
      reject(error.response)
    });
  });
}
function restorePassword(data, step) {
  let info;
  if (step === 1 || step === 0) {
    info = {
      link: 'auth/forgotPassword/userVerify',
      data: {
        email: data.email
      }
    }
  } else if (step == 2) {
    info = {
      link: 'auth/forgotPassword/codeVerify',
      data: {
        email: data.email,
        verifyCode: data.code,
      }
    }
  } else if (step == 3) {
    info = {
      link: 'auth/forgotPassword',
      data: {
        verifyCode: data.code,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      }
    }
  }

  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post(info.link, info.data).then(async (response) => {
      try {
        resolve(response);
      } catch (e) { reject(e) }
    }).catch((error) => {
      reject(error.response)
    });
  });
}
function logout() {
  return new Promise(async (resolve, reject) => {
    (await getInstance('user')).post('auth/logout').then(async (response) => {
      resolve(response);
    }).catch(async (error) => {
      reject(error.response)
    }).finally(async () => {
      await resetAuthlocalStorage();
      // await deleteStorageProfilePosts();
      // await deleteStorageNewsStories();
      // await deleteStorageMedias();
      // await deleteStorageNewsPost();
    });
  });
}

export const apiProfile = {
  login,
  reg,
  logout,
  restorePassword,
  getProfile,
  editProfile
};
