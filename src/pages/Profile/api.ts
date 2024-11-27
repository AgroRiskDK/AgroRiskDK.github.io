export const fetchLogoutUser = async () => {
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/v2/logout`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
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