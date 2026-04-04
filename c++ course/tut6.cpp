// There are the two types of header files - 
// 1. system header fles - It comes with the compiler 
// 2. user defined header file - It is written by the programmer 
// #include  "this.h" //--> This will be produce rror if this.h is no present in the current directry 
#include<iostream>

using namespace std;
int main(){
    int a=4 , b = 6 ; 
    cout<< "oprators in c++ - "<<endl; 
    cout<< "following are the types of oprators in c++"<<endl;
    // airthmatic operators 
    cout<<"the value of a+b is "<<a+b<<endl;
    cout<<"the value of a-b is "<<a-b<<endl;
    cout<<"the value of a*b is "<<a*b<<endl;
    cout<<"the value of a/b is "<<a/b<<endl;
    cout<<"the value of a%b is "<<a%b<<endl;
    cout<<"the value of a++ is "<<a++<<endl;
    cout<<"the value of a-- is "<<a--<<endl;
    cout<<"the value of ++a is "<<++a<<endl;
    cout<<"the value of --a is "<<--a<<endl;
    cout<<endl;
    


// comparison operators 

    cout<<"Following are the comparison operators in c++"<<endl;
    cout<< "the value of a==b is "<<(a==b)<<endl;
    cout<< "the value of a!=b is "<<(a!=b)<<endl;
    cout<< "the value of a>=b is "<<(a>=b)<<endl;
    cout<< "the value of a<=b is "<<(a<=b)<<endl;
    cout<< "the value of a<b is "<<(a<b)<<endl;
    cout<< "the value of a>b is "<<(a>b)<<endl;
    cout<<endl;

    // logical operators  
    cout<<"Following are the logical operators in c++"<<endl;
    cout<<"the value of this logical AND operator ((a==b)&&(a<b))is "<<((a==b)&&(a<b))<<endl;
    cout<<"the value of this logical OR operator ((a==b)||(a<b))is "<<((a==b)||(a<b))<<endl;
    cout<<"the value of this logical NOT operator (!(a==b))is "<<(!(a==b))<<endl;
    cout<<endl;










}
