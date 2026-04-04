#include <iostream>
#include <cmath>
using namespace std;
class SimpleCalculator
{
    int a, b;

public:
    void getdatasimple()
    {

        cout << "Enter 1st number  " << endl;
        cin >> a;
        cout << "Enter 2nd number " << endl;
        cin >> b;
    }
    void performSimple()
    {

        cout << "The value of a + b is " << a + b << endl;
        cout << "The value of a - b is " << a - b << endl;
        cout << "The value of a * b is " << a * b << endl;
        cout << "The value of a / b is " << a / b << endl;
    }
};
class ScientificCalculator
{
    int a, b;

public:
    void getdataScientific()
    {

        cout << "Enter  1st  number " << endl;
        cin >> a;
        cout << "Enter 2nd number  " << endl;
        cin >> b;
    }
    void perform()
    {

        cout << "The value of sin(a) is " << sin(a) << endl;
        cout << "The value of cos(a)is " << cos(a) << endl;
        cout << "The value of tan(a) is " << tan(a) << endl;
        cout << "The value of exp(a) is " << exp(a) << endl;
    }
};
class hybridCalculator : public SimpleCalculator, public ScientificCalculator
{
};

int main()
{

    hybridCalculator calc;
    calc.getdataScientific();
    calc.perform();
    calc.getdatasimple();
    calc.performSimple();

    return 0;
}