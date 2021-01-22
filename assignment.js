/*------Assignment Program-01
          Name: Hotel Cost Calculator------*/

function hotelCost(livingDay){
    var livingCost = 0;

    if(livingDay<=10){
        livingCost = livingDay * 100;
    }
    else if(livingDay <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = livingDay - 10;
        var secondTenDays = remainingDays * 80;
        livingCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100; 
        var secondTenDays = 10 * 80;
        var remainingDays = livingDay - 20;
        var thirdTenDays = remainingDays * 50;
        livingCost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return livingCost;
}
//-----Output Part 
var result = hotelCost(-21);

//-----Negative Value Finding Part
    if(result < 0){
        console.log('Sorry! The value of hotel cost cannot be " Negative "');
    }
console.log(result);



 /*------Assignment Program-02
          Name: Any Number Km to meter Convert------*/

function kilometerToMeter(kmeter){
    var meter = kmeter * 1000;   
    return meter;
}
//-----Output Part 
var result = kilometerToMeter(-8);

//-----Negative Value Finding Part
    if(result < 0){
        console.log('Sorry! The value of kilometers cannot be " Negative "');
    }
console.log(result);




/*---------Assignment Program-03
           Name: Budget Claculator----------*/

function budgetCalculator(purchWatchNum, purchPhoneNum, purchLaptopNum){

    costOfWatch = purchWatchNum * 50;
    costOfPhone = purchPhoneNum * 100;
    costOfLaptop = purchLaptopNum * 500;
    totalCost = costOfWatch + costOfPhone + costOfLaptop;

    return totalCost;
}
//-----Output Part 
var result = budgetCalculator(6,1,-1);

//-----Negative Value Finding Part
    if(result < 0){
        totalCost = "Input Valid Number";
        console.log('Sorry! The value of any device purchase cost cannot be " Negative "');
    }
console.log(result);




/*---------Assignment Program-04
           Name: Find Bigger Name in Array----------*/

//------Function + Statement Part
function megaFriend([name1,name2,name3,name4]){

    if(name1.length > name2.length && name1.length > name3.length && name1.length > name4.length){
        return name1;
    }
    else if(name2.length > name1.length && name2.length > name3.length && name2.length > name4.length){
        return name2;
    }
    else if(name3.length > name1.length && name3.length > name2.length && name3.length > name4.length ){
        return name3;
    }
    else{
        return name4;
    }
}
//-----Output Part 
var result = megaFriend(['naim','Zaman','onu','Bornomala']);
console.log(result);

