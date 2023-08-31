(function NWP(){
    function setForm(){
        // const $NWP =  document.querySelector('.NWP')
        console.log('這段應該要刪除')
        var $iframe = document.createElement("iframe");
        $iframe.src = "http://127.0.0.1:5500/fakeiframe.html";
        // $iframe.src = "http://127.0.0.1:5173/";
        $iframe.width = "400";
        $iframe.height = "600";
        $iframe.frameBorder ="0";
        $iframe.scrolling = "0";
        $iframe.style.border= "none";
        $iframe.style.background = "white";
        document.querySelector('.NWP').appendChild($iframe)
    }
    
    // document.querySelector(".load_iframe").addEventListener('click', function(){
        setForm();
    // })
})()
