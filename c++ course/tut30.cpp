#include <iostream>
using namespace std;

class complex
{
    int a, b;

public:
    Complex(int, int); // Constructor declaration

    void printNumber()
    {
        cout << "Your number is " << a << " + " << b << "i" << endl;
    }
};

Complex ::Complex(int x, int y) // ----> This is a default constructor as it takes no parameters
{
    a = x;
    b = y;
}

int main()
{
    //  implicit call

complex a(4,7);
a.printnumber();

// Explicit call
complex b = complex(3,8);
b.printnumber();

    return 0;
}