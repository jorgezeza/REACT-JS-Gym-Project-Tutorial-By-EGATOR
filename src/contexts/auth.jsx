import { createContext, useEffect, useState } from "react";
import firebaseApp from "../services/firebase";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const AuthContext = createContext({})

const auth = getAuth(firebaseApp)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [userLogin, setUserLogin] = useState(null)
  const [idUSer, setIdUser] = useState(null)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const currentUser = auth.currentUser
  //   console.log('Usuário Logado:', auth.currentUser)
  //   if (currentUser) {
  //     console.log('LOGADDOOOO !!!!')
  //     setIdUser(currentUser.uid)
  //     navigate('/')
  //     return
  //   }
  // }, [auth.currentUser])

  const register = async (username, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

      await updateProfile(auth.currentUser, {
        displayName: username
      })
      .then(() => {
        console.log('User Update DisplayName:', user)
      })
      .catch((error) => {
        console.log('Error no update do displayName', error)
      })
  }

  const createSignInWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserLogin(userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:', errorCode, errorMessage)
      })
  }

  const logout = () => {
    signOut(auth)
    .then(() => {
      console.log('DESLOGOU !!')
    })
    .catch((error) => console.log('Error ao Deslogar !!'))
  }

  return <AuthContext.Provider value={{
    setUser,
    setUserLogin,
    auth,
    register,
    createSignInWithEmailAndPassword,
    user,
    userLogin,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}

export { AuthContext, AuthProvider }
