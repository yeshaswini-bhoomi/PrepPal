import { Link } from "react-router-dom"

export const LogoContainer = () => {
  return (
    <Link to={'/'}>
      <img src='/assets/svg/PrepPal_logo.svg' alt='' className="w-20 h-20 object-contain"/>
    </Link>
  )
}
