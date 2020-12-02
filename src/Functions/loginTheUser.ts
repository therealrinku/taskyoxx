import firebaseAuth from "../firebase/auth";

const LoginTheUser = (email: string, password: string) => {
  return new Promise((resolve) => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve("done");
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

export default LoginTheUser;
