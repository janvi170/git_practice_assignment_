function identifyPrime(num) {
      let count=0;
    for(i=1;i<=num;i++){
    
    if(num%1==0){
        count++;
    }
    }
    if(count==2){
        console.log("Yes");
    }
    else{
    console.log("No");
    
    }
    }