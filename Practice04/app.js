function main(){
  var text = document.forms.form0.textbox.value;
  var canvas = document.getElementById('canvas');
  var newTag = document.createElement('div');
  newTag.innerText = text;
  canvas.appendChild(newTag);
}