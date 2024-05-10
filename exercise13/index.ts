
// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
{
    let favoriteVehicle : Array<[transport:string , brand :string]> = []
    
    favoriteVehicle.push(["motorcycle", "HONDA"])
    favoriteVehicle.push(["car", "BUGATTI DIVO"])
    favoriteVehicle.push(["bicycle", "TREK"])
       
     console.log(favoriteVehicle);
     
    favoriteVehicle.forEach(([transport , brand]) =>
    {console.log(`i would like to own a ${brand} ${transport}`);}
    )
    }