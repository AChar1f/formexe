//my attempt at form

//create an array for the friend form
/*
let friendslist = []

//create a function that adds user's input to the form
function addfriends() {
let FirstName = document.getElementById("fname").value 
let lastName = document.getElementById("surname").value

//make the data that users input always update to the last place in the array.
friendslist.push({

    FirstName, lastName

})

//display the array in the console (table format option)
console.table(friendslist)

}
*/


  //Joels solution
   // Empty array
    
    let friends = []
    let addFriends = document.querySelector('[addFriends]')
    // console.log(addFriends)
    addFriends.addEventListener('click', () => {
            friends.push({
                firstName: document.querySelector('[firstName]').value,
                lastName: document.querySelector('[lastName]').value
            })
            console.table(friends)
        })
