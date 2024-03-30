fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(advicedata => {
        const advices = advicedata.slip.advice;
        const ad = document.getElementById('advice');
        ad.innerHTML = advices;
    })