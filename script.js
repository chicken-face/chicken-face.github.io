function generateIframe() {
  var url = document.getElementById('url').value;
  if (!url) {
    alert('Please enter a URL.');
    return;
  }
  // Remove any previous iframe or error message
  var oldIframe = document.getElementById('bypass-iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  var oldError = document.getElementById('iframe-error');
  if (oldError) {
    oldError.remove();
  }
  // Create new iframe
  var iframe = document.createElement('iframe');
  iframe.id = 'bypass-iframe';
  iframe.src = url.startsWith('http') ? url : 'https://' + url;
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = '2px solid #2d7dd2';
  iframe.style.marginTop = '20px';
  // Show error if iframe fails to load (blocked by X-Frame-Options or CSP)
  iframe.onerror = function() {
    var errorMsg = document.createElement('div');
    errorMsg.id = 'iframe-error';
    errorMsg.style.color = 'red';
    errorMsg.style.marginTop = '20px';
    errorMsg.textContent = 'This site cannot be loaded in an iframe due to security restrictions.';
    document.body.appendChild(errorMsg);
  };
  document.body.appendChild(iframe);
}
