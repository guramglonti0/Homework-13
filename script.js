//  ყველა რიცხვი
var arr = [1,2,3,4,5,6]
for (var i=0;  i < arr.length; i++ ){
    document.write(arr[i]+ "<br/>")
} 
// კენტები
var numbers = [15,53,22,198,10,28,16,70,33,951] ;   
var odds=[] ; 
for(var i=0 ; i < numbers.length ; i++ ){
    if(numbers [i]%2===1){
        odds.push(numbers[i])} 
}
document.write(odds)  
// დავბეჭდოთ მაღალი ხელფასი
function shemosavali(){  
    if(shemosavali < 15000){
        document.write("დაბალი ხელფასი")
    }
    else if (shemosavali>=15000 && shemosavali<=30000 ) 
        document.write("საშუალო ხელფასი") 
    else (shemosavali>30000)     
        document.write("მაღალი ხელფასი       პ.ს ვერგავიგე კენტი რიცხვები მძმეებთან ერთად რატო დაბეჭდა ")
} 
shemosavali(500000)
