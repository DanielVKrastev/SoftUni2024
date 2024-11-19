export const saveUserData = (userData) => {
    localStorage.setItem('_id', userData._id);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('accessToken', userData.accessToken);
}

export const getUserData = () => {
    const _id = localStorage.getItem('_id');
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    const userData = {
        _id,
        email,
        accessToken
    };

    return userData;
}

export const clearUserData = () => {
    localStorage.clear();
}