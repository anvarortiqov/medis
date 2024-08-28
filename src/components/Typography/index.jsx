import classNames from 'classnames'
import React from 'react'
import "./style.css";

const Typography = ({ children, name, onClick, className, ...props }) => {
    switch (name) {
        case "h2": {
            return <h2 onClick={onClick} className={classNames(className, "typography-h2")} {...props}>{children}</h2>
        }
        case "text": {
            return <p onClick={onClick} className={classNames(className, "typography-text")} {...props}>{children}</p>
        }
        default: {
            return children
        }
    }
}

export default Typography