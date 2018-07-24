import React, { Component, Fragment } from 'react';

const ThemeContext = React.createContext('light');
const styles = {
    black: {
        backgroundColor: 'black',
        color: 'white'
    },
    red: {
        backgroundColor: 'red',
        color: 'white'
    }
};

class ContextApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'black'
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        const { theme } = this.state;

        theme === 'black'
            ? this.setState({
                  theme: 'red'
              })
            : this.setState({
                  theme: 'black'
              });
    }

    render() {
        const { theme } = this.state;

        return (
            <ThemeContext.Provider value={theme}>
                <button onClick={this.toggleTheme}>Toggle theme</button>

                <ThemeContext.Consumer>
                    {theme => (
                        <div className="theme" style={styles[theme]}>
                            {theme}
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        );
    }
}

export default ContextApi;
