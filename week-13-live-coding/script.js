class Card {
    constructor(suit, rank, faceValue) {
        this.suit = suit;
        this.rank = rank;
        this.rank = faceValue;
    }    
}

let card1 = new Card("hearts", 2, 2);

console.log(card1.faceValue);