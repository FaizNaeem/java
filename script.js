var Menu = prompt("I have Some Foods : Burger Pizza Biryani Tikka and etc...")
if(Menu=="Burger" || Menu=="Pizza" || Menu=="Biryani" || Menu=="Tikka"){
 var kitnychahiya = prompt("Kitny Chahiya")
 if(Menu=="Biryani" || kitnychahiya=="1"){
 var flvr =prompt("I have Chicken, Beef, Mutton, Yakhni")
 if(flvr=="Beef"|| flvr=="Mutton" ||flvr=="Yakhni" ||flvr=="Chicken"){
alert("You have Been Purchase " +kitnychahiya +" "+ flvr+ " "+ Menu)
 }
 else{
    alert("plz select correct flvr i have not"+ " "+ flvr +" Flavr")
 }
 
    }
 else{
    alert("Sold Out")
 }
 }
 else{
    alert("wrong Foods")
 }

 



    

