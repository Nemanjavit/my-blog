import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { auth } from '../firebase';

function SignInPage() {
    const [data, setData] = useState({ email: "", password: "" });

  console.log(data);
  const signIn = async () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user,'sign in');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  return <div>
      <form onSubmit={signIn}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Sign In</button>
      </form>
  </div>;
}

export default SignInPage;
