var i = 0;
function typer(tx,dest){
    let destino = document.getElementById(dest);
    let tl = tx.length;
    function xx(){
        if(i < tl){
            destino.innerHTML += tx.charAt(i);
            i++;
            setTimeout(xx,50);
        }
        else {
            i = 0;
        }
        
    }
    xx();
}

charts = 0;
function addLoader(elm,tm,tit){
    var loader = `
        <div id="linLoader">
            <h2 class="titles">${tit}</h2>
            <div class="barThummb">
                <div class="loadTrack" id="chartContainer"></div>
            </div>
        </div>
    `;
    let elem = document.getElementById(elm);
    elm.innerHTML = loader;
    function addCharts(){
        if (charts < 17){
            document.querySelector("#chartContainer").innerHTML += `<span class="chart chartLoad"></span>`;
            charts++;
            setTimeout(addCharts,tm);
        }
    }
    addCharts();
}