let dashMetrics = player.getDashMetrics()

function setRandomQuality(){
    window.player.setQualityFor('video', Math.floor(Math.random() * 10));
    console.log(window.player.getDVRWindowSize)
}
function setQuality(index){
    window.player.setQualityFor('video', index);
}
function getBufferLength(){
    window.player.getBufferLength
}