import React, { useImperativeHandle, useRef, forwardRef, useState, useEffect } from 'react';

const InputComponent = forwardRef(({ style={}, name="text", value="", title="", type="text", onChange=null, focus=false, ...props }, ref) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || '');

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if(focus) focusInput();
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    changeValue: (newValue) => {
      setInputValue(newValue);
    }
  }));

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  const customStyle = {
    border: '1px solid #50575e',
    padding: '4px',
    margin: '10px 0',
    borderRadius: '5px',
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontWeight: 400,
  };

  return (
    <div className="component-input">
        <label htmlFor={name}>{title}:</label>
        <input 
            ref={inputRef} 
            type={type}
            id={name} 
            name={name} 
            style={{...customStyle, ...style}} 
            value={inputValue} 
            onChange={handleChange} 
            {...props} 
        />
    </div>
  );
});

export default InputComponent;
