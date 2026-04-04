#include <iostream>
using namespace std;
class employee
{

    int id;
    int salary;

public:
    void setid(void)
    {
        salary = 145 ; 
        cout<<" enter the id of employee"<<endl; 
        cin>>id; 

    }
    void getid(void)
    {
        cout<<" the id of this employee is "<<id<<endl; 


    }


};

int main()

{
    //  employee harry , rohan , prince , ram ; 
    // harry.setid();
    // harry.getid();
    employee pa[4]; 
    for ( int i = 0; i < 4; i++)
    {
        pa[i].setid();
        pa[i].getid();

    }
    


    return 0;
}
