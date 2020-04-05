import React,{PureComponent,useState,memo} from 'react'

// class Try extends PureComponent{
//     render(){
//         const {tryInfo} = this.props
//         return(
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         )
//     }
// }

const Try = memo(({tryInfo}) => {
    //props 부모에서만 바꿔야함
    // const [result, setResult] = useState(tryInfo.result);

    // const onClick = () =>{
    //     setResult('1')
    // }
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
})

export default Try