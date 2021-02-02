import React,{useState, useEffect} from 'react';

var quesNo=1;
var timeLeft = 19;
var downloadTimer = setInterval(function(){
document.getElementById("countdown").innerHTML = timeLeft + " s";
if(timeLeft<=-1){
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "Time is Up!";
}
timeLeft -= 1;
}, 1000);

const Content=props=>{
  const AnsAction=(e)=>{
    clearInterval(downloadTimer);
    let resultSection=document.getElementById('modalResult');
    let resultContent=document.getElementById('modalContent');
    resultSection.classList.add('d-flex');
    let resultBool=document.getElementById('rightWrong');

    let myValue=e.currentTarget.value;
    if(myValue===props.correctAns){
      resultBool.innerText="မှန်";
      resultContent.classList.add('right-answer');
      console.info("True");
    }else{
      resultBool.innerText="မှား";
      resultContent.classList.add('wrong-answer');
      console.warn("False");
    }
  }

  return(
    <div className="content">
      <h6 id="quesNo">1</h6>
      <p className="question">
        {props.question}
      </p>
      <button onClick={AnsAction} value={props.ansOne} className="option-1">
        {props.ansOne}
      </button><br/>
      <button onClick={AnsAction} value={props.ansTwo} className="option-2">
        {props.ansTwo}
      </button><br/>
      <button onClick={AnsAction} value={props.ansThree} className="option-3">
        {props.ansThree}
      </button><br/>
      <button onClick={AnsAction} value={props.ansFour} className="option-4">
        {props.ansFour}
      </button>
    </div>
  )
}

const ResultModal=props=>{
  // const ConAction=()=>{

  // }

  return(
    <div className="d-none modal-box" id="modalResult">
      <div className="modal-content" id="modalContent">
        <h3>သင့်အဖြေ <span id="rightWrong"></span>ပါသည်။</h3>
        <p id="correctAnsIs">အဖြေမှန်မှာ <span>{props.correctAns}</span> ဖြစ်ပါသည်။</p>
        <p id="exPlanation">{props.explanation}</p>
        <button>Continue</button>
      </div>
    </div>
  )
}
const App=props=>{
  
  const [data]=useState([
    {
      id:1,
      question: "ကမ္ဘာ့အကြီးဆုံးတိုက်မှာမည်သည့်တိုက်ဖြစ်သနည်း။",
      category: "ကမ္ဘာ့တိုက်ကြီးများ",
      ansOne: "အာရှတိုက်",
      ansTwo: "မြောက်အမေရိကတိုက်",
      ansThree: "အာဖရိကတိုက်",
      ansFour: "ဥရောပတိုက်",
      correctAns: "အာရှတိုက်",
      explanation: "အာရှတိုက်သည် လူဦးရေအများဆုံးနှင့် အကြီးဆုံး တိုက်ဖြစ်ပါသည်။ကမ္ဘာ့ အရှေ့ခြမ်းတွင်တည်ရှိပြီး နိုင်ငံပေါင်း ၄၈ နိုင်ငံဖြင့် ဖွဲ့စည်းထားပါသည်။",
      },
  ]);
  
  return(
    <>
      <h1 className="text-info">Little Polymath</h1>
      <h4 id="countdown">20 s</h4>
      {data.filter(i=>i.id===quesNo).map(i=>(
        <Content
          key={i.id}
          question={i.question}
          ansOne={i.ansOne}
          ansTwo={i.ansTwo}
          ansThree={i.ansThree}
          ansFour={i.ansFour}
          correctAns={i.correctAns}
          explanation={i.explanation}
        />
      ))}
      {data.filter(i=>i.id===1).map(i=>(
        <ResultModal
          key={i.id}
          correctAns={i.correctAns}
          explanation={i.explanation}
        />
      ))}
    </>
  )
}

export default App;