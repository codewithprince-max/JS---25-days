#include<iostream> 
using namespace std;
int c = 54; 
int main (){
    // ******** build in data types **************
// int a, b , c ; 
// cout<<"enter the value of a - "<<endl;
// cin>>a;
// cout<<"enter the value of b- "<<endl;
// cin>>b; 
// c= a+b ; 
// cout<< "the sum is"<<c<<endl; 
// cout<<" the global is c "<<:: c<<endl; 
// // Float , double and long double literals *************
// float d = 43.5F; 
// long double e = 43.5L ;
// cout<<"the size of 34.5 is "<< sizeof (43.5)<<endl;
// cout<<"the size of 34.5f is "<< sizeof (43.5f)<<endl;
// cout<<"the size of 34.5F is "<< sizeof (43.5F)<<endl;
// cout<<"the size of 34.5l is "<< sizeof (43.5l)<<endl;
// cout<<"the size of 34.5L is "<< sizeof (43.5L)<<endl;
// //cout<<"thhe value of d is "<<d<<endl<<"the value of e is "<<e;




// //***************** Reerence variables ****************
// float x = 500; 
// float & y = x;
// cout<<x<<endl;
// cout<<y<<endl; 
//*************type casting *******************
int a= 54;  
float b = 23.5; 
cout<< "the value of a is" <<(float)a<<endl; 
cout<< "the value of a is" <<float(a)<< endl; 


cout<< " the value of  b is "<<(int)b<<endl; 
cout<< " the value of  b is "<<int(b)<<endl; 
int c = int(b);



cout<<" the expression is "<<a+b << endl;
cout<<" the expression is "<<a+ int(b) << endl;
cout<<" the expression is "<<a+(int)b << endl;









    return 0;

}