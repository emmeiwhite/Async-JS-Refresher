// Javascript is single threaded, synchronous language.

// let's boilWater

console.log('Getting ready to boil the water')

function boilWater() {
  for (let i = 0; i < 10000; i++) {
    console.log('boiling...')
  }
}

boilWater()

console.log('Boiling for water is done')
