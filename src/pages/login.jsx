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
                
                if(response == true){
                     navigate("/home")
                     alert("Logado com sucesso!")
                }
            } catch (error) {
                console.error('Erro ao se logar:', error);
            }
        };
        return (
            <div>
                <h1>Login System</h1><br/>
                <div className="info">
                <form>
                    <label>
                        Usuário &nbsp;
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br/><br/>
                    <label>
                        Senha &nbsp;&nbsp;&nbsp;
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />    <br/>
                    <button type="button" onClick={handleLogin}>
                        Entrar  
                    </button>    <br/> <br/>
                </form>                 
                <a href="/cadastro"> Não possui conta? Cadastre-se</a>
            </div>
            </div>
    );
}
export default Login;