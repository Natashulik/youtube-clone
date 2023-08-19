import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setEmail, setPassword, setAge, setGender, setIsError } from "../redux/registrationSlice";
import { setInputText } from '../redux/inputSlice';
import logo from '../images/logo.svg'
import { fetchLogin } from "../helpers/fetchLogin";

function Registration() {
  const {username,email, password, age, gender, isError} = useSelector(state => state.registration);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch(process.env.REACT_APP_URL_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          gender: gender,
          age: age
        })
      })

      const data = await result.json();
      if (!data.id) {
        throw new Error(data.message);
      } else {
        const data = await fetchLogin(email, password);
        localStorage.setItem("token", data.token);
        navigate("/search");
        dispatch(setInputText(''));
      }

    } catch (error) {
      dispatch(setIsError(true));
    }
  }

  return (<div className='registration_wrapper'>
    <img src={logo} alt="logo" className='logo' />
    <h3 className='form_title'>Регистрация</h3>
    <form onSubmit={event => handleSubmit(event)}>
      <div className="form_register">

        <div className="username_block">
          <p className="field_name">Логин</p>
          <input value={username} onChange={event => dispatch(setUsername(event.target.value))} className="log_input" />
        </div>

        <div className="email_block">
          <p className="field_name">Эл.почта</p>
          <input value={email} onChange={event => dispatch(setEmail(event.target.value))} className="log_input" />
        </div>

        <div className="password_block">
          <p className="field_name">Пароль*</p>
          <input value={password} type="password" onChange={event => dispatch(setPassword(event.target.value))} className="log_input" />
        </div>

        <div className="age_block">
          <p className="field_name">Возраст</p>
          <input value={age} onChange={event => dispatch(setAge(event.target.value))} className="log_input" />
        </div>

        <div className="gender_block">
          <span className="field_name field_gender">Пол</span>
          <label className="radio_button">
            <input value="male" checked={gender === 'male'} onChange={event => dispatch(setGender(event.target.value))} type="radio" name="gender" /> male </label>
          <label className="radio_button">
            <input value="female" checked={gender === 'female'} onChange={event => dispatch(setGender(event.target.value))} type="radio" name="gender" /> female </label>
        </div>

        <button type="submit" className="button_register">SIGN UP</button>
        <span className="password_info">*минимум 8 знаков, 1 заглавный, 1 строчный,</span>
        <span className="password_info second">1 число и 1 символ</span>
        <div className="error_block">
          {isError && (<p className="error-message"> Неверная информация!</p>)}
        </div>
      </div>
    </form>

  </div>
  );
}

export default Registration;