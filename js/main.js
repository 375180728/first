var $ = function(el){
    var els = document.querySelectorAll(el);
    return els.length > 1 ? els : document.querySelector(el);
}

var arrow = $('.arrow');
    banner = $('.banner-preview')
    btn = $('.buttons').getElementsByTagName('li');
    main = $('.banner')
    index = 1;


function animate(offset){
    var _marginLeft = parseFloat(banner.style.marginLeft) + offset;
    banner.style.marginLeft = _marginLeft + "%" ;
    if (parseFloat(banner.style.marginLeft) < -300) {
        banner.style.marginLeft = 0;
    }
}

function autobanner(){
    timer = setInterval(function(){
        if (index == 4) {
        index = 1;
    } else {
        index++;
    }
        console.log(index);    
        showbutton();    
        animate(-100);
    } ,5000)
}

function stop(){
    clearInterval(timer)
}

function showbutton(){
    for(var i = 0; i < btn.length; i++){
        if (btn[i].className == 'on') {
            btn[i].className = 'btn';
        }
        btn[index - 1].className = 'on';
    }
}

for(var i = 0; i < btn.length; i++) {
    var change = function(){
        if (this.className == 'on') {
            return
        }
        var myindex = parseInt(this.getAttribute('index'));
        var offset = (myindex - index) * (-100);
        animate(offset);
        index = myindex;
        showbutton();
    }
    btn[i].addEventListener("click" , change)
    main.onmouseover = stop;
    main.onmouseout = autobanner;
}

autobanner(); 