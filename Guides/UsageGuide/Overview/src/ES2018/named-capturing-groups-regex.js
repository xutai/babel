


// RegExp.prototype.exec()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

// Groups and Ranges
// (?<Name>x)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

// \d
// Matches a digit character. Equivalent to [0-9].

// {n}
// Matches exactly n occurrences of the preceding expression. N must be a positive integer.

var reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

console.log(reg)

console.log(reg.exec("1992-04-21"))
console.log(reg.exec("1992-04-21").groups.year)

