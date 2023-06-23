// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = function (id, DNA) {
  return {
    specimenNum: id,
    dna: DNA,

    mutate() {
      const baseToChange = Math.floor(Math.random() * this.dna.length)
      let mutation

      do {
        mutation = returnRandBase()
      } while (mutation === this.dna[baseToChange])

      this.dna[baseToChange] = mutation
    },

    compareDNA(other) {
      let common = 0

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === other.dna[i]) {
          common++
        }
      }

      const percentage = (common / this.dna.length) * 100
      console.log(`Specimen #${this.specimenNum} and specimen` +
        ` #${other.specimenNum} have ${percentage}% DNA in common`)
    },

    willLikelySurvive() {
      let goodBases = 0

      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          goodBases++
        }
      })

      return (goodBases / this.dna.length) >= 0.6
    },
  }
}

let samples = []
let id = 1

while (samples.length < 30) {
  samples.push(pAequorFactory(id, mockUpStrand()))
  id++
}

samples.forEach((sample) => {
  while (!sample.willLikelySurvive()) {
    sample.mutate()
  }

  console.log(sample.specimenNum, sample.dna, sample.willLikelySurvive())
})
