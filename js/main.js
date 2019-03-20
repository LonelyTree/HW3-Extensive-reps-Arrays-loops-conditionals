/* A: A fork is used when collaboration is neccessary as it permits the user
alter the origin master without actually modifying the true origin master. 
After programmer is done with their version, they can push their changes to their 
forked version of the origin master then submit a pull requst for true origin master. 
*/

for( let i= 1 ; i <= 20; i++){
    console.log(i);
};

for( let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};