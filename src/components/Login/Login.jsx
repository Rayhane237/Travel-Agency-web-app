import { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EyeIcon = ({ hidden }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
    {hidden ? (
      <>
        <path d="M3 3l18 18" strokeLinecap="round" />
        <path d="M10.6 5.2A9.9 9.9 0 0 1 12 5c5 0 9 4 10.5 7-.5 1-1.3 2.2-2.4 3.3M6.6 6.6C4.6 8 3.2 9.9 1.5 12c1.5 3 5.5 7 10.5 7 1.2 0 2.3-.2 3.4-.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.2 2.8-2.5 3.6v3h4.3c2.5-2.3 3.9-5.7 3.9-9.8Z" />
    <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-4.3-3c-1.1.8-2.6 1.3-3.6 1.3-3 0-5.5-2-6.4-4.7H1v3.1C2.9 21.5 7.1 24 12 24Z" />
    <path fill="#FBBC05" d="M5.6 14.7c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V7.2H1C.3 8.6 0 10.2 0 12s.3 3.4 1 4.8l4.6-3.1Z" />
    <path fill="#EA4335" d="M12 4.7c1.8 0 3.3.6 4.5 1.7l3.4-3.4C17.9 1.2 15.2 0 12 0 7.1 0 2.9 2.5 1 6.2l4.6 3.1c.9-2.7 3.4-4.6 6.4-4.6Z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#111">
    <path d="M16.7 1c.1 1.2-.4 2.4-1.1 3.2-.8.9-2 1.6-3.2 1.5-.1-1.2.4-2.5 1.1-3.3C14.3 1.5 15.6.9 16.7 1Zm4 16c-.6 1.3-.9 1.9-1.7 3.1-1.1 1.6-2.7 3.7-4.6 3.7-1.7 0-2.2-1.1-4.2-1.1-2 0-2.5 1.1-4.2 1.1-1.9 0-3.4-2-4.6-3.6C-1.4 15.3-.6 8.9 4 8.6c1.7-.1 2.9.9 3.9.9 1 0 2.5-1.1 4.5-.9 1.6.1 3.2.9 4.1 2.3-3.6 2.1-3 6.6.2 8.1-.1.4-.5 1.3-.9 2Z" />
  </svg>
);

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [data, setData] = useState({
    email: '',
    passWord: ''
  });

  const [errData, setErrData] = useState({
    errEmail: '',
    errPassWord: ''
  });

  const [showPass, setShowPass] = useState(false);

  const handleSocial = (provider) => () => {
    toast.info(`${provider} login is coming soon`);
  };

  const onSubmitLogic = async (event) => {
    event.preventDefault();

    let userError = {
      errEmail: '',
      errPassWord: ''
    };
    let isValid = true;

    if (!data.email) {
      userError.errEmail = 'You must fill this input';
      isValid = false;
    }
    if (!data.passWord) {
      userError.errPassWord = 'You must fill this input';
      isValid = false;
    }

    setErrData(userError);

    if (!isValid) {
      toast.error('Please fill all required fields');
      return;
    }

    const clientData = {
      email: data.email,
      password: data.passWord
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_HOST}/login`, clientData);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/Plan');
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Login failed';
      toast.error(message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/Plan');
    }
  }, [token, navigate]);

  return (
    <div className="signup-page">
      <div className="signup-visual">
        <img src="/home.jpg" alt="" aria-hidden="true" className="signup-bg" />
        <div className="signup-visual-overlay" />
        <div className="signup-brand">
          <svg viewBox="0 0 220 40" className="brand-path" aria-hidden="true">
            <path
              d="M4 30 C 40 4, 150 4, 190 22"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeDasharray="4 6"
              strokeLinecap="round"
              className="brand-path-line"
            />
            <text x="0" y="0" className="brand-plane" transform="translate(190 22) rotate(-18)">
              ✈
            </text>
          </svg>
          <span className="brand-name">Phnes. Travels</span>
        </div>
      </div>

      <div className="signup-panel">
        <form onSubmit={onSubmitLogic} className="signup-card">
          <h1 className="signup-title">Login</h1>
          <p className="signup-subtitle">
            Login to access your Phnes.Travels account
          </p>

          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => {
              const value = e.target.value;
              setData({ ...data, email: value });
              if (value !== '') setErrData({ ...errData, errEmail: '' });
            }}
            error={errData.errEmail}
          />

          <Field
            label="Password"
            id="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Enter your password"
            value={data.passWord}
            onChange={(e) => {
              const value = e.target.value;
              setData({ ...data, passWord: value });
              if (value !== '') setErrData({ ...errData, errPassWord: '' });
            }}
            error={errData.errPassWord}
            trailing={
              <button
                type="button"
                className="signup-eye"
                aria-label={showPass ? 'Hide password' : 'Show password'}
                onClick={() => setShowPass((v) => !v)}
              >
                <EyeIcon hidden={showPass} />
              </button>
            }
          />

          <button type="submit" className="signup-btn">
            Login
          </button>

          <p className="signup-footer">
            Do not have an account? <Link to="/Signup">Signup</Link>
          </p>

          <div className="signup-divider">
            <span>Or Login with</span>
          </div>

          <div className="signup-social">
            <button type="button" onClick={handleSocial('Facebook')} aria-label="Login with Facebook">
              <FacebookIcon />
            </button>
            <button type="button" onClick={handleSocial('Google')} aria-label="Login with Google">
              <GoogleIcon />
            </button>
            <button type="button" onClick={handleSocial('Apple')} aria-label="Login with Apple">
              <AppleIcon />
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

const Field = ({ label, id, type, placeholder, value, onChange, error, trailing }) => (
  <div className="signup-field-wrap">
    <div className="signup-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
      />
      {trailing}
    </div>
    {error && <p className="signup-error">{error}</p>}
  </div>
);

export default Login;