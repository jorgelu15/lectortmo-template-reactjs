import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className='content-login'>
        <div className='content-form'>
          <form>
            <p>TUMANGAONLINE</p>
            <p>Acceder</p>
            <p>Ir a Lector Manga</p>
            <div className='inputs'>
              <div className='input'>
                <label htmlFor='mail'>Email</label>
                <input type='mail' name='mail' id='mail' placeholder='Correo electronico' />
              </div>
            </div>
            <div className='input'>
              <label htmlFor='password'>Email</label>
              <input type='password' name='password' id='password' placeholder='Contraseña' />
            </div>
            <a>¿Olvidaste la Contraseña?</a>
            <div className='link-footer'>
              <a>Crear cuenta</a>
              <input type='submit' value='Acceder'/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn