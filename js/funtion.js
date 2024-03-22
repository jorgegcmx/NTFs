function actualiza() {    
    let html = '';
    let items_table = document.getElementById("paleta");
    let tr;

    for (j = 0; j < 3; j++) {
        tr += "<tr>";
        for (k = 0; k < 12; k++) {
            var nuevoc = colorHEX();
            tr += "<td bgcolor=\"" + nuevoc + "\" align=center>";
            tr += nuevoc;
            tr += "</td>";
        }
        tr += "</tr>";

    }
    html += tr;

    items_table.innerHTML = html;

}
//actualiza(); 


function generarLetra() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}