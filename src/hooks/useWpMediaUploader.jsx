import { useState } from 'react';

const useWpMediaUploader = () => {
  const [images, setImages] = useState([]);
  const [mediaKey, setMediaKey] = useState('images');

  const openMediaUploader = (props={}, type) => {
    const mediaUploader = wp.media({
      title: 'Select Images',
      button: {
        text: 'Use these images',
      },
      multiple: true, // Allow multiple selection
      ...props
    });

    mediaUploader.on('select', () => {
      const attachments = mediaUploader.state().get('selection').toJSON();
      const images = attachments.length ? attachments.map(attachment => ({'id': attachment.id, 'url':attachment.url})): [];
      setImages(images);
    });
    setMediaKey(type);

    mediaUploader.open();
  };

  return [mediaKey, images, openMediaUploader];
};

export default useWpMediaUploader;
