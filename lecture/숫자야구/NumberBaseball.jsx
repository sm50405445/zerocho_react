import React,{useState,useRef,memo} from 'react'
import Try from './try'

function getNumbers() {
    const condidate = [1,2,3,4,5,6,7,8,9]
    const array = []
    for(let i = 0 ; i<4 ; i++){
        const chosen = condidate.splice(Math.floor(Math.random()*(9-i)),1)[0]
        array.push(chosen)
    }
    return array
}

const NumberBaseBall = memo(() => {

    const [result,setResult] = useState('')
    const [value,setValue] = useState('')
    const [answer,setAnswer] = useState(getNumbers())
    const [tries,setTries] = useState([])
    const inputEl = useRef(null)

    const onSubmitForm = (e) => {
        e.preventDefault()
        if(value===answer.join('')){ //배열
            setResult('홈런')
            setTries((prevState)=>{
               return [...prevState.tries,{try:value,result:'홈런!'}]
            })
            alert('게임을 초기화')
            setValue('')
            setAnswer(getNumbers())
            setTries([])
            inputEl.current.focus()
        }else{
            const answerArr = value.split('').map((v)=>parseInt(v))
            let strike = 0
            let ball = 0
            if(tries.length>=9){
                setResult(`10번 넘게 틀려서 실패 답은 ${answer.join(',')}입니다`)
                alert('게임을 초기화')
                setValue('')
                setAnswer(getNumbers())
                setTries([])
                inputEl.current.focus()
            }else{
                for(let i = 0 ; i<4 ; i++){
                    if(answerArr[i]===answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArr[i])){
                        ball += 1
                    }
                }
                setTries((prevState)=>[...prevState,{try:value,result:`${strike} 스트라이크 ${ball} 볼 입니다`}])
                setValue('')
                inputEl.current.focus()
            }   
            
            
        }

    }

    return(
         <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}> 
                <input
                    ref={inputEl} 
                    maxLength={4} 
                    value={value} 
                    onChange={(e)=>setValue(e.target.value)}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {/* map 안에 key값은 무조건 설정해주는 것이 좋음 */}
                {tries.map((v,i)=>{
                    return(    
                    <Try key={`${i+1}차 시도`} tryInfo={v} index={i}/>
                    ) 
                })}
            </ul>
        </>
    )
})



export default NumberBaseBall