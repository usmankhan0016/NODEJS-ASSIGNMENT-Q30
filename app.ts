//  Make a array of five or more usernames, including the name 'admin'.

const userNames: string[] = ["admin","Usman","Umar","Ahsan","Abdullah"];

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

for(let i=0; i<userNames.length; i++){
    if(userNames[i]=== "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}








