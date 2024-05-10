/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/ 
{
    let guestList :string [] = ['khalid' , 'umair' , 'kashif' , 'asad']
    
    let guestWhoCantMakeIt : string = "khalid"
    
    console.log(`${guestWhoCantMakeIt} can't make it to the dinner `);
    
    let Newguest : string = "Noman"
    let indexOfguestWhoCantMakeIt : number = guestList.indexOf
    (guestWhoCantMakeIt)
    
    //console.log(indexOfguestWhoCantMakeIt)
    
    if (indexOfguestWhoCantMakeIt !== -1){
    
        guestList[indexOfguestWhoCantMakeIt] = Newguest
    }
    //console.log(guestList[0])
    
    console.log("Second set of invitation messages");
    console.log("--------------------------------------------")
    
    guestList.forEach((guest:string)=>
    {
        console.log(`Dear ${guest},you are invited to a dinner`)
    })
    }