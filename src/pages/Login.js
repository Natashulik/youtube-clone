//  email: "fdsvjnoi@mail.ru"
//  password: "jfghdik_kd4TT"

//email: "1111@tut.by"
//password: "1111Aa+++Aa"

import React from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { setInputText } from "../redux/inputSlice";
import { setFavorites } from "../redux/favoriteSlice";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setIsError } from "../redux/loginSlice";
import { loadFavorites } from "../helpers/localStorage";
import { fetchLogin } from "../helpers/fetchLogin";

function Login() {
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const isError = useSelector((state) => state.login.isError);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFinish = (values) => {
    handleSubmit(values);
  };

  const handleSubmit = async (event) => {
    try {
      const data = await fetchLogin(email, password);

      if (!data.token) {
        throw new Error(data.message);
      } else {
        localStorage.setItem("token", data.token);
        navigate("/search");
        dispatch(setInputText(""));
        dispatch(setFavorites(loadFavorites()));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setIsError(true));
    }
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <img src={logo} alt="logo" className="logo" />
        <h3 className="form_title">Вход</h3>

        <Form
          className="login_form"
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="login_block">
            <p className="field_name">Эл.почта</p>
            <Input
              className="log_input"
              value={email}
              onChange={(event) => dispatch(setEmail(event.target.value))}
            />
          </div>

          <div className="password_block">
            <p className="field_name"> Пароль</p>
            <Input.Password
              className="password_input"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={(event) => dispatch(setPassword(event.target.value))}
            />
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="button_login">
              Войти
            </Button>
          </Form.Item>
        </Form>

        <div className="redirect_block">
          <span>Нет аккаунта? </span>
          <Link to="/register" className="redirect_link">
            Создать аккаунт
          </Link>
        </div>

        <div className="error_block">
          {isError && (
            <p className="error-message"> Неверные эл.почта или пароль!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
