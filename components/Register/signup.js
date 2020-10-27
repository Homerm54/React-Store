import style from 'styles/account/signup.module.css';

export default function Signup() {
  return (
    <section className={`container-fluid ${style.container}`}>
      <form className={`${style.form} row justify-content-center`}>
        <label htmlFor='email' className='col-auto'>Username</label>
        <input type='email' name='email' className='col'/>
        <span className='col-12'></span>
        <label htmlFor='password' className='col-auto'>Password</label>
        <input type='password' name='password' className='col'/>
        <span className='col-12'></span>
        <a className='col-auto mr-1'>Sign Up</a>
        <button type='submit' className='col-auto'>Log In</button>
      </form>

      Adde here a loh in option with Google, check for more, also, add the
      wrong field thing.
      Image background too.
    </section>
  )
}