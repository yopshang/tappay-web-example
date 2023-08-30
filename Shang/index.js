function nwpInit(){
    // const $NWP =  document.querySelector('.NWP')
    var $iframe = document.createElement("iframe");
    $iframe.src = "http://127.0.0.1:5500/fakeiframe.html";
    $iframe.width = "400";
    $iframe.height = "100";
    $iframe.frameBorder ="0";
    $iframe.scrolling = "0";
    $iframe.style.border= "none";
    $iframe.style.background = "white";
    document.querySelector('.NWP').appendChild($iframe)
}

document.querySelector(".load_iframe").addEventListener('click', function(){
    nwpInit();
})