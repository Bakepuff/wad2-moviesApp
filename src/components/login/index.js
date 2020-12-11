import React, { useState,useContext} from 'react';
import {message, Input, Button} from 'antd';
import  './login.css';
import {UserOutlined, KeyOutlined} from '@ant-design/icons';
import {login, newSession, getAccountDetails} from '../../api/tmdb-api'
import {MoviesContext} from "../../contexts/moviesContext";



export default function ({history}) {
  const context = useContext(MoviesContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const doLogin = () => {
    if (!username || !password) {
      message.warn("username or password cannot be empty.")
      return
    }
    login(username, password).then((res) => {
      if (res.success) {
        newSession(res.request_token).then(sessionId => {
          getAccountDetails(sessionId).then(user => {
            context.saveUser({...user, sessionId})
            history.replace('/movies/profile')
          })
        })
      } else {
        message.error(res.status_message)
      }
    })
  }
  return (
    <div className={"wrap3"}>
      <div className={"loginCard"}>
        <div className={"logo"} className="logo">TMDB</div>
        <Input size={"large"} className={"input"} placeholder="Username" prefix={<UserOutlined/>}
               onChange={event => setUserName(event.target.value)} className="user"/>
        <Input.Password size={"large"} className={"input"} placeholder="Password" prefix={<KeyOutlined/>}
                        onChange={event => setPassword(event.target.value)} className="pwd"/>
        <Button size={"large"} onClick={doLogin} type={"primary"} className="btn">LOGIN</Button>
      </div>
    </div>
  );
}
