addEventListener("mousemove",getSelectionText)
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().t;
    }
    // console.log(window.getSelection());
}
function bolder(){

    var tag='b'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    // substring=window.getSelection().toString()
    var newst=newstring(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,tag)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    document.getElementById("editor1").innerHTML=newst

    // console.log(substring)
}function italicize(){
    var tag='i'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    // substring=window.getSelection().toString()
    var newst=newstring(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,tag)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    document.getElementById("editor1").innerHTML=newst
}

function strike(){
    var tag='strike'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    // substring=window.getSelection().toString()
    var newst=newstring(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,tag)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    document.getElementById("editor1").innerHTML=newst

}

function underline(){
    var tag='u'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    // substring=window.getSelection().toString()
    var newst=newstring(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,tag)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    document.getElementById("editor1").innerHTML=newst
}


function fontchange(){
    fonts=document.getElementById("fonts")
    text=document.getElementById("editor1").innerHTML
    font=fonts.options[fonts.selectedIndex].text
    var newfont=fontChange(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,font)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    document.getElementById("editor1").innerHTML=newfont
}
function newstring(anchorText,anchorIndex,focusText,focusIndex, selectedtext, tag){
    console.log(anchorText,anchorIndex,focusText,focusIndex, selectedtext, tag)
    anchorText=anchorText.slice(anchorIndex)
    console.log(anchorText)
    selectedtext=selectedtext.split(anchorText).join(`</${tag}>`+anchorText)
   focusText=focusText.slice(0,focusIndex-1)
    console.log(focusText)
    selectedtext=selectedtext.split(focusText).join(focusText+`<${tag}>`)

    console.log(selectedtext,tag)
    return(selectedtext)


}function fontChange(anchorText,anchorIndex,focusText,focusIndex, selectedtext, font){
    // console.log(anchorText,anchorIndex,focusText,focusIndex, selectedtext, tag)
    anchorText=anchorText.slice(anchorIndex)
    console.log(anchorText)
    selectedtext=selectedtext.split(anchorText).join(`</font>`+anchorText)
   focusText=focusText.slice(0,focusIndex-1)
    console.log(focusText)
    selectedtext=selectedtext.split(focusText).join(focusText+`<font face="${font}">`)

    // console.log(selectedtext,tag)
    return(selectedtext)


}