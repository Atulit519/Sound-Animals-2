function start_identifying(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/caxJZvNEz/model.json", ModelReady);
}

function ModelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log("got result")
}