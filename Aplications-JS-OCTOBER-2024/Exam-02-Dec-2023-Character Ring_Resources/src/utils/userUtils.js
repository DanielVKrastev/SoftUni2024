export const saveUserData = (userData) => {
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('_id', userData._id);
}

export const getUserData = () => {
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('email');
    const _id = localStorage.getItem('_id');

    return {
        accessToken,
        email,
        _id
    }
}

export const clearUserData = () => {
    localStorage.clear('accessToken');
    localStorage.clear('email');
    localStorage.clear('_id');
}