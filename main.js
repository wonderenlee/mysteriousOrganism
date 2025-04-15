// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // create a factory function to create a pAequor object with methods to mutate, compare DNA, and check survival
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        const dnaBases = ["A", "T", "C", "G"];
        const randomIndex = Math.floor(Math.random() * this.dna.length);
  
        let newBase;
        do {
      newBase = dnaBases[Math.floor(Math.random() * 4)];
    } while (newBase === this.dna[randomIndex]);
    this.dna[randomIndex] = newBase;
        return this.dna;
      },
      compareDNA(otherPAequor) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherPAequor.dna[i]) {
            identicalBases++;
          }
        }
        const similarityPercentage = (identicalBases / this.dna.length) * 100;
        console.log(
          `specimen #${this.specimenNum} and specimen #${
            otherPAequor.specimenNum
          } have ${similarityPercentage.toFixed(2)}% DNA in common.`
        );
      },
      willLikelySurvive() {
        let countCG = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            countCG++;
          }
        }
        const survivalRate = (countCG / this.dna.length) * 100;
        return survivalRate >= 60;
      }
    };
    };
  };
  
  // create 30 surviving instances
  const survivingSpecimens = [];
  let id = 1;
  
  for (let id = 1; survivingSpecimens.length < 30; id++) {
  
    const newOrganism = pAequorFactory(id, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      survivingSpecimens.push(newOrganism);
    }
  }
  
  // Extra Challenge
  // create a complementary DNA strand using method
  complementStrand() {
    return this.dna.map(base => {
      switch (base) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'C': return 'G';
        case 'G': return 'C';
      }
    });
  }
  
  