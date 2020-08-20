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

    var text=document.getElementById("editor1").innerHTML
    console.log(window.getSelection().focusOffset,window.getSelection().anchorOffset)
    if(window.getSelection().focusOffset==window.getSelection().anchorOffset){
        editor=document.getElementById("editor1")
        if(editor.style.fontWeight=="bold"){
            editor.style.fontWeight="unset"
        }
        else
      {  editor.style.fontWeight="bold"}

    }
    else {


        // text.bold()
        // document.getElementById("editor1").innerHTML = text
        console.log(text)
        var newst = newstring(window.getSelection().anchorNode.data, window.getSelection().anchorOffset, window.getSelection().focusNode.data, window.getSelection().focusOffset,text, window.getSelection().focusNode.data, tag)
        // newText=newst.split(text).join()
        document.getElementById("editor1").innerHTML = newst
    }

    // console.log(substring)
}function italicize(){
    var tag='i'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    if(window.getSelection().focusOffset==window.getSelection().anchorOffset){
        editor=document.getElementById("editor1")

        if(editor.style.fontStyle=="italic"){
            editor.style.fontStyle="unset"
        }
        else
        {editor.style.fontStyle="italic"}

    }
    else {


        var newst = newstring(window.getSelection().anchorNode.data, window.getSelection().anchorOffset, window.getSelection().focusNode.data, window.getSelection().focusOffset,text, window.getSelection().focusNode.data, tag)


        document.getElementById("editor1").innerHTML = newst
    }
}

function strike(){
    var tag='strike'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    if(window.getSelection().focusOffset==window.getSelection().anchorOffset){

        editor=document.getElementById("editor1")
        if( editor.style.textDecoration=="line-through")
        { editor.style.textDecoration="unset"}
       else
           { editor.style.textDecoration="line-through"}


    }
    else {
        var newst = newstring(window.getSelection().anchorNode.data, window.getSelection().anchorOffset, window.getSelection().focusNode.data, window.getSelection().focusOffset,text, window.getSelection().focusNode.data, tag)


        document.getElementById("editor1").innerHTML = newst
    }

}

function underline(){
    var tag='u'
    console.log(window.getSelection().focusNode.data,window.getSelection().focusOffset,window.getSelection().anchorNode.data,window.getSelection().anchorOffset);

    text=document.getElementById("editor1").innerHTML
    console.log(text)
    if(window.getSelection().focusOffset==window.getSelection().anchorOffset){
        editor=document.getElementById("editor1")

        if(editor.style.textDecoration=="underline"){
            editor.style.textDecoration="unset"
        }
        else {
            editor.style.textDecoration = "underline"
        }
    }
    else {
        var newst = newstring(window.getSelection().anchorNode.data, window.getSelection().anchorOffset, window.getSelection().focusNode.data, window.getSelection().focusOffset,text, window.getSelection().focusNode.data, tag)


        document.getElementById("editor1").innerHTML = newst
    }
}


function fontchange(){
    editor=document.getElementById("editor1")
    fonts=document.getElementById("fonts")
    // text=document.getElementById("editor1").innerHTML
    font=fonts.options[fonts.selectedIndex].text
    console.log(font)
    editor.style.fontFamily=font
    console.log(editor.style.fontFamily)
    // var newfont=fontChange(window.getSelection().anchorNode.data,window.getSelection().anchorOffset,window.getSelection().focusNode.data,window.getSelection().focusOffset,text,font)
    // newstring=text.split(substring).join("<b>"+substring+"</b>")
    // document.getElementById("editor1").innerHTML=newfont
}
function newstring(anchorText,anchorIndex,focusText,focusIndex,inner, selectedtext, tag){
    console.log(inner,selectedtext)
    // newanchorText=anchorText.bold()
    // selectedtext=selectedtext.split(anchorText).join(newanchorText


    var tagEnd=`</${tag}>`
    var tagStart=`<${tag}>`

    if(anchorText==focusText){
        // var newText=tagStart+selectedtext+tagEnd
        var end = [selectedtext.slice(0, anchorIndex), tagEnd, selectedtext.slice(anchorIndex)].join('');
        console.log(end)
        // inner=inner.split(selectedtext).join(newText)
        // console.log(inner)
        var start= [end.slice(0, focusIndex), tagStart, end.slice(focusIndex)].join('');
        console.log(start)
        inner=inner.split(selectedtext).join(start)
        // console.log(inner,"-----------------",start)

        return (inner)
    }

else{

            var aoutput = [anchorText.slice(0, anchorIndex), tagEnd, anchorText.slice(anchorIndex)].join('');

            console.log(anchorText,aoutput)
            inner=inner.split(anchorText).join(aoutput)

            var foutput=[focusText.slice(0, focusIndex), tagStart, focusText.slice(focusIndex)].join('');
           // focusText=focusText.slice(0,focusIndex-1)
            console.log(focusText,foutput)
            inner=inner.split(focusText).join(foutput)

            console.log(inner,tag)
            return(inner)
        }


}