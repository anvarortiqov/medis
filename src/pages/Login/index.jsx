import './style.css'
import Login_Img from '../../assets/images/login_img.png'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Form from '../../components/Form'
import { useEffect } from 'react'
import axios from 'axios'

const index = () => {
  const { setIsAuthenticated, setLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    window.sessionStorage.setItem('token', null)
  }, [])

  const handleLogin = async (values) => {
    setLoading(true);

    await axios.post(import.meta.env.VITE_API + "/dj-rest-auth/login/", values).then(response => {
      const data = response.data;

      if (data.key) {
        window.sessionStorage.setItem("token", data.key);

        setTimeout(() => {
          setIsAuthenticated(true);
          setLoading(false);
          navigate('/', { replace: true });
        }, 1500);
      }

    })
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
          <Form onFininsh={handleLogin}>
            <input name='username' className='input-style' type="text" placeholder='Username Kiriting' />
            <input name='password' type="password" className='input-style' placeholder='Password kiriting' />
            <button type='submit' className='form-btn'>Kirish</button>
          </Form>
          
          <p>Parolni unitdingizmi? <a href="#">Tiklash</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default index
