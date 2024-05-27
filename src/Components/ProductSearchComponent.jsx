import React, { useImperativeHandle, useRef, forwardRef, useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';

const ProductSearchComponent = forwardRef(({ style={}, name="product", value="", title="", type="text", isMulti=true, onChange=null, focus=false, ...props }, ref) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value || '');
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(null);

  useEffect(() => {
    fetch('http://localhost/wordpress/wp-json/wc/store/products')
      .then(response => response.json())
      .then(data => {
        // Transform the data into the format required by react-select
        setProducts(data)
        const formattedOptions = data.map(post => ({
          value: post.id,
          label: post.name,
        }));
        setOptions(formattedOptions);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleChange = (selected) => {
    console.log('selected', selected, products)
    setSelectedOptions(selected);
    let selectedOptions = selected;
    if (!isMulti && selected){
      selectedOptions = [selected];
    }
    if (onChange && selectedOptions && selectedOptions.length > 0) {
      const selectedProducts = selectedOptions.map((select) => {
        const item = products.filter((p)=> p.id === select.value)[0];
        console.log('$$item', item)
        return {
          id: item.id,
          name: item.name || "",
          sku: item.sku || "",
          price: item?.prices?.price || 0,
          regular_price: item?.prices?.regular_price || 0,
          sale_price: item?.prices?.sale_price || 0,
          description: item.description || "",
          short_description: item.short_description || "",
          images: item.images && item.images.length > 0 ? item.images.map((item) =>({id: item.id, alt: item.alt, src: item.src})): [],
        }
      });
      console.log('product', selectedProducts)
      if(!isMulti){
        onChange(name, selectedProducts[0]);
      }else{
        onChange(name, selectedProducts);
      }
    }
  };

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

  return (
    <div className="component-input">
        <label htmlFor={name}>{title}:</label>
        <Select
          ref={inputRef} 
          value={selectedOptions}
          onChange={handleChange}
          options={options}
          isMulti={isMulti}
          placeholder={isMulti ? "Select multiple posts" : "Select a post"}
          id={name} 
          name={name}
          // value={inputValue} 
          {...props} 
        />
    </div>
  );
});

export default ProductSearchComponent;
