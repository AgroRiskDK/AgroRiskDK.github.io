type TRequestToken = {
  username: string
  password: string
}

type TResponseToken = {
  access_token: string
  id_token: string
  expires_in: string
}

type TRequestUserInfo = {
  access_token: string
}

export type TUser = {
  sub: string;
  nickname: string;
  name: string;
  picture?: string;
  updated_at: string; // ISO 8601 date string
  email: string;
  email_verified: boolean;
};

export const fetchAuthToken = async ({username, password}: TRequestToken): Promise<TResponseToken | undefined> => {
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/token`;
  const payload = {
    grant_type: 'password',
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    username,
    password,
    scope: 'openid profile email',
    realm: "Username-Password-Authentication",
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching token:', error);

  }
}

export const fetchUserInfo = async ({access_token}: TRequestUserInfo): Promise<TUser | undefined> => {
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/userInfo`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('User Info:', data);

    return data;
  } catch (error) {
    console.error('Error fetching user info:', error);
  }
}