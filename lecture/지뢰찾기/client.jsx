import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'

import MineSearch from './MimeSearch'

const Hot = hot(MineSearch)

ReactDom.render(<Hot />, document.querySelector('#root'))