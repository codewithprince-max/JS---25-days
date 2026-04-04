#include <iostream>
using namespace std;

//  derived class syntax
/*class {{derived-class-name}} : {{ visibility-mode }} {{ base-class-name}}
{
    class members/methods/etc . . .
} */

//  base class
class employee
{
public:
    int id;
    float salary;
    employee(int inpid)
    {
        id = inpid;
        salary = 35.00;
    }
    employee() {}
};
//  creating a PROgrammer class derived from employee base class
class Programmer : public employee
{
public:
    int languagecode;
    Programmer(int inpid)
    {
        id = inpid;
        languagecode = 10;
    }
    void getdata()
    {
        cout << id << endl;
    }
};

int main()
{
    employee prince(90), harry(20);
    cout << prince.salary << endl;
    cout << harry.salary << endl;
    Programmer skillF(10);
    cout << skillF.languagecode << endl;
    cout << skillF.id << endl;
    skillF.getdata();

    return 0;
}