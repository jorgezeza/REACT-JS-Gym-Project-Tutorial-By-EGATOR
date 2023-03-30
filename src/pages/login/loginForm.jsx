import './login.css'
import Input from '../../UI/formUi/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useForm from '../../hooks/useForm'

const LoginForm = () => {
  const username = useForm()
  const password = useForm('password')

  console.log('UserName', {...username})
  console.log('Password', {...password})

  return (
    <>
      <section className="login" >
        <div className="container container__login" >
          <h1>Login</h1>
          <form className='container__login-form' >
            <Input type='text' name='Username' className='login__input' {...username} />
            <Input type='password' name='Password' className='login__input' {...password} />
            <button className='btn lg' >LOGIN</button>
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
