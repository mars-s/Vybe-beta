const Button = ({ onClick = null, children = null }) => {
  return (
    <div>
      <button onClick={onClick} className={'text-lg drop-shadow-md bg-purple-400 rounded-full py-3 px-6 font-sans font-medium text-lg'}>{children}</button>
    </div>
  )
}

export default Button
