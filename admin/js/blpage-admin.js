(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	// Get resizable elements
	// Get resizable elements
const resizableElements = document.querySelectorAll('.resizable');

// Add event listener for mouse down event on resizable elements
resizableElements.forEach(element => {
	console.log('element', element)
  element.addEventListener('mousedown', startResize);
});

// Function to start resizing
function startResize(e) {
  e.preventDefault();
  const element = e.target;
  const startX = e.clientX;
  const startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10);

  // Function to handle mouse move event
  function resize(e) {
    const width = startWidth + e.clientX - startX;
    element.style.width = `${width}px`;
  }

  // Function to handle mouse up event
  function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
  }

  // Add event listeners for mouse move and mouse up events
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
}



})( jQuery );
