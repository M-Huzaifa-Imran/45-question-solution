// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use 
//each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
{
    let my_Name: string ="\t  M.Huzaifa Imran  \n"
    console.log("Name with whitespace:", my_Name)
    
    let strippedName :string = my_Name.trim()
    console.log("stripped name :",strippedName)
    }