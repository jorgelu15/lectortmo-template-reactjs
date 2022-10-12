import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Routers from '../../helper/Routers'

const SignUp = () => {
  const [datos, setDatos] = useState({
    name: '',
    mail: '',
    password: '',
    confirmacion: ''
  })
  
  const { name, mail, password, confirmacion } = datos;

  const onchange = (e)=>{
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const onsubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className='content-login'>
        <div className='content-form'>
          <form onSubmit={onsubmit}>
            <p className='logo'>tu<b>manga</b><i>online</i></p>
            <p className='acceder'>Crear tu cuenta de Manga</p>
            <Link to={Routers.home}>Ir a Lector Manga</Link>
            <div className='input'>
              <label htmlFor='name'>Nombre</label>
              <input 
              type='text' 
              name='name' 
              id='name' 
              placeholder='Nombre completo' 
              value={name}
                onChange={onchange}
              />
            </div>

            <div className='input'>
              <label htmlFor='mail'>Email</label>
              <input 
                type='mail'
                name='mail'
                id='mail'
                placeholder='Correo electronico'
                value={mail}
                onChange={onchange}
              />
            </div>

            <div class='contra'>
              <div className='input'>
                <label htmlFor='password'>Contraseña</label>
                <input 
                type='password' 
                name='password' 
                id='password' 
                placeholder='Contraseña' 
                value={password}
                onChange={onchange}
                />
              </div>
              <div className='input'>
                <label htmlFor='confirmacion'>Confirmación</label>
                <input 
                type='password' 
                name='confirmacion' 
                id='confirmacion' 
                placeholder='Confirmar contraseña' 
                value={confirmacion}
                onChange={onchange}
                />
              </div>
            </div>
              <p>Usa 8 o más caracteres con una combinación de letras, números y símbolos</p>
            <div className='link-footer'>
              <Link to={Routers.login} className='logup'>Acceder a tu cuenta</Link>
              <input type='submit' value='Crear' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp