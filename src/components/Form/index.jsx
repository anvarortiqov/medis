import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react'
import Typography from '../Typography';
import "./style.css";

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

export const Input = ({ children, className, rootClassName, placeholder, htmlType = "text", onChange, onBlur, required, label, name }) => {

    const [InputClassName, setInputClassName] = useState("label-input")
    const [IsError, setIsError] = useState(false)

    return <label className={classNames(rootClassName, "label")}>
        <div className="label-wrap">
            <Typography name={"text"} className='label-text'>{label}</Typography>
            <input required={required?.required} placeholder={placeholder} className={classNames(className, InputClassName)} name={name} onChange={event => {
                // onChange(event)
                if (event.target.value === "" && required?.required) {
                    setInputClassName(prev => classNames(prev, "label-error"))
                    setIsError(true)
                } else {
                    setInputClassName('label-input')
                    setIsError(false)
                }
            }} onBlur={onBlur} type={htmlType} />
        </div>

        {required && IsError && <div className='label-error'>
            {required?.message}
        </div>}

        {children}
    </label>
}

export const TextArea = ({ children, className, rootClassName, placeholder, htmlType = "text", onChange, onBlur, required, label, name }) => {

    const [InputClassName, setInputClassName] = useState("label-textarea")
    const [IsError, setIsError] = useState(false)

    return <label className={classNames(rootClassName, "label")}>
        <div className="label-wrap">
            <Typography name={"text"} className='label-text'>{label}</Typography>
            <textarea required={required?.required} placeholder={placeholder} className={classNames(className, InputClassName)} name={name} onChange={event => {
                // onChange(event)
                if (event.target.value === "" && required?.required) {
                    setInputClassName(prev => classNames(prev, "label-error"))
                    setIsError(true)
                } else {
                    setInputClassName('label-textarea')
                    setIsError(false)
                }
            }} onBlur={onBlur} type={htmlType} />
        </div>

        {required && IsError && <div className='label-error'>
            {required?.message}
        </div>}

        {children}
    </label>
}

export const Dropdown = ({ options = [], multi = false, rootClassName, label, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const dropdownRef = useRef(null);
    const [dropdownDirection, setDropdownDirection] = useState('bottom');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        const { value } = option;
        if (multi) {
            if (selectedValues.includes(value)) {
                setSelectedValues(selectedValues.filter((val) => val !== value));
            } else {
                setSelectedValues([...selectedValues, value]);
            }
        } else {
            setSelectedValues([value]);
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const shouldOpenUp = window.innerHeight - dropdownRect.bottom < 200;

            if (shouldOpenUp) {
                setDropdownDirection('top');
            } else {
                setDropdownDirection('bottom');
            }

            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <label onMouseLeave={() => setIsOpen(false)} className={classNames(rootClassName, "label")}>
            <div className="label-wrap">
                <Typography name={"text"} className="label-text">{label}</Typography>
                <div className="dropdown" ref={dropdownRef}>
                    <button type="button" onClick={toggleDropdown} className="dropdown-button">
                        {multi
                            ? selectedValues.length > 0
                                ? selectedValues.join(', ')
                                : 'Select...'
                            : selectedValues[0] || 'Select...'}
                    </button>
                    {isOpen && (
                        <ul className={`dropdown-list dropdown-list-${dropdownDirection}`}>
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    className={`dropdown-option ${selectedValues.includes(option.value) ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                    <input type="hidden" name={name} value={selectedValues.join(',')} />
                </div>
            </div>
        </label>
    );
};

export const UploadImage = ({ name, multi = false, rootClassName = '', onChange, label }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(multi ? [...files, ...selectedFiles] : selectedFiles);

        if (onChange) {
            onChange(multi ? [...files, ...selectedFiles] : selectedFiles);
        }
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);

        if (onChange) {
            onChange(updatedFiles);
        }
    };

    return (
        <label className={classNames(rootClassName)}>
            <Typography name={"text"} className="label-text">{label}</Typography>

            <div className={`upload-image`}>
                <input
                    type="file"
                    name={name}
                    multiple={multi}
                    onChange={handleFileChange}
                    className="upload-input"
                />

                <div className="uploaded-files">
                    {files.map((file, index) => (
                        <div key={index} className="file-item">
                            <span>{file.name}</span>
                            <button type="button" onClick={() => removeFile(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </label>
    );
};

export default Form