import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const RichTextEditor = ({ name, title, content, onChange }) => {
  const [editorContent, setEditorContent] = useState(content);

  const handleEditorChange = (value) => {
    setEditorContent(value);
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <div style={{ width: '100%', height: 'auto', display: 'block' }}>
      <div className="component-input">
        <label htmlFor={name}>{title}:</label>
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ color: [] }, { background: [] }],
              [{ script: 'super' }, { script: 'sub' }],
              [{ align: [] }],
              ['link', 'image', 'video'],
              ['clean'],
            ],
          }}
          formats={[
            'header',
            'font',
            'list',
            'bullet',
            'bold',
            'italic',
            'underline',
            'strike',
            'color',
            'background',
            'script',
            'align',
            'link',
            'image',
            'video',
          ]}
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
