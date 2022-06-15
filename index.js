var res = document.getElementById("res");

function gerar(){
    const val = document.querySelector('input').value;
    var n = parseInt(val)-1;
    var num = 0;
    for (var i=0; i<=n; i++) {
        var l = document.createElement("div");
        l.id = "l"+i;
        l.style.display = "flex";
        document.body.appendChild(l);
        for (var j=0; j<=n; j++) {
            var p = document.createElement("div");
            p.setAttribute("class", "q");
            p.setAttribute("onclick", "oi(this.id)")
            idc = "c"+num;
            p.id = idc;
            document.getElementById("l"+i).appendChild(p);
            /*p.innerHTML = p.id;*/
            num++;
        }
    }
}

function oi(clicked_id){
    const valo = document.querySelector('input').value;
    var val = parseInt(valo);
    var n = val-1;
    let k = clicked_id;
    k = k.replace('c','');
    var m = parseInt(k);
    res.innerHTML = m+1;

    var a = document.getElementById("c"+(parseInt(k)-n-1));
    var b = document.getElementById("c"+(parseInt(k)+n+1));
    var e = document.getElementById("c"+(parseInt(k)-1));
    var d = document.getElementById("c"+(parseInt(k)+1));
    k = document.getElementById("c"+parseInt(k));

    function verde(idr) {
        if (idr.style.backgroundColor == "green") {
            idr.style.backgroundColor = "#fff";
        } else if (idr.style.backgroundColor != "green") {
            idr.style.backgroundColor = "green";
        }
    }
    
    verde(k);
    if ((m%val)!=0){
    verde(e);
    }
    if (((m+1)%val)!=0){
    verde(d);
    }
    if (m>(val-1)){
    verde(a);
    }

    verde(b);
}