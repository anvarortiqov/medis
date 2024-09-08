import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react'
import Typography from '../Typography';
import "./style.css";
import PropTypes from "prop-types"

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

const Input = ({ children, className, rootClassName, placeholder, htmlType = "text", onChange, onBlur, required, label, name, disabled, readOnly, value }) => {

    const [InputClassName, setInputClassName] = useState("label-input")
    const [IsError, setIsError] = useState(false)

    return (
        <label className={classNames(rootClassName, "label")}>
            <div className="label-wrap">
                <Typography name={"text"} className='label-text'>{label}</Typography>
                <input
                    required={required?.required}
                    placeholder={placeholder}
                    className={classNames(className, InputClassName)}
                    name={name}
                    disabled={disabled}
                    readOnly={readOnly}
                    value={value}
                    onChange={event => {
                        if (typeof onChange === "function") {
                            onChange(event)
                        }
                        if (event.target.value === "" && required?.required) {
                            setInputClassName(prev => classNames(prev, "label-error"))
                            setIsError(true)
                        } else {
                            setInputClassName('label-input')
                            setIsError(false)
                        }
                    }}
                    onBlur={onBlur}
                    type={htmlType}
                />
            </div>

            {required && IsError && (
                <div className='label-error'>
                    {required?.message}
                </div>
            )}

            {children}
        </label>
    )
}

const TextArea = ({ children, className, rootClassName, placeholder, htmlType = "text", onChange, onBlur, required, label, name }) => {

    const [InputClassName, setInputClassName] = useState("label-textarea")
    const [IsError, setIsError] = useState(false)

    return <label className={classNames(rootClassName, "label")}>
        <div className="label-wrap">
            <Typography name={"text"} className='label-text'>{label}</Typography>
            <textarea required={required?.required} placeholder={placeholder} className={classNames(className, InputClassName)} name={name} onChange={event => {
                if (typeof onChange === "function") {
                    onChange(event)
                }

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

const Dropdown = ({ options = [], multi = false, rootClassName, label, name, onChange, disabled = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(multi ? [] : null);
    const dropdownRef = useRef(null);
    const [dropdownDirection, setDropdownDirection] = useState('bottom');

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen((prevState) => !prevState);
        }
    };

    const handleOptionClick = (option) => {
        if (disabled) return;

        let updatedOptions;
        if (multi) {
            if (selectedOptions.some((selected) => selected.value === option.value)) {
                updatedOptions = selectedOptions.filter((selected) => selected.value !== option.value);
            } else {
                updatedOptions = [...selectedOptions, option];
            }
            setSelectedOptions(updatedOptions);
            onChange && onChange(updatedOptions.map((opt) => opt.value));
        } else {
            updatedOptions = option;
            setSelectedOptions(updatedOptions);
            setIsOpen(false);
            onChange && onChange(option.value);
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

            setDropdownDirection(shouldOpenUp ? 'top' : 'bottom');

            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    const parseValue = (value) => {
        return !isNaN(value) && value !== '' ? Number(value) : value;
    };

    return (
        <label onMouseLeave={() => setIsOpen(false)} className={classNames(rootClassName, 'label')}>
            <div className="label-wrap">
                <Typography name={'text'} className="label-text">
                    {label}
                </Typography>
                <div className="dropdown" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="dropdown-button"
                        disabled={disabled}
                    >
                        {multi
                            ? selectedOptions.length > 0
                                ? selectedOptions.map((opt) => opt.label).join(', ')
                                : 'Select...'
                            : selectedOptions?.label || 'Select...'}
                    </button>
                    {isOpen && !disabled && (
                        <ul className={`dropdown-list dropdown-list-${dropdownDirection}`}>
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    className={`dropdown-option ${multi
                                            ? selectedOptions.some((selected) => selected.value === option.value)
                                                ? 'selected'
                                                : ''
                                            : selectedOptions?.value === option.value
                                                ? 'selected'
                                                : ''
                                        }`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                    <input
                        type="hidden"
                        name={name}
                        value={
                            multi
                                ? JSON.stringify(selectedOptions.map((opt) => parseValue(opt.value)))
                                : selectedOptions
                                    ? parseValue(selectedOptions.value)
                                    : ''
                        }
                    />
                </div>
            </div>
        </label>
    );
};



const UploadImage = ({ name, multi = false, rootClassName = '', onChange, label }) => {
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

export { Input, TextArea, Dropdown, UploadImage }

export default Form