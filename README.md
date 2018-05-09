# PurrrrfectPets
Get matched with your perfect pet!

This app works by first getting 10 random pets from the Petfinder API.

It then uses some of the values in the JSON response as the basis for rating the pets. For example, a pet with that value of "small" will get a 1, and a "large" animal is 5. It does this to get a total of 10 values and puts those in an array.

A user will then answer a series of 10 questions where their replies are also scored 1 to 5.

The server will then use the Pet Matching Matrix to find the pet whose values most closely correspond to the user's.

It does this by subtracting the corresponding values in the user's array and all of the pets' arrays. Those values are them summed, and pushed into a new array. The lowest sum will be the one that had the lowest deviation from the user's score, so it then find the index of the lowest value and picks that index out of the original pets array. That pet match is then displayed to the user.