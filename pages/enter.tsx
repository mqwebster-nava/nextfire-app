import { auth, googleAuthProvider } from "@/lib/firebase";

export default function Page({}) {
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
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={SignInButton}>
      <img src={`/google.png`} /> Sign In With Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}
