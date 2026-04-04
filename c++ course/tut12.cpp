#include<iostream>
using namespace std; 
int main (){
    //  what is pointer ? ---> datA TYPE WHICH HOLDS THE ADDRESSS THE OF OTHER DATA type 
int a = 4 ;
int* b = &a; 
b = &a;
// & ---> (address of) operator
cout<<"the addresss of a is"<<&a<<endl;
cout<<"the addresss of a is"<<b<<endl;
//  * ---> (value at) dereference operator 
cout<<"the value at addresss b is "<<*b<<endl; 
//  Pointer to Pointer 
int ** c = &b; 
cout<<" the addresss of b is "<<&b<<endl;
cout<<" the addresss of b is "<<c<<endl;
cout<<" the addresss of c is "<<*c<<endl;
cout<<" the value at  addresss value-at(value-at(c))  is "<<**c <<endl;







    return 0; 

}
 
