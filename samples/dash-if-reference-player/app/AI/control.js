let dashMetrics = player.getDashMetrics()

function setRandomQuality(){
    window.player.setQualityFor('video', Math.floor(Math.random() * 10));
}
function setQuality(index){
    window.player.setQualityFor('video', index);
}
function getBufferLength(){
    return dashMetrics.getCurrentBufferLevel('video', true);
}
function getQuality(){
    return window.player.getQualityFor('video');
}
function upgradeQuality(){
    if(getQuality() === 9)
        setQuality(getQuality()-1)
}
function downgradeQuality(){
    if(getQuality() === 0)
        setQuality(getQuality()-1)
}
function emptyBuffer(){
    // vider buffer
    // quality = 0
}