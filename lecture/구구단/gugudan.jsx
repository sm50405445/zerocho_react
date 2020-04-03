const React = require('react')
const {Component,Fragment} = React

class GuguDan extends Component{
    state = {
        first:Math.ceil(Math.random()*9),
        second:Math.ceil(Math.random()*9),
        value: '',
        result: '',
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(parseInt(this.state.value) === parseInt(this.state.first)*parseInt(this.state.second)){
            this.setState({
                result:'정답 : '+this.state.value,
                first:Math.ceil(Math.random()*9),
                second:Math.ceil(Math.random()*9),
                value:''
            })
        }else{
            this.setState({
                result:'땡',
                value:''
            })
        }
    }

    onChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }

    onRef = (c) => {
        this.input = c
    }

    render(){
       return <Fragment>
                        <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
                        <form onSubmit={this.onSubmit}>
                            <input ref={this.onRef} type="number" value={this.state.value} onChange={this.onChange} className="" htmlFor=""/>
                            <button>입력!</button>
                        </form>
                        <div>{this.state.result}</div>
                    </Fragment>
    }
}


module.exports = GuguDan