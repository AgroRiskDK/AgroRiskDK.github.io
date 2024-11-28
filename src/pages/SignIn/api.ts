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
  email: string
}

type Identity = {
  connection: string;
  user_id: string;
  provider: string;
  isSocial: boolean;
};

export type TUser = {
  app_metadata: Record<string, unknown>;
  created_at: string; // ISO date string
  email: string;
  email_verified: boolean;
  identities: Identity[];
  last_ip: string;
  last_login: string; // ISO date string
  last_password_reset: string; // ISO date string
  logins_count: number;
  name: string;
  nickname: string;
  picture: string; // URL string
  updated_at: string; // ISO date string
  user_id: string;
  user_metadata: Record<string, unknown>;
};

export const fetchAuthToken = async ({username, password}: TRequestToken): Promise<TResponseToken | undefined> => {
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/token`;
  const payload = {
    grant_type:"client_credentials",
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    username,
    password,
    scope: 'read:users',
    realm: "Username-Password-Authentication",
    audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`
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

export const fetchUserInfo = async ({access_token, email}: TRequestUserInfo): Promise<TUser | undefined> => {
  const url = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/users?q=${email}`;

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
    sessionStorage.setItem('access_token', access_token);

    return data[0];
  } catch (error) {
    console.error('Error fetching user info:', error);
    sessionStorage.removeItem('access_token');
  }
}