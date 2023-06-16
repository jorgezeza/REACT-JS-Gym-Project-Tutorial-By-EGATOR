
const Input = ({ type, name, className, value, onChange, onBlur, error }) => {
  return (
    <div className={className} >
      <label htmlFor={name} >
        {name}:
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={type === 'text' ? true : false}
      />
      {error && <p>{error}</p>}
    </div>

  )
}

export default Input
