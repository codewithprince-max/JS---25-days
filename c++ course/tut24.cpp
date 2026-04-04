#include <iostream>
using namespace std;
class employee
{
    int id;
    static int count;

public:
    void setdata(void) 
    {
        cout << "enter the id" << endl;
        cin >> id;
        count++;
    }
    void getdata(void)
    {
        cout << "the id of this employee is " << id << "and this is employee number" << count << endl;
    }
    static void getcount(void)
    {
        // cout<<id;  // throws an error
        cout << "the value of count is " << count << endl;
    }
};
//  count is static data member of class employee
int employee ::count; // default vlaue is 0

int main()
{
    employee prince, vinay, samrath;
    // harry.id = 1 ;
    // harry.count = 1; // cannot do this as id and count are private
    prince.setdata();
    prince.getdata();
    employee ::getcount();

    vinay.setdata();
    vinay.getdata();
    employee ::getcount();

    samrath.setdata();
    samrath.getdata();
    employee ::getcount();

    return 0;
}