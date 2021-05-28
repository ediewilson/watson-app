<template>
  <div>
    <h1>Upload a picture!</h1>
  
  
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: '{iam_api_key}'
});

var images_file= fs.createReadStream('./fruitbowl.jpg');
var classifier_ids = ["RuleofThirdsRecognition_40777218"];
var threshold = 0.6;

var params = {
	images_file: images_file,
	classifier_ids: classifier_ids,
	threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err) { 
		console.log(err);
	} else {
		console.log(JSON.stringify(response, null, 2))
	}
});

</script>
<style lang="scss" scoped>
h1 {
  margin-top: 12px;
}

.body {
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    list-style-type: none;
}

.gif-header {
  font-weight: bold;
}

.tempo {
  padding-left: 7%;
  padding-right: 7%;
}

.back-end {
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    list-style-type: none;

    li { 
      max-width: 200px;
    }
}

.buzzfeed {
  padding-top: 50px;
  padding-left: 7%;
  padding-right: 7%;
}

.buzzfeed-quiz {
  width: 600px;
  padding-bottom: 16px;
}

.front-end {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;

  li {
    align-self: center;

    margin: 10px;
    border-radius: 10%;
    width: 200px;
    min-height: 50px;

  }
}
</style>