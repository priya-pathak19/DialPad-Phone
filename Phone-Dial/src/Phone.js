import React, { useState } from 'react';
import  './Phone.css';



const Phone = ()=> {

    const [dialBtn , setdialBtn] = useState("");
    const [count , setcount] = useState(0);

    const handleTarget = (e) => {
        const target = e.target.innerText;
        console.log(target)
            if(target === "1"){
                setdialBtn(dialBtn + target)
                
            }
            if(target === "2"){
                setdialBtn(dialBtn + target)
            }
            if(target === "3"){
                setdialBtn(dialBtn + target)
            }
            if(target === "4"){
                setdialBtn(dialBtn + target)
            }
            if(target === "5"){
                setdialBtn(dialBtn + target)
            }
            if(target === "6"){
                setdialBtn(dialBtn + target)
            }
            if(target === "7"){
                setdialBtn(dialBtn + target)
            }
            if(target === "8"){
                setdialBtn(dialBtn + target)
            }
            if(target === "9"){
                setdialBtn(dialBtn + target)
            }
            if(target === "*"){
                setdialBtn(dialBtn + target)
            }
            if(target === "0"){
                setdialBtn(dialBtn + target)
            }
            if(target === "#"){
                setdialBtn(dialBtn + target)
            }

            setcount(dialBtn)
            for(let i=0; i<=count.length; i++){
                if(i ===10){
                  setdialBtn(dialBtn)
                }
            }
            
    }

    const backspace = () => {
        setdialBtn(dialBtn.slice(0, -1))
    };

    return(
        <React.Fragment>
        <div className="phone-grid">
        <div className="output">
        <div className="c-operand">{dialBtn}</div>
        </div>
        <div onClick={handleTarget} >
            <div className='btn'>1
            <div className='btn-label' style={{"marginBottom" : "70px"}}></div>
            </div>
        </div>
        <div>
            <div className='btn' onClick={handleTarget}>2
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>ABC</div>
        </div>
        <div>
            <div className='btn' onClick={handleTarget} >3
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>DEF</div>
        </div>
        <div style={{"marginTop" : "-20px"}}>
            <div className='btn' onClick={handleTarget} >4
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>GHI</div>
        </div>
        <div style={{"marginTop" : "-20px"}}>
            <div className='btn' onClick={handleTarget} >5
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>LMN</div>
        </div>
        <div style={{"marginTop" : "-20px"}}>
            <div className='btn' onClick={handleTarget} >6
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>OPQ</div>
        </div>
        <div style={{"marginTop" : "-40px"}}>
            <div className='btn' onClick={handleTarget} >7
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>RST</div>
        </div>
        <div onClick={handleTarget} style={{"marginTop" : "-40px"}}>
            <div className='btn'>8
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>UVW</div>
        </div>
        <div style={{"marginTop" : "-40px"}}>
            <div className='btn' onClick={handleTarget} >9
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}>XYZ</div>
        </div>
        <div style={{"marginTop" : "-60px"}}>
            <div className='btn' onClick={handleTarget} >*
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
        <div style={{"marginTop" : "-60px"}}>
            <div className='btn'  onClick={handleTarget}>0
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
        <div style={{"marginTop" : "-60px"}}>
            <div className='btn' onClick={handleTarget}>#
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
        <div style={{"marginTop" : "-106px"}}>
            <div className='btn'>✰
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
        <div style={{"marginTop" : "-106px", "color" : "green"}}>
            <div className='btn'>✆
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
        <div style={{"marginTop" : "-100px", "fontSize" : "1rem"}}>
            <div className='btn' onClick={backspace}>←
            </div>
            <div className='btn-label' style={{"backgroundColor": "white"}}></div>
        </div>
    </div>
        </React.Fragment>
    )
}

export default Phone