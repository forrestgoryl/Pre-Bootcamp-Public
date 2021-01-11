// measure's a kid's height
// decides whether the kid is tall enough to ride the rollercoaster
// outputs a message that tells the kid if they can or not in a child-friendly way


var childHeight = 48
function displayIfChildCanRide(childHeight) {
    if (childHeight >= 52) {
        console.log("Get on that ride, kiddo!")
    }
    else {console.log("Sorry kiddo. Maybe next year.")
    }
}