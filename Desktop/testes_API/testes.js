

 function clicou() {
    var text = document.querySelector("#tex");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (response)=>{
        return response.json()})
    .then((response)=> { var novovalue = (response[3].body);
        text.value = novovalue;
    })
    

   }