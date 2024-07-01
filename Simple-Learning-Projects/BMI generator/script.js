let form = document.querySelector('form')
  
form.addEventListener('submit' , function(e){
       e.preventDefault()
       const height = parseInt(document.querySelector('#height').value); 
       const weight = parseInt(document.querySelector('#weight').value); 
       const results = document.querySelector('#results');
       const print = document.querySelector('#print'); 
       if(height === ' ' || height < 0 || isNaN(height)){

        results.innerHTML = `please give a valid height ${height}`; 
    }

   else if(weight === ' ' || weight < 0 || isNaN(weight)){

        results.innerHTML = `please give a valid height ${weight}`; 
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
       // show the results
       results.innerHTML = `<span> your BMI is = ${BMI} </span>`
       if(BMI < 18.6){
        print.innerHTML = `${BMI} BMI  is under weight`
       }
       else if(BMI > 30.4){
        print.innerHTML = `${BMI} BMI is over weight`
       }
       else{
         print.innerHTML= `${BMI} BMI is normal`
       }
    }
})