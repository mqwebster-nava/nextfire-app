import { auth, googleAuthProvider } from '@/lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const Page: React.FC = ({}) => {
  const user = null;
  const username = null;

  return (
    <main>
      <h1>Sign Up</h1>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default Page;

const SignInButton: React.FC = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img src={`/google.png`} alt={'Google Logo'} />
      Sign In With Google
    </button>
  );
};

const SignOutButton: React.FC = () => {
  return <button onClick={() => signOut(auth)}>Sign Out</button>;
};

const UsernameForm: React.FC = () => {};
