import { senatorData } from './assets/senators.js';
//console.log(senators);

const senators = senatorData.results[0].members;



console.log(senators)

const females = senators.filter(senator => senator.gender === "F");
var fCount = 0;
for (var i in females) {
    fCount++;
}
console.log(`The number of female senators is`, fCount);
console.log(females);

const males = senators.filter(senator => senator.gender ==="M");
var mCount = 0;
for (var i in males) {
    mCount++;
}
console.log(`The number of male senators is`, mCount);
console.log(`we have ${males.length} male senators`)// this would have been the easier way... Drat.
console.log(males);

// var state = senators.filter(senator => senator.state);

// console.log(state);

// for (var i in state) {
//     console.log(i);
// 

/*Who has cast the most votes? */

const votes = senators.filter(vote => vote.total_votes);
const mostVotes = votes.reduce((most, senate) => { 
    return (most.missed_votes || 0) > senate.missed_votes ? most : senate;
});
console.log(`The most votes missed by any senator is by ${mostVotes.first_name} ${mostVotes.last_name} who represents the state of ${mostVotes.state}. He missed a total of ${mostVotes.missed_votes} votes.`);
const allVotes = votes.reduce((votes, senate) => votes + senate.total_votes, 0)
console.log(`The total amount of votes cast is ${allVotes}`);

const senatorPicture = senators.map(senator => {
    senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    return senator;
})

const senatorList = document.querySelector('.senator-list');

senatorPicture.forEach(senator => {
    console.log(senator.first_name) // do this occasionally to make sure you're getting the right stuff;
    let listItem = document.createElement('ul');
    let imgItem = document.createElement('img');
    listItem.appendChild(imgItem);
    senatorList.appendChild(listItem);
});

// const voteMostRepub = republicans.reduce((acc, vote) => republicans.total_votes ||  0 )

// console.log(voteMostRepub);

//console.log(republicans);