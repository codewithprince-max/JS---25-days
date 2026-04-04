#include <iostream>
using namespace std;
//  forward declaration
class complex;

class calculator
{
public:
    int add(int a, int b)
    {
        return (a + b);
    }
    int sumrealcomplex(complex, complex);
    int sumcompcomplex(complex, complex);
};

class complex
{

    int a, b;
    //  Indiviual declaring functions as friend
    // Friend int calculator :: sumrealcomplex(complex , complex);
    // Friend int calculator :: sumcompcomplex(complex , complex);

    // Aliter : declaring the entire calculator class as friend
    friend class calculator;

public:
    void setnumber(int n1, int n2)
    {
        a = n1;
        b = n2;
    }

    void printnumber()
    {

        cout << " Your number is " << a << " + " << b << "i" << endl;
    }
};
int calculator ::sumrealcomplex(complex o1, complex o2)
{

    return (o1.a + o2.a);
}

int calculator ::sumcompcomplex(complex o1, complex o2)

{
    return (o1.b + o2.b);
}

int main()
{
    complex o1, o2;
    o1.setnumber(4, 9);
    o2.setnumber(3, 5);
    calculator clac;
    int res = clac.sumrealcomplex(o1, o2);
    cout << " the sum of real part of o1 and o2 is " << res << endl;
    int resc = clac.sumcompcomplex(o1, o2);
    cout << " the sum of complex part of o1 and o2 is " << resc << endl;

    return 0;
}