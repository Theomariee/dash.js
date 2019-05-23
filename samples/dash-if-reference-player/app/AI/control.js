let dashMetrics = player.getDashMetrics()

function setRandomQuality(){
    window.player.setQualityFor('video', Math.floor(Math.random() * 10));
}
function setQuality(index){
    window.player.setQualityFor('video', index);
}
function getBufferLength(){
    dashMetrics.getCurrentBufferLevel('video', true);
}
function getQuality(){
    window.player.getQualityFor('video');
}