import './style.css'
import Login_Img from '../../assets/images/login_img.png'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const index = () => {
  const { setIsAuthenticated, setLoading } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    if (formValues?.password !== "" && formValues?.email !== "") {
      localStorage.setItem("token", JSON.stringify(formValues));
      localStorage.setItem("token",JSON.stringify(formValues));

      setTimeout(() => {
        setIsAuthenticated(true);
        setLoading(false);
        navigate('/', { replace: true });
      }, 1500);
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-left'>
          <img src={Login_Img} alt="" />
        </div>
        <div className='login-right'>
          <h1>Tizimga Kirish</h1>
          <p>Tizimga kirish orqali siz <a href="#">Foydalanish shartlari</a> va <a href="#">Maxfiylik <br /> siyosatiga</a> rozilik bildirasiz.</p>
          <form onSubmit={handleLogin}>
            <input name='email' className='input-style' type="text" placeholder='Email Kiriting' />
            <input name='password' type="password" className='input-style' placeholder='Password kiriting' />
            <button className='form-btn'>Kirish</button>
          </form>
          <p>Parolni unitdingizmi? <a href="#">Tiklash</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default index
