"use strict";
//Note that these function all out an animal is an interim only. 
//I want to check whether the functions get called correctly before potentially putting effort into the implementation in vain 
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.stop = exports.seek = exports.pause = exports.play = exports.open = exports.setContainer = exports.createPlayer = void 0;
//function to initiate the player, that has no media, yet
//assumption: there is at least one videoElement on the page, the media will be played in the first
function createPlayer() {
    var player = document.getElementsByTagName("video")[0];
    player.id = "dashjs-player";
    player.controls = true;
    return player;
}
exports.createPlayer = createPlayer;
function setContainer(divId) {
    console.log("Oxen " + divId);
}
exports.setContainer = setContainer;
function open(videoUrl) {
    var srce = document.createElement("source");
    srce.setAttribute('type', 'application/dash+xml');
    srce.setAttribute('src', videoUrl);
    //enter remove existing video here
    var divBracket = document.getElementById("help");
    if (divBracket != null) {
        divBracket.innerHTML = "";
        divBracket.innerHTML = "<video class='dashjs-player' preload='none' controls='true'>" +
            "<source src=" + videoUrl + " type='application/dash+xml'/></video>";
    }
}
exports.open = open;
function play() {
    console.log("Rabbit");
}
exports.play = play;
function pause() {
    console.log("Snake");
}
exports.pause = pause;
function seek(at) {
    console.log("Horse " + at);
}
exports.seek = seek;
function stop() {
    console.log("Goat");
}
exports.stop = stop;
function destroy() {
    console.log("Chimpanzee");
}
exports.destroy = destroy;
