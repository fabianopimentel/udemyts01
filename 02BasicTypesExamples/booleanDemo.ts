function booleanExample(overEighteen: boolean) {
    overEighteen ? console.log("Let's Drive!") : console.log("Sorry, you can't drive.");
    
    if (overEighteen){
        console.log("Let's Drive!");
    } else {
        console.log("Sorry, you can't drive.");
    }
}

booleanExample(true);