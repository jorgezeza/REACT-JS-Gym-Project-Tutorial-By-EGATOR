import { useContext } from "react"
import Input from "../../UI/formUi/Input"
import './login.css'
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"

const LoginCreate = () => {
  const { register, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')
  const confirmPassword = useForm('password')

  const handleSubmit = async event => {
    event.preventDefault()

    if (password.value === confirmPassword.value) {
      await register(username.value, email.value, password.value)
      if (user) {
        navigate('/login')
      }
    }
  }

  return (
    <>
      <section className="login">
        <div className="container container__login" >
          <h1>Register</h1>
          <form className='container__login-form' >
            <Input type='text' name='Username' className='login__input' {...username} />
            <Input type='email' name='Email' className='login__input' {...email} />
            <Input type='password' name='Password' className='login__input' {...password} />
            <Input type='password' name='Confirm Password' className='login__input' {...confirmPassword} />
            <button className='btn lg' onClick={handleSubmit} >Create new account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginCreate
