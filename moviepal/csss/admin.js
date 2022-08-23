function admin() {
    localStorage.setItem('homebc', document.getElementById('homebc').value);
    localStorage.setItem('crimebc', document.getElementById('crimebc').value);
    localStorage.setItem('dramabc', document.getElementById('dramabc').value);
    localStorage.setItem('comdeybc', document.getElementById('comdeybc').value);
    localStorage.setItem('ourteambc', document.getElementById('ourteambc').value);
    localStorage.setItem('loginbc', document.getElementById('loginbc').value);
    localStorage.setItem('regsiterbc', document.getElementById('regsiterbc').value);
    localStorage.setItem('adminbc', document.getElementById('adminbc').value);
    
    }
(function(){
    document.getElementById('homebc').value = localStorage.getItem('homebc');
    document.getElementById('crimebc').value = localStorage.getItem('crimebc');
    document.getElementById('dramabc').value = localStorage.getItem('dramabc');
    document.getElementById('comdeybc').value = localStorage.getItem('comdeybc');
    document.getElementById('ourteambc').value = localStorage.getItem('ourteambc');
    document.getElementById('loginbc').value = localStorage.getItem('loginbc');
    document.getElementById('adminbc').value = localStorage.getItem('adminbc');
    document.getElementById('regsiterbc').value = localStorage.getItem('regsiterbc');
    if (localStorage.getItem('adminbc')) document.getElementById("loon9").style.backgroundColor = localStorage.getItem('adminbc');
	
    
})()
function clearLocalStorage(){
    localStorage.clear();
}
