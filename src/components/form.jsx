import React from 'react';
import './form.scss';

export const Form = ({title, handleClick}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <>
      <div className="wrapper">
        <div className="fbs-auth">
          <input
            className="fbs-auth__input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="fbs-auth__input"
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="fbs-auth__btn" onClick={() => handleClick(email, pass)}>
            {title}
          </button>
        </div>
      </div>
    </>
  );
};
