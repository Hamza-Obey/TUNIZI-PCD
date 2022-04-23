import React from 'react'
import "../Assets/Form.css"
import { useState } from 'react';
import image from "../Assets/Images/image1.jpg"
import { useNavigate,Link } from 'react-router-dom';


function SentimentForm() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [test, setTest] = useState(true);
  const [result, setResult] = useState(" VIEW RESULT")

  const[positive,setPositive] = useState(false)
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  function changement() {
    setTest(!test)
    if (test === true) {
      setResult("TRY AGAIN")

    }
    else setResult(" VIEW RESULT")
  }



  return (
    <div style={{
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      margin: 0,
      overflow: "hidden"
    }}
    >
      <div className='sentiment-head'>
        <h1 className='sentiment-headleft'>TUNIZI</h1>
        <div className='sentiment-headright'></div>
        <button className='signup-button'> <Link to="signup" style={{color:"white",textDecoration:"none"}}> SIGN UP</Link> </button>
        <button className='signin-button' > <Link to="login" style={{color:"black",textDecoration:"none"}}> SIGN IN</Link></button>
      </div>

      <h1 className='sentiment-title'>TUNIZI</h1>
      <p className='form-description'> SENTIMENT ANALYSIS FROM TUNISAIN DIALECT </p>
      <form className='sentiment-form'

        action=""
      >
        {  test === false  ?
          <div>
            <div className='sentiment-result '>

              <input className='sentiment-sentiment' type="text" value={text}/>
              <p style={{ marginTop: "20px", fontSize: "30px" }}> The sentiment is : </p>
              { positive===true ?
              <div className='sentiment-classe1'>
                <p className='sentiment-posneg'> POSITIVE</p>
              </div>
              : 
              <div className='sentiment-classe2'>
                <p className='sentiment-posneg'> NEGATIVE</p>
              </div>
              }
              <input className="sentiment-btn" type="submit" value={result} onClick={() => changement()} />
            </div>
           
          </div>



          :
          <div>

            <input
              onChange={(event) => setText(event.target.value)}
              type="text"
              name="text"
              id="text"
              value={text}
              className="sentiment-input"
              placeholder="        ENTER YOUR TEXT HERE PLEASE ... "
            />
            <input className="sentiment-btn" type="submit" value={result} onClick={() => changement()} />
          </div>
        }
      </form>

      <div className='footer'>
        <h3 className='copyright'> &copy; 2022 | TUNISI </h3>


      </div>

    </div>
  )
}

export default SentimentForm