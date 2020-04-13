import React,{PureComponent} from 'react'
import ReactDom from 'react-dom'
import {hot} from 'react-hot-loader/root'

import Lotto from './LottoHooks'

const Hot = hot(Lotto)

ReactDom.render(<Hot />,document.querySelector('#root'))