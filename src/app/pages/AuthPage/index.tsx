import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function AuthPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="A Boilerplate application login page"
        />
      </Helmet>
      <form action="action_page.php" method="post">
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
