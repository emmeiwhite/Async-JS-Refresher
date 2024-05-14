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

/** As we are boiling the water in the background, we start chopping the carrots */

boilWater()

function boilWater() {
  console.log('boiling ...')
  setTimeout(() => {
    console.log('Boiling Done')
  }, 3000)
}

console.log('Keep chopping carrots...')
