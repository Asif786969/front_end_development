
const Btn = () => {
    let state=0;
    const decrement=(e)=>{
        e.preventDefault();
        state-=1;
        console.log(state);
    }
    
    const increment=()=>{
        // e.preventDefault()
        state+=1;
        let v=document.getElementById('#output');
        
        v.innerText=state;
        console.log(state);
        
    }
    const change=()=>{
        let v=document.getElementById('output');
        console.log();
    }
    return (  
        <div className="buttons">
            <button id="plus"onClick={increment}>+1</button>
            <button id="minus"onClick={decrement}>-1</button>
            <span is="output" onChange={change}>{state}</span>
          
        </div>
       
    );
    
}

 
export default Btn;