export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('auth-token');
    return Boolean(accessToken);
};
