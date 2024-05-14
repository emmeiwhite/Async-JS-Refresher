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

// B) Asynchronous water boiling and chopping carrots to make soup

console.log('Start Chopping carrots')
boilWater(10000)

function boilWater(time) {
  console.log('boiling ...')
  setTimeout(time => {
    console.log('Boiling Done')
  }, time)
}

console.log('Keep chopping carrots...')
