var div1 = document.getElementById("container"),
    div2 = document.getElementById("container2"),
    links1 = div1.getElementsByTagName("a"),
    links2 = div2.getElementsByTagName("a");

console.log(div1);

for(var i = 0; i < links1.length; ++i)
    links1[i].href = "http://mail.ru";

for(var i = 0; i < links2.length; ++i)
    links2[i].innerText = "Yahoo!";