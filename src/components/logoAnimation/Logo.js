import './logo.scss'
import me from "../../assets/images/me.jpg"

function Logo(){



  return (
    <div className="logo-container switch__stroke-color" >
      <img src={me} alt="" className='switch__stroke-color' />
    </div>
  )
}

export default Logo
