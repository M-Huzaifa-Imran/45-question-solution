//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// PersonName in lowercase
{
    var personName = "Andrew tate";
    var lowercaseName = personName.toLowerCase();
    console.log(lowercaseName);
    // PersonName in uppercase
    var uppercaseName = personName.toUpperCase();
    console.log(uppercaseName);
    // PersonName in titlecase
    var titlecaseName = personName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
    console.log(titlecaseName);
}
