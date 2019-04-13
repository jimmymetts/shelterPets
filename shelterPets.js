// console.log("test")

let dogNumber = 0

const takeNumber = function (dogName) {
    dogNumber += 1
    console.log(dogNumber + " " + dogName)

    
}

const Rex = takeNumber("Rex") // This should print "1. Galactic Scum" in the console

const jake = takeNumber("Jake")
 // This should print "2. Underdogs" in the console

 const Trudy = takeNumber("Trudy")

 const Rosie = takeNumber("Rosie")