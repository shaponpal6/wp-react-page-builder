import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';

function UpdateButton() {
  const screenData = useSelector((state) => state.screen);

  // Function to parse URL parameters
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  function saveScreenData() {
    const screen_id = getUrlParameter('screen_id');
    console.log('screenData', screenData)
    fetch('http://localhost/wordpress/wp-json/bl/v1/save-screen/' + screen_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': wpApiSettings.nonce // Nonce for authentication (assuming wpApiSettings is available globally)
      },
      body: JSON.stringify(screenData?.data?.bl_screen_data ?? [])
    })
      .then(response => {
        console.log('response', response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Screen data saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving screen data:', error);
      });
  }
  return (
    <div>
      <button className='save-icon' onClick={saveScreenData}>Update</button>
    </div>
  )
}

export default UpdateButton
