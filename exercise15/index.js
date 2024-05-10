/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
{
    var guestList = ['khalid', 'umair', 'kashif', 'asad'];
    var guestWhoCantMakeIt = "khalid";
    console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner "));
    var Newguest = "Noman";
    var indexOfguestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
    //console.log(indexOfguestWhoCantMakeIt)
    if (indexOfguestWhoCantMakeIt !== -1) {
        guestList[indexOfguestWhoCantMakeIt] = Newguest;
    }
    //console.log(guestList[0])
    console.log("Second set of invitation messages");
    console.log("--------------------------------------------");
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",you are invited to a dinner"));
    });
}
