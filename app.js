// Javascript is single threaded, synchronous language.

// let's boilWater

/* A) synchronous water boiling ---
console.log('Getting ready to boil the water')

function boilWater() {
  for (let i = 0; i < 10000; i++) {
    console.log('boiling...')
  }
}

boilWater()

console.log('Boiling for water is done')
*/

// B) Asynchronous:  water boiling and chopping carrots to make soup .

/** As we are boiling the water in the background, we start chopping the carrots 

boilWater()

function boilWater() {
  console.log('boiling ...')
  setTimeout(() => {
    console.log('Boiling Done')
  }, 3000)
}

console.log('Keep chopping carrots...')
*/

/* --- Let me think of a callback hell scenario. --- */

/**
 * Let's make pizza asynchronously | Roughly implementing
 * 1. Heat the dough
 * 2. Meanwhile chop vegetables
 * 3. Put chopped vegetables on top
 * 4. Pizza is ready
 */

function heatDough() {
  console.log('heating dough for 5 minutes')
  console.log('meanwhile chopping the vegetables')
  setTimeout(() => {
    console.log('heating is done')

    // Once the heating is done, let me add the chopped vegetables to be cooked for 3 more minutes
    setTimeout(() => {
      console.log('Adding the chopped veggies and heating again for 3 minutes')

      // Now waiting for last minute to serve the pizza
      setTimeout(() => {
        console.log('Adding toppings and pizza is ready to be served')
      })
    }, 3000)
  }, 5000)
}

heatDough()
