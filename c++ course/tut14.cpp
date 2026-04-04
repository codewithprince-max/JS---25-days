# include <iostream>
using namespace std; 
typedef struct employee

{
 int eId; //4
 char favchar; //1
 float salary ;  //4
} ep;




union money 
{

    /* Data */

    int rice ; //4

    char car ; //1
    float pounds ; //4  
};

int main (){ 
    enum Meal { Breakfast , Lunch , dinner};
    Meal m1 =   Lunch ; 
    cout<<(m1==2);
// cout<<Breakfast ; 
// cout<<Lunch;
// cout<<dinner;
// union money m1 ; 
// M1 .rice = 34;
// m1 .car = 'c';
// cout<<m1.car; 
ep prince  ; 
struct employee monu ; 
struct employee vinay ; 
prince.eId = 1; 
prince.favchar = 'c'; 
prince.salary = 1900000000000;
cout<<" the value is "<<prince.eId<<endl;
cout<<" the value is "<<prince.favchar<<endl;
cout<<" the value is "<<prince.salary<<endl;

return 0; 



}






 



    


