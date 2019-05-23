function setRandomQuality(){
    window.player.setQualityFor('video', Math.floor(Math.random() * 10));
}
function setQuality(index){
    window.player.setQualityFor('video', index);
}
function getBufferLength(){
    return window.player.getDashMetrics().getCurrentBufferLevel('video', true);
}
function getQuality(){
    return window.player.getQualityFor('video');
}
function upgradeQuality(){
    console.log('[QLEARNING] Upgrading quality')
    if(getQuality() !== 9)
        setQuality(getQuality()+1)
}
function downgradeQuality(){
    console.log('[QLEARNING] Downgrading quality')
    if(getQuality() !== 0)
        setQuality(getQuality()-1)
}
function emptyBuffer(){
    // vider buffer
    // quality = 0
}