import { useCallback, useState } from "react"

const types = {
  email: {
    regex: /[a-z0-9.]+@[a-z0-9]+\.[a-z]+/g,
    message: 'Fill in a valid email'
  },
  password: {
    regex: /.{3}/g,
    message: 'Please fill in a password greater than 3 digits'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = useCallback((value) => {
    if (type === false) {
      return true
    }

    if (value.length === 0) {
      setError('Fill in a value.')
      return false
    }

    if (types[type] && (types[type].regex.test(value))) {
      types[type].regex.test(value)
      setError(null)
      return true
    } else {
      setError(types[type]?.message)
      return false
    }
  }, [type])

  const onChange = ({ target }) => {
    if (error) {
      validate(target.value)
    }

    setValue(target.value)
  }

  return {
    value,
    onChange,
    onBlur: (value) => validate(value.target.value),
    error,
    validate
  }
}

export default useForm
