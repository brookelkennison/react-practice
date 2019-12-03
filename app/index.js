import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Component
// State
// LifeCycle
// UI

class App extends React.component{
    render () {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
