import React from 'react';
import PropTypes from 'prop-types';

function LangugesNav ({selected, onUpdateLanguge}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='flex-center'>
            {languages.map((language) => (
                <li key={language}>
                    <button
                        className='btn-clear nav-link'
                        style={language === selected
                            ? { color: 'red'}
                            : null }
                        onClick={() => onUpdateLanguge(language)}
                    >
                    {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LangugesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguge: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage (selectedLanguage){
        this.setState({
            selectedLanguage
        });
    }
    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LangugesNav
                    selected={selectedLanguage}
                    onUpdateLanguge={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}
