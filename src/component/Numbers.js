import React from 'react'
import './Numbers.css';
import {useEffect} from 'react';
import {memo} from "react";
const Numbers=  function Numbers({fn,txt}) {
    let boxx={
        display:"flex",
        flexDirection:"column",
        height:"80%"
    }
    
    function priority(c){
        switch(c){
            case '*':
                return 4;
            case '/':
                return 4;
            case '+':
                return 3;
            case '-':
                return 2;
            default:
                return 0;
        }
    }
    
    const calculate=(text)=>{
        // 23+3-2
        // [23,+,3,-2]
        let num=0,a=[];
        for(let i=0;i<text.length;i++){
            if(text[i]>='0' && text[i]<='9'){
                num=num*10+parseInt(text[i]);
                if(i==text.length-1 || !(text[i+1]>='0' && text[i]<='9')){
                    a.push(num);
                    num=0;
                }
            }
            else{
                a.push(text[i]);
            }
        }
        let b=[];// (a+b)
        let res=[],flag=0;
        if(txt[0]=='-'){
            flag=1;
        }
        for(let i=flag;i<a.length;i++){
            if(isNaN(a[i])){
                if(a[i]==='(')   b.push('(');
                else if(a[i]===')'){
                    while(b.length>0 && b[b.length-1]!='('){
                        res.push(b[b.length-1]);
        
                        b.pop();
                    }
                    b.pop();
                }
                else{
                    if(b.length==0 || priority(b[b.length-1])<priority(a[i]))  b.push(a[i]);
                    else if(priority(b[b.length-1])>=priority(a[i])){
                        while(b.length>0 && priority(b[b.length-1])>=priority(a[i])){
                            res.push(b.pop());
                            
                        }
                        b.push(a[i]);
                    }
                }
            }
            else{
                if(flag==1){
                    res.push(-a[i]);
                    flag=0;
                }
                else
                res.push(a[i]);
            }
        }
        while(b.length>0){
            res.push(b.pop());
        }
    //    console.log(res);
      //console.log(a);
        // again taking a stack to calculate the result
        let ui=[];
        for(let i=0;i<res.length;i++){
            if(isNaN(res[i])){
                let a=ui.pop(),b=ui.pop();
                if(res[i]==='/'){
                    var c=b/a;
                    ui.push(c);
                }
                else if(res[i]==='*') {
                    ui.push(a*b);
                }   
                else if(res[i]==='-'){
                    ui.push(b-a);
                }
                else if(res[i]==='+'){
                    ui.push(a+b);
                }
            }
            else    ui.push(res[i]);
        }
        fn(''+ui[0]);
    }
    // useEffect(()=>{
    // const f=document.getElementsByClassName("line");
    // let g=[];
    // for(var i=0;i<f.length;i++){
    //     const op=f[i].querySelectorAll("div");
    //     for(let j=0;j<op.length;j++){
    //         g.push(op[j]);
    //         if(op[j].innerHTML==="clear"){
    //             op[j].addEventListener("click",()=>{fn("")});
    //         }
    //         else if(op[j].innerHTML==="="){
    //             op[j].addEventListener("click",()=>{calculate(txt)});
    //         }
    //         else{
    //         op[j].addEventListener("click",()=>{fn(txt+op[j].innerHTML)});
    //         }
    //     }
    // }
    // },[]);
   
    return (
        <div className="box" style={boxx}>
           <div id="first" className="line">
               <div id="clear" onClick={()=>{fn("")}}>clear</div>
               <div onClick={()=>{fn(txt+'0')}}>0</div>
               <div onClick={()=>{fn(txt+'/')}}>/</div>
           </div>
           <div className="line">
               <div onClick={()=>{fn(txt+'7')}}>7</div>
               <div onClick={()=>{fn(txt+'8')}}>8</div>
               <div onClick={()=>{fn(txt+'9')}}>9</div>
               <div onClick={()=>{fn(txt+'-')}}>-</div>
           </div>
           <div className="line">
               <div onClick={()=>{fn(txt+'4')}}>4</div>
               <div onClick={()=>{fn(txt+'5')}}>5</div>
               <div onClick={()=>{fn(txt+'6')}}>6</div>
               <div onClick={()=>{fn(txt+'+')}}>+</div>
           </div>
           <div className="line">
                <div onClick={()=>{fn(txt+'1')}}>1</div>
                <div onClick={()=>{fn(txt+'2')}}>2</div>
                <div onClick={()=>{fn(txt+'3')}}>3</div>
                <div onClick={()=>{fn(txt+'4')}}>*</div>
           </div>
           <div className="line">
               <div onClick={()=>{fn(txt+'(')}}>(</div>
               <div onClick={()=>{fn(txt+')')}}>)</div>
               <div id="equals" onClick={()=>{calculate(txt)}}>=</div>
           </div>
        </div>
       
    )
}
export default memo(Numbers);