import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'


const logar = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8090/api/login', {
            username: username,
            password: password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

function Login(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cadastro');
    };

       

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const handleLogin = async () => {
            try {
                const response = await logar(username, password);
                alert(response);
                
                if(response == true){
                     navigate("/home")
                }
            } catch (error) {
                console.error('Erro ao se logar:', error);
            }
        };
        return (
            <div className='div'>
                <h1>Login System</h1>
                <form>
                    <label>
                        Usuário: &nbsp;
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        Senha: &nbsp;
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />    <br/>
                    <button type="button" onClick={handleLogin}>
                        Login  
                    </button>    <br/> <br/>
                </form>                 
                <button onClick={handleClick}>
                    Realizar Cadastro
                </button>
            </div>
    );
}
export default Login;