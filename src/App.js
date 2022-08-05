import imgimg from'./assets/img.svg'
import './styles.css'
function App() {
  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title">Bem Vindo</span>
            <span className="login-form-title"></span>
              <img className="img" src={imgimg} alt="jp"/>
              <div className='warp-input'>
                <input className='input' type="email"></input>
              <span className="focus-input" data-placeholder="Email"> </span>
              </div>
             <div className='warp-input'>
                <input className='input' type="password"></input>
              <span className="focus-input" data-placeholder="password"> </span>
              </div>
              <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
              </div>
              <div className='text-center'>
                <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href='#'>Criar conta</a>
            </div>
        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
