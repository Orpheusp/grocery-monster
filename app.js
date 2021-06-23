const express = require('express');
const path = require('path');
const vision = require('@google-cloud/vision');
const {GCLOUD_CREDENTIAL_PATH, GCLOUD_PROJECT_ID} = require('./app_secrets');

const imageAnnotator = new vision.ImageAnnotatorClient({
  projectId: GCLOUD_PROJECT_ID,
  keyFilename: GCLOUD_CREDENTIAL_PATH,
});

const app = express();
const port = 8000;

app.use(express.static('static'));
app.use('/examples', express.static('examples'));
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

async function annotateImage(url) {
  // Performs label detection on the image file

  const [result] = await imageAnnotator.objectLocalization(url);
  const annotations = result.localizedObjectAnnotations;

  // const [result] = await imageAnnotator.labelDetection(url);
  // const annotations = result.labelAnnotations;

  return annotations;
}

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/detect', async (req, res) => {
  console.log(req.body);
  const { photoUrl } = req.body;
  const annotations = await annotateImage(photoUrl);
  res.json({ annotations });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
