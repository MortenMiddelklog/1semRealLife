// JavaScript Document
var texts = ["Stem, som om din stemme afhænger af det.", "En stemme er stærkere end en kugle.", "Din stemme er din ret, lad den blive hørt.", "Du kan ikke rette op på det dumme, men du kan stemme det ud.", "Dårlige politikere vælges af gode borgere der ikke stemmer.", "Ikke at vælge er også et valg."];
var count = 0;
function changeText() {
    $("#quote").text(texts[count]);
    count < 5 ? count++ : count = 0;
}
setInterval(changeText, 6000);

$(document).ready(function(){
    $(".ba").click(function(){
        $(".a").toggle();
    });
});

$(document).ready(function(){
    $(".bb").click(function(){
        $(".b").toggle();
    });
});

$(document).ready(function(){
    $(".bc").click(function(){
        $(".c").toggle();
    });
});

$(document).ready(function(){
    $(".bd").click(function(){
        $(".d").toggle();
    });
});

