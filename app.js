let formInput = document.getElementById('job-search-form');
dataContainer = document.querySelector('.container');
document.getElementById('submit-button').addEventListener('click', displayData);

alert('still need to prove the following concepts: 1. error handling 2. regular expressions 3. patterns 4. local storage.  bonus: webpack/babel, new features ES2015+');
// XHR OBJECT:
//function displayData(){const xhr = new xhrObject; xhr.getJobData('data.json');}
 
// FETCH WITH PROMISES:
 /* function displayData(){
     const xhr = new DataFetcher; 
     xhr.getJobData('data.json')
      .then(data => {
          jobs = Array.from(data);
        let output = '';
        jobs.forEach(job => {
            output += `
                  <h2>${job.title}</h2>
                  <p>description: ${job.description}</p>
                  `;
               
        });
        document.querySelector('.container').innerHTML = output;})
      .catch(err => console.log(err));
} 
 */

// FETCH WITH ASYNC AND AWAIT
 function displayData(e) {
   
    if(formInput.value === ''){
            const alertBox = document.createElement('div');
            alertBox.className = 'alert-box';
            alertBox.style.width = '80%';
            alertBox.style.padding = '2%';
            alertBox.style.backgroundColor = 'rgba(255,0,0,0.5)';
            alertBox.style.border = 'red solid 1px';
            alertBox.style.color = 'red';
            alertBox.appendChild(document.createTextNode('Please fill the required field.'));
            document.querySelector('form').insertBefore(alertBox, formInput);
            setTimeout(function(){
                alertBox.remove();
            },3000);
     }else{
        console.log(formInput.value);
        const xhr = new DataFetcher; 
        xhr.getJobData('data.json')
         .then(data => {
             jobs = Array.from(data);
           let output = '';
           jobs.forEach(job => {
               output += `
                     <h2>${job.title}</h2>
                     <p>description: ${job.description}</p>
                     `;
                  
           });
           document.querySelector('.container').innerHTML = output;})
         .catch(err => console.log(err));
         
     }
     e.preventDefault();
} 
 