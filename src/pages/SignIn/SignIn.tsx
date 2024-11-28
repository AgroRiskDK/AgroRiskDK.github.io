import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {fetchAuthToken, fetchUserInfo} from './api.ts';
import { useAuthContext } from '@/contexts/auth0.tsx';
import AgroRiskLogoTwo from "@/assets/imgs/logos/agrorisk-logo-2.svg";
import BackgroundImage from "/src/assets/imgs/backgrounds/siginphoto-min.jpg";
import styles from "./styles.module.css";

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUser} = useAuthContext();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    fetchAuthToken({password, username: email}).then((data) => {
      if (data) {
        fetchUserInfo({access_token: data.access_token, email}).then((data) => {
          if (data) {
            setUser(data);
            navigate('/profile');
          }
        })
      }
    })
  }

  return (
    <div className={styles["insight-page"]}>
      <div className={`${styles["left-panel"]} ${styles["left-panel--lg"]}`}>
        <div className={styles["form-container"]}>
          <div>
            <img
              src={AgroRiskLogoTwo}
              alt="logo"
              className={styles["logo"]}
            />
            <h2 className={styles["title"]}>Sign in to your account</h2>
          </div>

          <div className={styles["form"]}>
            <form onSubmit={onSubmit} method="POST" className={styles["form"]}>
              <div className={styles["input-group"]}>
                <label
                  htmlFor="email"
                  className={styles["label"]}
                >
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={styles["input"]}
                />
              </div>

              <div className={styles["input-group"]}>
                <label
                  htmlFor="password"
                  className={styles["label"]}
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className={styles["input"]}
                />
              </div>

              <button
                type="submit"
                className={styles["button"]}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${styles["right-panel"]}`}>
        <img
          alt="Background"
          src={BackgroundImage}
          className={styles["image"]}
        />
      </div>
    </div>
  );
}
