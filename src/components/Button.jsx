import { FcGoogle } from 'react-icons/fc'

const Button = ({ onClick = null, children = null, styles }) => {
  return (
    <div>
      <button onClick={onClick} className={styles}>{children}</button>
    </div>
  )
}

export default Button
