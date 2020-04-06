import React,{PureComponent,useState,useRef} from 'react'

const ResponseCheck = () => {
    const [state,setState] = useState('waiting')
    const [message,setMessage] = useState('클릭해서 시작하세요')
    const [result,setResult] = useState([])
    
    //값이 바뀌어도 렌더링이 필요없는 값들은 useRef 사용
    const timeOut = useRef(null)
    const startTime = useRef()
    const endTime = useRef()

    const onClickScreen = () => {
        if(state==='waiting'){
            setState('ready')
            setMessage('초록색이 되면 클릭하세요')

            timeOut.current = setTimeout(()=>{
                this.setState({
                    state:'now',
                    message:'지금 클릭'
                })
                startTime.current = new Date()
            },Math.floor(Math.random()*1000)+2000)
            
        }else if(state==='ready'){//성급히 클릭
            clearTimeout(timeOut.current)
            setState('waiting')
            setMessage('너무 성급합니다 초록색 후 클릭하세요')
        }else if(state==='now'){
            endTime.current = new Date()
            setState('waiting')
            setMessage('클릭해서 시작하세요')
            setResult((prevResult)=>{
                return[...prevResult,endTime.current - startTime.current]
            })
        }
    }

    const onReset = () => {
        setResult([])
    }

    const renderAverage = () => {
        return result.length===0
        ? null
        : 
        <>
          <div>평균 시간: {result.reduce((a,c)=>a+c)/result.length}ms</div>
          <button onClick={onReset}>리셋</button>
        </>
    }

    return(
        <>
            <div 
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {/*false,undefined,null jsx에서 태그 없음을 뜻함 */}
            {renderAverage()}
            
        </>
    )
}

export default ResponseCheck