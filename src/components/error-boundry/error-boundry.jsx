import React, { Component } from 'react';

import "./error-boundry.scss";
import icon from "./death-star.png";

class ErrorBoundry extends Component {
    state = {
        hasError:false
    };

    componentDidCatch(){
        this.setState({ hasError: true });
    };

    render() {

        if (this.state.hasError) {
            return (    
                <div className="error-indicator">
                    <img src={icon} alt="error icon"/>
                    <span className="boom">Boom!</span>
                    <span>
                        something has gone terribly wrong
                    </span>
                    <span>
                        (but we already sent droids to fix it)
                    </span>
                </div>
            )
        };

        return this.props.children;
    };
}

export default ErrorBoundry;