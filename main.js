function get(){
    var joins=[];    
        joins.push(document.getElementById("1a").value);
        joins.push(document.getElementById("2a").value);
        joins.push(document.getElementById("3a").value);
        joins.push(document.getElementById("4a").value);
        joins.push(document.getElementById("1b").value);
        joins.push(document.getElementById("2b").value);
        joins.push(document.getElementById("3b").value);
        joins.push(document.getElementById("4b").value);
        joins.join(". ");
        console.log("joins");
        document.getElementById("ab").innerHTML=joins;        
        document.getElementById("ab").innerHTML = inputs.join(". ");
    
}