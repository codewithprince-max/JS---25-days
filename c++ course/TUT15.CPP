#include <iostream>
using namespace std; 



    // Funnction prototype
    // type funtion name (arguments);
     int sum(int a , int b);// --> Acceptable 
    //  int sum(int a ,  b); -->  Not Acceptable 
    // int sum ( int , int )//; --> acceptable 
    // void g(); //--> Acceptable
   void g(void); //--> Acceptable

   
    int main (){

int num1 , num2 ; 

cout<<" Enter first number"<<endl; 
 
cin>>num1;
cout<<" Enter second  number"<<endl; 
cin>>num1;
// num1 and num2 are actual parameter

cout<<"the sum is "<<sum (num1, num2 );
g();

 return 0; 

}


int sum(int a , int b){
    // formal parameters a and b will be taking value from the actual parametes num1 and num2 . 
    int c = a+b ; 
    return c; 

}
void  g() {

    cout<<"\nHello good night";
}