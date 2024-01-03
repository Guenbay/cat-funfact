async function load() {
    try {
        let response = await fetch('https://catfact.ninja/fact');
        let result = await response.json();
        console.log(result.fact);
        
        let fact = result.fact;
        document.getElementById("fact").innerHTML = fact;
        
    } catch (e){
        console.log('Ein Fehler ist aufgetreten' + e);
    }
    
}   
    
load();

function refreshPage () {
    window.location.reload();
}




