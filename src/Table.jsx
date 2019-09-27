import React , {useState } from 'react';

const Table = (props) =>{
    const [width ,  setWidth] = useState(props.defaultProp.initalWidth);
    const [height ,  setHeight] = useState(props.defaultProp.initalHeight);
    const initialmoveTop = 0;
    const initialmoveLeft = 0;
    const initialDisplay = 'none';


    let [moveTop , setMoveTop] = useState(initialmoveTop);
    let [moveLeft , setMoveLeft] = useState(initialmoveLeft);
    let [displayBut , setDisplay] = useState(initialDisplay)

    const style = {
        size : {
            width : props.defaultProp.size + 'px',
            height : props.defaultProp.size + 'px',
        }, 
        minTop:{
           top: 58 + moveTop +'px',
           transition: 1 +'s',
           display: displayBut,
           
        }, 
        minLeft:{
            left: 58 + moveLeft + 'px',
            transition: 1 +'s',
            display: displayBut,
        }
    };


    const cells = new Array(height)
        .fill(new Array(width)
            .fill()
        );


    const goBut = function (cellInfo){
        const squareTop  = cellInfo.target.offsetTop;
        const squareLeft = cellInfo.target.offsetLeft;
        setMoveTop(moveTop = squareTop)
        setMoveLeft(moveLeft = squareLeft) 
    }; 
    
    const showMinBut = () =>{
        setDisplay(displayBut = 'block')
    }

    const hideMinBut = () =>{
        if(displayBut = 'block'){
           setTimeout(() => {
             setDisplay(displayBut = 'none')
           }, 1000); 
        }else{
            setDisplay(displayBut = 'none')
        }
       
    }

    const minRow = (infoBut) =>{
        const coordTopBut = infoBut.target.offsetTop;

        if(height !== 1){
            setHeight(height-1)
        }
        
    }

    const minCol = () =>{
        if(width !==1){
            setWidth(width-1)
        }
    }


    return (
        <div className="container">
            <button className="buttonMinus minCol" style = {Object.assign({}, style.size, style.minLeft)}  onClick = {()=> minCol()}> <span>-</span></button>
            <button className="buttonMinus minRow" style = {Object.assign({}, style.size, style.minTop)} onClick = {(event)=> minRow(event)}> <span>--</span></button>
            <table>      
                <tbody>
                    {cells.map( (el,index) =>(
                        <tr key = {index}>
                            {el.map( (cell,index) =>(      
                                <td key={index} style = {style.size}  onMouseOver= {(event) => {goBut(event); showMinBut()}}  ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="buttonPlus plCol" style = {style.size} onClick = {()=> setWidth(width + 1)}> <span>+</span></button>
            <button className="buttonPlus plRow" style = {style.size} onClick = {()=> setHeight(height+1)}> <span>++</span></button> 
        </div>
    )
}

export default Table ; 