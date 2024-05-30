//task 1 ucbucagin movcud olub olmamasi ve movcuddusa ucuncu bucagin tapilmasi
// for(var i=true;i==true;){
//     var a=+prompt("please enter first corner")
//     var b=+prompt("please enter second corner")
//     var sum=a+b
//     if(sum>=180){
//         alert("please enter valid degrees")
//     }
//     else{
//         alert(`third corner is:${180-sum}`)
//     }
// }

// task 2
// var arr=[45,67,89,23,55,88,93]
// var f=false
// var a=+prompt("enter a random number")
// for(i of arr){
//     if(i==a){
//         f=true
//     }
// }
// if(f){
//     alert(`number ${a} is in our array`)
// }
// else{
//     alert(`number ${a} is not in our array`)
// }

///task 3 ededlerin cemini,ededi ortasini, sayini, 100-den boyuk 200 den kicik ededlerin sayini, cut ededlerin sayini tap
var arr=[678,45,67,89,23,545,188,293]
var sum=0
var b=0
var even=0
var odd=0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
    if(arr[i]>100 && arr[i]<200){
        b++
    }
    if(arr[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
alert(`sum of numbers from our array:${sum}\naverage of numbers from our array:${sum/arr.length}\nthe number of numbers in our array:${arr.length}\nThe number of numbers greater than 100 and less than 200 in the array:${b}\nThe number of even numbers in the array:${even}\nThe number of odd numbers in the array:${odd}`)