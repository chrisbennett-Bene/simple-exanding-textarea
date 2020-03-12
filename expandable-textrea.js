var autoExpand = function (field) {

    var computed          = window.getComputedStyle(field);
    function isBorderBox() {return computed.getPropertyValue("box-sizing") === "border-box";}
	
    var borderAdjust      = isBorderBox() ? parseInt(computed.getPropertyValue("border-top-width"), 10) + parseInt(computed.getPropertyValue("border-bottom-width"), 10) : 0;	
    var paddingAdjust     = isBorderBox() ? 0 : - Math.round(parseFloat(computed.getPropertyValue("padding-top")) + parseFloat(computed.getPropertyValue("padding-bottom")));
    var adjustment        = borderAdjust + paddingAdjust;
    var minHeight         = parseInt(computed.getPropertyValue("min-height"),10) - borderAdjust;
    var height            = field.scrollHeight + adjustment;
    field.style.height    = height > minHeight ? height + "px": minHeight + "px";
    field.style.overflowY = "hidden";
};

document.addEventListener("input", function (event) {
    if (event.target.tagName.toLowerCase() !== "textarea") return;
    autoExpand(event.target);
}, false);