// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num, b15Dna) => {
  return {
    _specimenNum: num,
    _dna: b15Dna,
    mutate: function () {
      let baseToChange = Math.floor(Math.random() * this._dna.length);
      let randomBase = "";
      let control = false;
      do {
        randomBase = returnRandBase();
        if (randomBase !== this._dna[baseToChange]) {
          this._dna[baseToChange] = randomBase;
          control = true;
        }
      } while (control === false);
    },
    compareDNA: function (item) {
      let count = 0;
      for (i = 0; i < this._dna.length; i++) {
        if (item._dna[i] === this._dna[i]) {
          count++;
        }
      }
      let percent = ((count / this._dna.length) * 100).toFixed(2);
      console.log(
        `specimen #${item._specimenNum} and specimen #${this._specimenNum} have ${percent} DNA in common`
      );
    },
    willLikelySurvive: function () {
      let count = 0;
      for (i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          count++;
        }
      }
      let percent = ((count / this._dna.length) * 100).toFixed(2);
      console.log(count);
      console.log(percent);
      if (percent >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

let count = 0;
let instances = [];
do{
  let pAequor = pAequorFactory(count,mockUpStrand());
  if(pAequor.willLikelySurvive()){
    instances.push(pAequor);
    count++
  }
}while (count<30);

console.log(instances);