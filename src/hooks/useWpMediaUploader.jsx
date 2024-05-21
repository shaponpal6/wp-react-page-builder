import { useState } from 'react';

const useWpMediaUploader = () => {
  const [images, setImages] = useState([]);

  const openMediaUploader = () => {
    const mediaUploader = wp.media({
      title: 'Select Images',
      button: {
        text: 'Use these images',
      },
      multiple: true, // Allow multiple selection
    });

    mediaUploader.on('select', () => {
      const attachments = mediaUploader.state().get('selection').toJSON();
      const images = attachments.length ? attachments.map(attachment => ({'id': attachment.id, 'url':attachment.url})): [];
      setImages(images);
    });

    mediaUploader.open();
  };

  return [images, openMediaUploader];
};

export default useWpMediaUploader;
