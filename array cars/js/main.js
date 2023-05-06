var cars= ["mazda","bmw","toyota","subaro"];
var qtyCars= cars.length;
var text= "";
for (let i=0; i<qtyCars;i++){
    text+="car"+ (i+1) + " : " +cars[i]+ "\n" ;
} console.log(text);
