/* A: A fork is used when collaboration is neccessary as it permits the user
alter the origin master without actually modifying the true origin master. 
After programmer is done with their version, they can push their changes to their 
forked version of the origin master then submit a pull requst for true origin master. 
*/
/*////////////////////////////////////////////////////////////////////////////////////
for( let i= 1 ; i <= 20; i++){
    console.log(i);
};

for( let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

let e = 0;
while(e < 20){
    e += 1
    if(e % 2 === 0){
        let g = Math.floor(Math.random() * 91) + 1;
        if(g >= 1 && g <= 30){
            console.log("...human...why you taking pictures of me?...");
        }
        else if(g >= 31 && g <= 60){
            console.log("...the catnip made me do it...");

        }
        else if (g >= 61 && g <= 90)
            console.log("...why does the red dot always get away...");
    }   else {
       console.log(e, "Love me, pet me! HSSSSSS!");
}
    
    
}; //Not sure why this WHile Loop doesn't want to work.

for(let e = 1; e <= 20; e++){
    if(e % 2 === 0){
        let g = Math.floor(Math.random() * 91) + 1;
        if(g >= 1 && g <= 30){
            console.log("...human...why you taking pictures of me?...");
        }
        else if(g >= 31 && g <= 60){
            console.log("...the catnip made me do it...");

        }
        else if (g >= 61 && g <= 90)
            console.log("...why does the red dot always get away...");
    }   else {
    console.log(e, "Love me, pet me! HSSSSSS!");
}}


for(let i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    };
};

/////////////////////////////////////////////////////*/

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
jimClark[1] = jimClark[1] + 1;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
//jimHaff.pop() && jimHaff.push("Chicago","Los Angeles","New York");
jimHaff.splice(2,1,"Chicago","Los Angeles","New York");
jimHaff.splice(2,1);

console.log(jimHaff);
