import React,{Component} from 'react'

// 클래스의 경우 -> constructor -> render -> ref -> componentDidmount -> setstate,props 바뀔때 -> 
// shouldcomponentUpdate(return true) ->render -> componentDidupdate ->
// 부모가 날 없애고 -> componentWillUnmount

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
}

const scores = {
    가위:1,
    바위:0,
    보:-1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1]===imgCoord
    })[0]
}

class RSP extends Component{
    state={
        result:'',
        imgCoord:rspCoords.바위,
        score:0
    }

    interval

    //렌더가 처음 성공적이면 해당 함수 실행, 여기에 비동기 요청 많이
    componentDidMount(){
        this.interval = this.changeHand()
    }

    //리렌더링 후
    componentDidUpdate(){

    }

    //컴포넌트가 제거되기 직전 부모가 자식 삭제할 때,비동기 요청 정리 여기서
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onClickBtn(choice){
        const {imgCoord} = this.state
        clearInterval(this.interval)
        const myScore = scores[choice]
        const cpuScore = scores[computerChoice(imgCoord)]
        const diff = myScore-cpuScore
        if(diff===0){
            this.setState({
                result:'비겼습니다'
            })
        }else if([-1,2].includes(diff)){
            this.setState((prevState)=>{
                return{
                    result:'이겼습니다',
                    score:prevState.score +1
                }
            })
        }else{
            this.setState((prevState)=>{
                return{
                    result:'졌습니다',
                    score:prevState.score -1
                }
            })
        }
        this.interval = this.changeHand()
    }

    changeHand = () => {
        this.interval = setInterval(()=>{
            const {imgCoord} = this.state
            if(imgCoord===rspCoords.바위){
                this.setState({
                    imgCoord:rspCoords.가위
                })
            }else if(imgCoord===rspCoords.가위){
                this.setState({
                    imgCoord:rspCoords.보
                })
            }else if(imgCoord===rspCoords.보){
                this.setState({
                    imgCoord:rspCoords.바위
                })
            }
        },1000)
    }

    render(){
        const {result,score,imgCoord} = this.state

        return(
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
                <div>
                    <button id="rock" className="btn" onClick={()=>this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={()=>this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={()=>this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        )   
    }
}

export default RSP