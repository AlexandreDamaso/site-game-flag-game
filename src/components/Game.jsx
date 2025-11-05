import React, { useEffect, useState } from 'react'
import Flag from './Flag'

function Game() {
   const [flags, setFlags] = useState({});
   const [options, setOptions] = useState([]);
   const [correctFlag, setCorrectFlag] = useState('');
   const [flagUrl, setFlagUrl] = useState('');
   const [message, setMessage] = useState('');
   const [correctCount, setCorrectCount] = useState(0);
   const [incorrectCount, setIncorrectCount] = useState(0);
   const [answered, setAnswered] = useState(false);

   useEffect(() => {
      fetch('https://flagcdn.com/pt/codes.json')
      .then(response => response.json())
      .then(data => setFlags(data))
      .catch(error => console.log(error));
   },[]);

   useEffect(() => {
      console.log(flags);
   },[flags]);

   return (
      <div>
         <Flag />
      </div>
   )
}

export default Game