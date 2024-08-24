import React from 'react'

const Form = ({ onFininsh, children, className, action }) => {
    const onSubmit = event => {

        event.preventDefault()

        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        onFininsh(formValues)
    }

    return (
        <form className={className} action={action} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form