var btn = document.querySelector('button');


function generate (){
    var display = document.getElementById('display');
    var result = document.getElementById('result');

    let jokesgenerator = {
        url: "https://official-joke-api.appspot.com/random_joke",

        getdata: function(){
            fetch(this.url).then((response)=>response.json()).then((data)=>this.dispalydata(data));
        },

        dispalydata:(data)=>{
            const{setup, punchline} = data;
            display.innerHTML = setup;
            result.innerHTML = punchline;

        }
    }
    return jokesgenerator.getdata();
}

// btn.addEventListener('click', jokesgenerator);