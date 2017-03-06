var closetimer = 0;
var ddmenuitem = 0;

// open hidden layer
function mopen(id) {
    // cancel close timer
    mcancelclosetime();

    // close old layer
    if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';

    // get new layer and show it
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose() {
    closetimer = window.setTimeout(() => {if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';});
}

// cancel close timer
function mcancelclosetime() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}