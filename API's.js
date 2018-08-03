

/* // FETCHING DATA USING XHR OBJECT AND ES5 OBJECT ORIENTED SYNTAX:

function xhrObject(){
  this.xhr = new XMLHttpRequest();
}

xhrObject.prototype.getJobData = function(url){

  
  this.xhr.open('GET', url, true); // **** change file to indeed api
  
  let self = this;
  this.xhr.onload = function(){ // don't forget to use callbacks.
    if(self.xhr.status === 200){
       const jobs = JSON.parse(self.xhr.responseText);
  
       let output = '';
  
       jobs.forEach(function(job){
          output += `
          <h2>${job.title}</h2>
          <p>description: ${job.description}</p>
          `;
        }); 
        document.querySelector('.container').innerHTML = output;
    }
  }
  this.xhr.send();     
}
 */
 
 
 // FETCHING DATA USING THE FETCH API,PROMISES AND ES6 CLASSES:

/* 
 class DataFetcher {
   getJobData(url) {
     return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data =>  resolve(data))
      .catch(err => reject(err));
   
     });
   }
 }  */
 
 // FETCHING DATA USING THE FETCH API, ASYNC AND AWAIT AND ES6 CLASSES:
  
 class DataFetcher {
  
  async getJobData(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
} 


