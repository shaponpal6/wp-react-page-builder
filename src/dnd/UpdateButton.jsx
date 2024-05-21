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
    // const screen_id = getUrlParameter('screen_id');
    const screen_id = wpApiSettings.screen_id;
    fetch('http://localhost/wordpress/wp-json/bl/v1/save-screen/' + screen_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': wpApiSettings.nonce // Nonce for authentication (assuming wpApiSettings is available globally)
      },
      body: JSON.stringify(screenData?.data?.bl_screen_data ?? [])
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Screen data saved successfully:', data);
        alert('Screen data saved successfully');
      })
      .catch(error => {
        console.error('Error saving screen data:', error);
        alert('Error saving screen data:'+ error.message);
      });
  }
  return (
    <div>
      <button className='save-icon update-button' onClick={saveScreenData}><span class="dashicons dashicons-yes-alt"></span>&nbsp;Save Changes</button>
    </div>
  )
}

export default UpdateButton
