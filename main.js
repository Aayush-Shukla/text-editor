var snaps=[]
count=1
var tm=''

    function savetimer() {
    // console.log("in")
    tm=setTimeout(save, 2000)
}


document.getElementById("editor1").addEventListener("input", savetimer, false);
function save() {
    clearTimeout(tm)
    count=1
    // console.log(snaps.length)
    if (snaps.length>=10){
        snaps.splice(0,1)


    }
    var temp=document.getElementById("editor1").innerHTML
    if(temp!=snaps[snaps.length-1]) {
        // console.log(temp,snaps[snaps.length])


        snaps.push(temp)
    }
    // console.log(snaps)
}

function undo(){
    if(snaps.length-count-1>=0 ) {
        console.log(snaps.length-count,snaps[snaps.length-count-1])
        document.getElementById("editor1").innerHTML = snaps[snaps.length-count-1]
        count++
    }
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


        console.log(text)
        var newst = newstring(window.getSelection().anchorNode.data, window.getSelection().anchorOffset, window.getSelection().focusNode.data, window.getSelection().focusOffset,text, window.getSelection().focusNode.data, tag)

        document.getElementById("editor1").innerHTML = newst
    }


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

}
function newstring(anchorText,anchorIndex,focusText,focusIndex,inner, selectedtext, tag){
    console.log(inner,selectedtext)


    var tagEnd=`</${tag}>`
    var tagStart=`<${tag}>`

    if(anchorText==focusText){

        var end = [selectedtext.slice(0, anchorIndex), tagEnd, selectedtext.slice(anchorIndex)].join('');
        console.log(end)

        var start= [end.slice(0, focusIndex), tagStart, end.slice(focusIndex)].join('');
        console.log(start)
        inner=inner.split(selectedtext).join(start)


        return (inner)
    }

else{

            var aoutput = [anchorText.slice(0, anchorIndex), tagEnd, anchorText.slice(anchorIndex)].join('');

            console.log(anchorText,aoutput)
            inner=inner.split(anchorText).join(aoutput)

            var foutput=[focusText.slice(0, focusIndex), tagStart, focusText.slice(focusIndex)].join('');

            console.log(focusText,foutput)
            inner=inner.split(focusText).join(foutput)

            console.log(inner,tag)
            return(inner)
        }


}