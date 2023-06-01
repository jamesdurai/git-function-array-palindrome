let arr = [121,131,23,56,78,98,87,765,789];

let palindrome = [];
let npalindrome = [];

for(i=0;i<arr.length;i++){
    let a=arr[i], check=arr[i],c=0;
    while(a>0){
        let b = a%10;
        a=parseInt(a/10);
        c=c*10+b;
    }
    if(c==check){
        palindrome.push(check);
        document.write(palindrome);
        document.write("<br>")
        document.write("<br>")
    }
    else{
        npalindrome.push(check);
    }
}