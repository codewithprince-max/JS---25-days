#include <iostream>
using namespace std;

/*

                       Public            Private                    Protected
                       derivation          derivation                 derivation

   Private           Not inherited         Not inherited          Not inherited
   members

   Protected          Protected            Private               Protected
   members

    Public             Public             Private             Protected
    members




*/


class base {
protected : 
int a ;
public : 
int b; 


};
class derived : protected base 
{

};


int main()
{
    base b ; 
    derived d;
    // cout<<d.a; // will not work since a is protected in both base as well as derived class 
    

    return 0;
}