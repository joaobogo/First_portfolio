import React, { useContext } from 'react'
import Context from '../../context/Context'
import './Menu.css'
import Input from './Input'

function Menu() {

  const { isMenuActive, setIsMenuActive, changeInputs, setChangeInputs} = useContext(Context)

  const handleClose = () => {
    setIsMenuActive(false)
    setChangeInputs([])
  }

  return (
    <div className={isMenuActive ? "menu menu-active" : 'menu'}>
      <div className='menuheader'>
      <h2>Menu</h2>
      <button onClick={handleClose}>Close</button>
      </div>
      <div className='fatherinput'>
        {changeInputs.map((item) => (
          <Input item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Menu