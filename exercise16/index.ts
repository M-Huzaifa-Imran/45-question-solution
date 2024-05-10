/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/

let guestList :string [] = ['Khalid' , 'Haris' , 'kashif' , 'Mohsin']

for (let guest of guestList){
     console.log(`Hello ${guest},we found a bigger table for the dinner `);
     
}

guestList.unshift("Huzaifa khan")

let middleindex : number = Math.floor(guestList.length/2)

guestList.splice(middleindex , 0 , "Ali Bhatti")

guestList.push("Armash")

console.log(guestList)
console.log("--------------------------")

for (let guest of guestList)
{
  console.log(`Dear ${guest}, you are invited to a dinner`);
}