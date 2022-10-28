/* eslint no-eval: 0 */

import React, { useState} from "react";

function Button() {
  const [result, setResult] = useState("")

  const handleNum = (e) => {
    setResult(result.concat(e.target?.name))
  }

  const handleReset = () => {
    setResult("")
  }

  const handleDel = () => {
    setResult(result.slice(0,-1))
  }

  const handleEquals = () => {
    try {
      setResult(eval(result).toString())
    }
    catch(err){
      setResult("Error")
    }
    
    
    }
 

  return (
    <>
      <section className="input">
        <div>{result}</div>
      </section>
      <section className="button--section">
        <div className="row row--first">
          <button className="btn gray" onClick={handleReset}>
            AC
          </button>
          <button className="btn gray" onClick={handleDel}>
            C
          </button>
          <button className="btn gray">
            &#177;
          </button>
          <button className="btn orange">
            &#247;
          </button>
        </div>
        <div className="row">
          <button className="btn digits" onClick={handleNum} name="7">
            7
          </button>
          <button className="btn digits" onClick={handleNum} name="8">
            8
          </button>
          <button className="btn digits" onClick={handleNum} name="9">
            9
          </button>
          <button className="btn orange" name="*">
            &times;
          </button>
        </div>
        <div className="row">
          <button className="btn digits" onClick={handleNum} name="4">
            4
          </button>
          <button className="btn digits" onClick={handleNum} name="5">
            5
          </button>
          <button className="btn digits" onClick={handleNum} name="6">
            6
          </button>
          <button className="btn orange" name="-" onClick={handleNum}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btn digits" onClick={handleNum} name="1">
            1
          </button>
          <button className="btn digits" onClick={handleNum} name="2">
            2
          </button>
          <button className="btn digits" onClick={handleNum} name="3">
            3
          </button>
          <button className="btn orange" name="+" onClick={handleNum}>
            +
          </button>
        </div>
        <div className="row">
          <button className="btn digits double" onClick={handleNum} name="0">
            0
          </button>
          <button className="btn digits" onClick={handleNum} name=".">.</button>
          <button className="btn orange" onClick={handleEquals}>
            =
          </button>
        </div>
      </section>
    </>
  );
}

export default Button;
