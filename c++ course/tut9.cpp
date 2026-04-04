#include<iostream>
using namespace std; 
int main(){
    // cout<<"happy sivrattri ";
    int age; 
    cout<<"TELL ME YOUR AGE"<<endl;
    cin>>age; /* cin ka use hum output lene ke liye krte hai */

//     1. selection control structure : if else-if esle ladder
//     if((age<18)  && (age<0)){
//         cout<<"you can not come to my party "<<endl;

//     }
// else if (age==18){
//     cout<<"you are a kid and you will get a kid pass to the party"<<endl; 

// }
// else if (age<1){
//     cout<<"you are not born"<<endl;
// }
// else{
//     cout<<"you can come to the party "<<endl;
// }
     


// 2. selection control structure : switch case statemments 
switch (age)
{
case 18:
cout<<"you are 18"<<endl;
break;
case21:
cout<<"you are 21"<<endl;
break;
case23:
cout<<"you are 23"<<endl;
break;
default:
cout<<"ERROR"<<endl;
    break;
}
cout<<"compelete session"<<endl;
return 0;
}