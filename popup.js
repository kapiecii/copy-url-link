chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let tab = tabs[0];
  let title = tab.title;
  let url = tab.url;
  document.getElementById('url').innerHTML = '<a href="' + url + '">' + title + '</a>';
});
