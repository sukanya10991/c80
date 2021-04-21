function get(){
    var joins=[];
    for(var s=0;s<=8;s++){
        joins.push(document.getElementById("1a")+i.value);
        joins.push(document.getElementById("2a")+i.value);
        joins.push(document.getElementById("3a")+i.value);
        joins.push(document.getElementById("4a")+i.value);
        joins.push(document.getElementById("1b")+i.value);
        joins.push(document.getElementById("2b")+i.value);
        joins.push(document.getElementById("3b")+i.value);
        joins.push(document.getElementById("4b")+i.value);
        joins.join(". ");
        console.log("joins");
        document.getElementById("ab").innerHTML=joins;        
        document.getElementById("ab").innerHTML = inputs.join(". ");
    }
}