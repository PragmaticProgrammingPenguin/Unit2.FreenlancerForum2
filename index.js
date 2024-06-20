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

const maxFreelancers = freelancerArray.length + newFreelancers.length;

const addFreeLancerIntervalId = setInterval(addFreelancer, 600);
 
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
        let startingPrice = freelancerArray[i].StartingPrice.split("$")[1];
        sum += Number(startingPrice);
    }
    const avg = (sum / freelancerArray.length).toFixed(2);

    const avgPrice = document.querySelector("#avg-price");
    avgPrice.replaceWith(avg);
}

function addFreelancer() {
    for(i in newFreelancers){
        freelancerArray.push(newFreelancers[i]);
    }

    render();
    if (freelancerArray.length >= maxFreelancers){
        clearInterval(addFreeLancerIntervalId);
    }

    startingPriceAverage();
}