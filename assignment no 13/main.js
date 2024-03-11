//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Azan", "Anus",
    "saad"];
guestList.forEach(function (person) {
    console.log("Dear, ".concat(person, ",You are cordially invited to dinner. It would be an honor to have you join us.\nSincerely,\nThe Host"));
});
