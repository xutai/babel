

/* ES2015 */
// arrow-functions
var a = () => {}
var a = (b) => b
console.log(a,a(1))

const double = [1,2,3].map((num) => num * 2)
console.log(double) // [2,4,6]

var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],
    printFriends() {
        this._friends.forEach(f => {
            console.log(this._name + " knows " + f)
        })
    }
}
bob.printFriends()
