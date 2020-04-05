import React,{PureComponent} from 'react'

class ResponseCheck extends PureComponent{
    state = {
        state:'waiting',
        message:'클릭해서 시작하세요',
        result:[]
    }

    //렌더링 x
    timeout
    startTime
    endTime

    onClickScreen = () => {
        const{state,message,result} = this.state
        if(state==='waiting'){
            this.setState({
                state:'ready',
                message:'초록색이 되면 클릭하세요'
            })
            this.timeout = setTimeout(()=>{
                this.setState({
                    state:'now',
                    message:'지금 클릭'
                })
            },Math.floor(Math.random()*1000)+2000)
            this.startTime = new Date()
        }else if(state==='ready'){//성급히 클릭
            clearTimeout(this.timeout)
            this.setState({
                state:'waiting',
                message:'너무 성급합니다 초록색 후 클릭하세요'
            })

        }else if(state==='now'){
            this.endTime = new Date()
            this.setState((prevState)=>{
                return{
                    state:'waiting',
                    message:'클릭해서 시작하세요',
                    result:[...prevState.result,this.endTime - this.startTime]
                }
            })
        }
    }

    renderAverage = () => {
        const {result} = this.state
        return result.length===0
        ? null
        : <div>평균 시간: {result.reduce((a,c)=>a+c)/result.length}ms</div>
    }

    render(){
        return(
            <>
                <div 
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                {/*false,undefined,null jsx에서 태그 없음을 뜻함 */}
                {this.renderAverage()}
                
            </>
        )
    }
}

export default ResponseCheck