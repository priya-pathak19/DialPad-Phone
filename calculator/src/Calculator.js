import React from 'react';
import  './calculator.css';


const Calculator = ()=> {
    return(
        <React.Fragment>
        
            <div class="calculator-grid">
        <div class="output">
            <div data-prev class="prev-operand">sa</div>
            <div data-current class="current-operand">sas</div>
        </div>
        <button class="span-two" data-all-clear>AC</button>
        <button >DEL</button>
        <button >÷</button>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >*</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >+</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >-</button>
        <button >.</button>
        <button >0</button>
        <button class="span-two">=</button>
    </div>
      
        </React.Fragment>
    )
}

export default Calculator