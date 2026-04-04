#include <iostream> 
using namespace std;
class student {
    protected : 
    int roll_number; 
    public: 
    void set_roll_number(int);
    void get_roll_number(void);




};

void student :: set_roll_number(int r ){
roll_number = r; 


}
void student :: get_roll_number()
{
    cout<< "The roll number"<<roll_number<<endl; 
}
class exam : public student {
    protected : 
    float maths ; 
    float physics ; 
    public: 
    void set_marks(float , float);
    void get_marks(void);

};
void exam :: set_marks( float p1 , float p2){
    maths = p1;
    physics = p2; 


}
void exam :: get_marks(){

    cout<<"The marks obtained in maths are : "<<maths<<endl; 
    cout<<"The marks obtained in physics are : "<<physics<<endl; 
}
class result : public exam 
{
float percentage; 
public : 
void display_result(){
    get_roll_number();
    get_marks();
    cout<<" your result is "<<(maths + physics )/2<<"%"<<endl;
}

};
int main (){
    result prince; 
    prince.set_roll_number(500);
    prince.set_marks(100.0 , 99.0);
    prince.display_result();


    return 0; 

}