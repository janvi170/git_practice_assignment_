function checkPalindrome(N, str) {
    let bag1="";
    let bag2="";
    for(i=str.length-1;i<=0;i++){
        bag1+=str[0];
    }for(i=0;i<N;i--){
        bag2+=str[0];
    }if(bag1!==bag2){
        console.log("No");
    }else{
        console.log("Yes");
    }
}  