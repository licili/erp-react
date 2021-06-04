import React from 'react';
import ReactDOM from 'react-dom';

import ERouter from './router'
import './style/common.less'; //这里引入其他文件也可以用得到


ReactDOM.render(
  <React.StrictMode>
    <ERouter />
  </React.StrictMode>,
  document.getElementById('root')
);




