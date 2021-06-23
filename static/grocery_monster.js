'use strict';

const $ = function(id) {
  return document.getElementById(id);
};

function getCanvas() {
  const canvas = $('canvas');
  const ctx = canvas.getContext('2d');
  return { canvas, ctx };
}

function insertImage(imageUrl) {
  const { canvas, ctx } = getCanvas();
  const imageObj = new Image();
  imageObj.src = imageUrl;
  imageObj.onload = () => {
    canvas.width = imageObj.naturalWidth;
    canvas.height = imageObj.naturalHeight;
    ctx.drawImage(imageObj, 0, 0);
  }
  imageObj.src = imageUrl;
}

function annotateImage(annotations) {
  console.log(annotations);
  annotations.forEach((annotation) => {
    drawRect(annotation);
    drawText(annotation);
  });
}

function drawRect(annotation) {
  const { canvas, ctx } = getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const vertices = annotation.boundingPoly.normalizedVertices;
  const x = vertices[0].x * canvasWidth;
  const y = vertices[0].y * canvasHeight;
  const rectWidth = (vertices[1].x - vertices[0].x) * canvasWidth;
  const rectHeight = (vertices[2].y - vertices[1].y) * canvasHeight;

  ctx.save();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x, y, rectWidth, rectHeight);
  ctx.restore();
}

function drawText(annotation) {
  const { canvas, ctx } = getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const vertices = annotation.boundingPoly.normalizedVertices;
  const x = vertices[0].x * canvasWidth;
  const y = vertices[0].y * canvasHeight;
  const fontSize = 24;
  const text = annotation.name;
     
  ctx.save();

  ctx.font = `${fontSize}px sans-serif`;
  ctx.textBaseline = 'top';
  // background color
  ctx.fillStyle = 'black';
  const textWidth = ctx.measureText(text).width;

  ctx.fillRect(x, y, textWidth, fontSize);
  
  // text color
  ctx.fillStyle = 'red';
  ctx.fillText(text, x, y);
  
  /// restore original state
  ctx.restore();
}

async function detect() {
  const photoUrl = $('photo-url').value;

  insertImage(photoUrl);
  const { annotations } = await sendDetectionRequest(photoUrl);
  annotateImage(annotations);
};

async function sendDetectionRequest(photoUrl) {
  const response = await fetch('./detect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ photoUrl })
  });

  return response.json();
}

function clearEntries() {
	$('photo-url').value = '';
  const { canvas, ctx } = getCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.onload = function() {
  $('detect').onclick = detect;
  $('clear').onclick = clearEntries;
  $('photo-url').focus();
};