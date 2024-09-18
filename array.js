/* //1st question//
const train_departures = [10, 15, 7, 20, 5];
const earliestDeparture = Math.min(train_departures);
console.log("The earliest train departs at:", earliestDeparture);
//2nd question//
const seats = [1, 0, 1, 1, 0, 0, 1, 0];
let availableSeatsCount = 0;
for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
        availableSeatsCount++;
    }
}
console.log(availableSeatsCount);
//3rd question//
const soldiers = [120, 300, 250, 180, 150];
const maxSoldiers = Math.max(soldiers);
const maxIndex = soldiers.indexOf(maxSoldiers);
console.log();
//4th question//
const populations = [50, 60, 70, 80, 90];
const total = populations.reduce((sum, population) => sum + population, 0);
const average = total / populations.length;
console.log(average);
//5th question//
const water_levels = [30, 50, 20, 40, 60];
const minWaterLevel = Math.min(water_levels);
const minIndex = water_levels.indexOf(minWaterLevel);
console.log(minIndex);
//6th question//
const days_until_festival = [30, 15, 45, 10, 25];
const closestFestivalDays = Math.min(days_until_festival);
const closestFestivalIndex = days_until_festival.indexOf(closestFestivalDays);
console.log(closestFestivalIndex); */

// new
//1st sum
Gogul  [8:55 AM]
let train_departures=[10,15,7,20,5];
let temp=train_departures[0];
for(let i=0;i<train_departures.length;i++){
       if(train_departures[i]<temp){
        temp=train_departures[i];
       }
}
console.log(temp);
//2nd sum
let seats = [1,0,1,1,0,0,0,0,1];
let len= seats.length;
let temp1=seats[0];
let count=0;
for(let i=0;i<len;i++)
  if(seats[i]===0){
    count++;
}
console.log(`number of seats available are ${count}`);

let soldiers = [120, 300, 250, 180, 150];
let temp2=soldiers[0];
for(let i=0; i<soldiers.length;i++){
    if(temp<soldiers[i]){
        temp=soldiers[i];
    }
}
console.log(temp);
let populations = [50, 60, 70, 80, 90];
let sum=0;
let avg=0;
let len=populations.length
for(let i=0;i<len;i++){
    sum+=populations[i];
     avg=sum/len;
}
console.log(avg);
let water_levels = [30, 50, 20, 40, 60];
let temp3= water_levels[0];
let len=water_levels.length;
for(let i=0;i<len;i++){
    if(temp>water_levels[i]){
        temp=water_levels[i];
    }
}
console.log(temp);
let days_until_festival = [30, 15, 45, 10, 25];
let temp4=days_until_festival[0];
let len=days_until_festival.length;
for(let i=0;i<len;i++){
    if (temp>days_until_festival[i]){
        temp=days_until_festival[i];
    }
}
console.log(temp);
let landing_times = [10, 15, 12, 18, 10];
let len=landing_times.length;
let temp=landing_times[0];
let count=0;
for(let i=0; i<len;i++){
    if(temp===landing_times[i]){
        count++;
        if(count>1){
            console.log("more than one");
        }
    }
}
let  temperatures = [75, 80, 72, 85, 90];
let len= temperatures.length;
let temp=temperatures[0];
for(let i=0;i<len;i++){
    if(temperatures[i]>80){
        console.log(temperatures[i]);
    }
}
let students_per_route = [45, 55, 30, 60, 40];
let len=students_per_route.length;
let temp=students_per_route[0];
let busNeeded=0;
for(let i=0;i<len;i++){
    if(students_per_route[i]>50){
        busNeeded++;
    }
}
console.log(busNeeded);