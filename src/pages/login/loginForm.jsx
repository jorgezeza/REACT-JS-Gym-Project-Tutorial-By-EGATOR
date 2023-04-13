import { useContext } from 'react'
import './login.css'
import Input from '../../UI/formUi/Input'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { AuthContext } from '../../contexts/auth'

const LoginForm = () => {
  const { createSignInWithEmailAndPassword } = useContext(AuthContext)
  const email = useForm('email')
  const password = useForm('password')

  const handleSubmit = async event => {
    event.preventDefault()
    await createSignInWithEmailAndPassword(email.value, password.value)
  }

  return (
    <>
      <section className="login" >
        <div className="container container__login" >
          <h1>Login</h1>
          <form className='container__login-form' >
            <Input type='email' name='Email' className='login__input' {...email} />
            <Input type='password' name='Password' className='login__input' {...password} />
            <button className='btn lg' onClick={handleSubmit}>LOGIN</button>
            <Link>Forgot you password ?</Link>
          </form>
        </div>
      </section>

      <section className='login' >
        <div className='container container__login'>
          <h1>Register</h1>
          <p>Register a new user</p>
          <Link to='/login/create' className='btn lg' >REGISTER</Link>
        </div>
      </section>
    </>
  )
}

export default LoginForm
