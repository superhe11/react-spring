export const fetchWithAuth = async (url, options = {}) => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');

    const redirectToLogin = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
    };
    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`
    };

    let response = await fetch(url, options);

    if (response.status === 401) {
        console.log('Access token expired. Attempting to refresh...');

        const refreshResponse = await fetch('http://localhost:5000/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken })
        });

        if (refreshResponse.status === 200) {
            const data = await refreshResponse.json();
            accessToken = data.accessToken;
            localStorage.setItem('accessToken', accessToken);

            console.log('Access token refreshed.');

            options.headers['Authorization'] = `Bearer ${accessToken}`;
            response = await fetch(url, options);

            if (response.status === 401 || response.status === 403) {
                console.log(
                    'Retried request failed after token refresh. Redirecting to login.'
                );
                redirectToLogin();
                throw new Error('Session expired. Please log in again.');
            }
        } else {
            console.log(
                'Refresh token expired or invalid. Redirecting to login.'
            );
            redirectToLogin();
            throw new Error('Session expired. Please log in again.');
        }
    } else if (response.status === 403) {
        console.log('Access forbidden. Redirecting to login.');
        redirectToLogin();
        throw new Error('Access forbidden. Please log in again.');
    }

    return response;
};
