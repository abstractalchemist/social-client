import React from 'react';
import ReactDom from 'react-dom';
import Main from './ui/main'


document.addEventListener('DOMContentLoaded', _ => {
    ReactDom.render(<Main />, document.querySelector('#content'));
})
