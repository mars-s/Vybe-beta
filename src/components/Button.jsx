const Button = ({ onClick = null, children = null }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
