export const fetchLogoutUser = async ({userId}: {userId: string}) => {
  const id = userId.replace('auth0|', '');
  const access_token = sessionStorage.getItem('access_token');
  
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/v2/logout?clientId=${id}&returnTo=${import.meta.env.VITE_WEBSITE_URL}`;

  try {
    const response = await fetch(url, {
       method: "GET",
       mode: 'no-cors',
       headers: {
         "Authorization": `Bearer ${access_token}`
       },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
}