var converter = new showdown.Converter();
var copyright_markdown = '';
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      copyright_markdown = this.responseText;
      document.getElementById('copyright-result').innerHTML = converter.makeHtml(copyright_markdown);
    }
  };
  xhttp.open('GET', 'https://riseme.page/copyright.md', true);
  xhttp.send();
}