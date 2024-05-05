function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(age<18){
        console.log("Minor");
    }
    else if(age>30){
        console.log("Adult");
    }
    else{
        console.log("Young Adult");
    }
}
checkAge(18);