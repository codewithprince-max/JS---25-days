#include<iostream>
using namespace std;
class student
{
protected:
    int roll_number;

public:
    void set_number(int a)
    {

        roll_number = a;
    }
    void print__number(void)
    {

        cout<< " your roll number is " << roll_number << endl;
    }
};
class test : public student
{
protected:
    float maths, physics;

public:
    void set_marks(float m1, float p1)
    {
        maths = m1;
        physics = p1;
    }
    void print_marks(void)
    {
        cout<< "your result is here " << endl
            << "maths " << maths << endl
            << "physics" << physics << endl;
    }
};

class sports : public student
{
protected:
    float score;
    public: 
    void set_score(float sc){
        score = sc;

    }
    void print_score(void){
        cout<<"your pt score is "<<score<<endl;

    }
};
class result : public test , public sports {
private : 
float total ;
public:
void display (void){
    total = maths + physics + score;
    print_number();
    print_marks();
    print_score();
    cout<<"your total score is "<<total<<endl;
}
};


int main()
{
result prince; 
prince.set_number(2300);
prince.set_marks(90.3 , 50.4);
prince.set_score(10);
prince.display();


    return 0;
}