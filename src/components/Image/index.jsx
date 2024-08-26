import classNames from 'classnames'
import React from 'react'
import DefaultImage from "../../assets/default.png";

const Image = ({ src, title, className, onClick, ...props }) => {
    return (
        <img loading='lazy' onClick={onClick} title={title ?? "Image title"} src={src ?? DefaultImage} alt={title ?? "Image alt"} className={classNames("image", className)} {...props} />
    )
}

export default Image