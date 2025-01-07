document.addEventListener("DOMContentLoaded",()=>{
    let fecha = new Date();
    let year = fecha.getFullYear();
    let titl = document.querySelector("#titles");
    let xtx = document.querySelector("#xtext");
    document.querySelector(".myFooter").innerText=`© Cryptocore ${year}`;
    let fls = document.querySelector("#ruta");
    var iniCharts = 0;
    function chartsAdd(){
        if (iniCharts < 10){
            document.querySelector(".upShape").innerHTML += `<span class="chart"></span>`;
            iniCharts++;
            setTimeout(chartsAdd,1000);
        }
    }
    chartsAdd();
    fls.addEventListener("change",(e)=>{
        let xs = e.target.files[0]
        document.querySelector("#initButton").style.display='flex';
        document.querySelector(".labelFile").style.display='none';
        document.querySelector("#recarc").innerText = xs.name;
        document.querySelector("#recarc").classList.add("passed");
    })
    document.querySelector("#usFiles").addEventListener("submit",(e)=>{
        e.preventDefault();
        let xs = document.querySelector("#usFiles");
        addLoader(xs,550,'Procesando..');
        titl.innerText="";
        xtx.innerText="";
        var ttx = "Procesando archivo...";
        var secondText = "Por favor espere.";
        typer(ttx,'titles');
        setTimeout(()=>{
            typer(secondText,'xtext');
        },2000);
    });
    var ttx = "Sistema de gestión de archivos";
    var secondText = "Por favor seleccione un archivo para comenzar...";
    typer(ttx,'titles');
    setTimeout(()=>{
        typer(secondText,'xtext');
    },2000);
});