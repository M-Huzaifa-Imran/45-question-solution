

// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
{
    let guestList :string [] = ['ahmed' , 'umair' , 'kashif' , 'asad']
    
    guestList.forEach((guestList)=>
    {
        console.log(`Dear ${guestList},you all are invited to the dinner please join us`)
    })
    }
