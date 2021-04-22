const Button = ({ onClick = null, children = null, }) => {
  return (
    <Button onclick={onClick}>{children}</Button>
  )
}

export default Button
