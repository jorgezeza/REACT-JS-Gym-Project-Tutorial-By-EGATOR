import Input from "../../UI/formUi/Input"
import './login.css'
import useForm from "../../hooks/useForm"

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  return (
    <>
      <section className="login">
        <div className="container container__login" >
          <h1>Register</h1>
          <form className='container__login-form' >
            <Input type='text' name='Username' className='login__input' {...username} />
            <Input type='email' name='Email' className='login__input' {...email} />
            <Input type='password' name='Password' className='login__input' {...password} />
            <button className='btn lg' >Create new account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginCreate
