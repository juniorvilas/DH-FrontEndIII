import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
   const [time, setTime] = useState(5);


//executa uma vez
  useEffect(() => {    
    //a cada 1 segundo ele diminui -1
    //continua mesmo após acabar os 5seg
    setTimeout(() =>    
      setTime(time => time-1),1000); 
     

    setTimeout(() => {
      navigate('/');
    }, 5000);
  });


  return (
    <>
      <h1>404 nada por aqui</h1>
      <h2>Redirecionando em {time}</h2>
    </>
  )
}
export default NotFound;