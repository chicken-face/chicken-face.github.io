function generateIframe() {
  var url = document.getElementById('url').value;
  if (!url) {
    alert('Please enter a URL.');
    return;
  }
  // Remove any previous iframe
  var oldIframe = document.getElementById('bypass-iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  // Create new iframe
  var iframe = document.createElement('iframe');
  iframe.id = 'bypass-iframe';
  iframe.src = url.startsWith('http') ? url : 'https://' + url;
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = '2px solid #2d7dd2';
  iframe.style.marginTop = '20px';
  document.body.appendChild(iframe);
}
