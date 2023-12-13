

const resultDiv = document.getElementById("resultsDiv");


export default async function makeApiCall(name) {

    const url = `https://api.agify.io?name=${name}`;
    try {
        const res = await fetch(url);
        const response = await res.json();
        resultDiv.innerHTML = response.age;
    } catch(error) {
        console.log(error) 
    }

};



