const freelancerArray = [
    {Name: "Alice", Occupation:"Writer", StartingPrice:"$30"},
    {Name: "Bob", Occupation:"Teacher", StartingPrice:"$50"},
    {Name: "Carol", Occupation:"Programmer", StartingPrice:"$70"},
];

const newFreelancers = [
    {Name: "Jimmi", Occupation:"Writer", StartingPrice:"$1000000"},
    {Name: "Freddy", Occupation:"Teacher", StartingPrice:"$999999"},
    {Name: "Queen Elizabeth", Occupation:"Programmer", StartingPrice:"$7000000000"},
];

const randomArray = [];

random();
console.log(randomArray);
const maxFreelancers = freelancerArray.length + newFreelancers.length;

const addFreeLancerIntervalId = setInterval(addFreelancer, 1000, randomArray);

render();

function render() {
    const freelancerList = document.querySelector("#freelancers");
    const listings = freelancerArray.map((person) => {
      const newListing = document.createElement("p");
      newListing.innerText = `Name:${person.Name} Occupation:${person.Occupation} Price:${person.StartingPrice}`;
      return newListing;
    });
    freelancerList.replaceChildren(...listings);
}

function startingPriceAverage() {
    let sum = 0;
    for(i in freelancerArray){
        var startingPrice = freelancerArray[i].StartingPrice.split("$")[1];
        sum += Number(startingPrice);
    }
    const avg = (sum / freelancerArray.length).toFixed(2);

    const avgPrice = document.querySelector("#avg-price");
    avgPrice.replaceWith(avg);
}

function addFreelancer(randomArray) {
    randomArray.forEach((i) => {
        freelancerArray.push(newFreelancers[randomArray[i]])
        console.log(randomArray[i]);
    });


    render();
    if (freelancerArray.length >= maxFreelancers){
        clearInterval(addFreeLancerIntervalId);
    }

    startingPriceAverage();
}

function random(){
    let i = 0;
    while(i < newFreelancers.length){
        number = Math.floor(Math.random() * newFreelancers.length);
        if(randomArray[0] === undefined){
            randomArray.push(number);
            i++;
        }else if(randomArray.find((num) => num == number) !== number){
            randomArray.push(number);
            i++;
        }
    }
}