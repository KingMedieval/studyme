const seedrandom = require('seedrandom');

const shuffleArray = (array, seed, qid) => {
    const rng = seedrandom(seed + qid);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export default shuffleArray;