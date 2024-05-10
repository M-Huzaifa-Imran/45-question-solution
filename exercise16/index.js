/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
var guestList = ['Khalid', 'Haris', 'kashif', 'Mohsin'];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello ".concat(guest, ",we found a bigger table for the dinner "));
}
guestList.unshift("Huzaifa khan");
var middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, "Ali Bhatti");
guestList.push("Armash");
console.log(guestList);
console.log("--------------------------");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to a dinner"));
}
