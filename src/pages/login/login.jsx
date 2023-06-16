import LoginForm from "./loginForm"
import LoginCreate from "./loginCreate"
import { Routes, Route } from "react-router-dom"

import LoginImage from '../../images/LoginImage.jpg'
import Header from '../../components/Header'
import ForgotPassword from "./forgotPassword"
import NotFound from "../notFound/NotFound"

const Login = () => (
  <>
    <Header title='Login / Register' image={LoginImage}>
      Don't have an account yet? Sign up for the site.
    </Header>

    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/create" element={<LoginCreate />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
)

export default Login
