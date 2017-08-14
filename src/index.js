import ReactDom from 'react-dom';
import Main from './ui/main'

document.addEventListener('DOMContentLoaded', _ => {
    ReactDom.render(<Main />, document.query('#content'));
})
