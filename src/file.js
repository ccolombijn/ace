export const file = (()=>{
  return {
    get(path, type = 'text'){
      !async function(){
        let data = await fetch(path)
            .then((response) => response[type]())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error(error);
            });
        
        console.log(data);
      }();
    }
  }
})();