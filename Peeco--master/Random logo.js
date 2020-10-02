var random = Math.round(window.performance.now()%100); 
console.log(random);
if (random <= 20 ){
    document.getElementById("LOGO").src = './assets/images/garden.png';
    console.log("la 1");
}
else if ( random <=40 ){
    document.getElementById("LOGO").src = './assets/images/logo_mountain.png';
    console.log("la 2");
}
else if(random <=60){
    document.getElementById("LOGO").src = './assets/images/Logo_forest.png';
    console.log("la 3");
}
else if(random <= 80){
    document.getElementById("LOGO").src = './assets/images/Logo_Jungle_Tree.png';
    console.log("la 4");
}
else {
    document.getElementById("LOGO").src = './assets/images/Logo_tree.png';
    console.log("le dernier");
}
