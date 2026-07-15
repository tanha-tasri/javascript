const promise1 = new Promise((resolve , reject) => {
    let completedPromise = true;
    if(completedPromise)
    {
        resolve("completed promise");
    }
    else
    {
        reject("not completed")
    }

});

promise1
.then((res) => {
   console.log(res);
   
})
.catch((err)=>{
    console.log(err);
    
});
