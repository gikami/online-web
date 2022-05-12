export async function getAuthlocalStorage() {
  const token = localStorage.getItem('userToken');
  const user = localStorage.getItem('userData');

  return {
    token,
    user: user ? JSON.parse(user) : false,
  };
}
export function getPolicylocalStorage() {
  const policy = localStorage.getItem('policy');
  if (policy) {
    return JSON.parse(policy)
  } else {
    return false
  }
}
export function setPolicylocalStorage(data) {
  if (data) {
    localStorage.setItem('policy', JSON.stringify(data));
  }
}
export function setRefreshToken(token) {
  if (token) {
    localStorage.setItem('userToken', token);
  }
}
export function setUserlocalStorage(data) {
  if (data) {
    localStorage.setItem('userData', JSON.stringify(data));
  }
}
export function setAuthlocalStorage(response) {
  if (response && response.data && response.data.body.token) {
    localStorage.setItem('userToken', response.data.body.token);
  }
  if (response && response.data && response.data.body.user) {
    localStorage.setItem('userData', JSON.stringify(response.data.body.user));
  }
}

export async function resetAuthlocalStorage() {
  localStorage.removeItem('userData');
  localStorage.removeItem('userToken');
}
