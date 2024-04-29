import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import pato from '../assets/pato.gif';
import sapo from "../assets/sapo.gif";

function Home() {
    return(
        <div>
            <h1>
                Bem-Vindo !   <img id="sapo" src={sapo}/> <br/> <br/> <br/> <br/> <br/>
                <img  src={pato}  />      
            </h1>
            </div>
    )
}

export default Home;