import React,{PureComponent} from 'react'
import ReactDom from 'react-dom'
import {hot} from 'react-hot-loader/root'

import RSP from './RSP'
import RSPHooks from './RSPHooks'

const Hot = hot(RSPHooks)

ReactDom.render(<Hot />,document.querySelector('#root'))