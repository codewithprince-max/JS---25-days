#include <iostream> 
using namespace std; 
// class derivedc : visibility- mode base1 , visibility-mode base2
//{
  //  class body of class "derivedc"
//};
class base1 {
    protected :
    int base1int ; 
    public : 
    void set_base1int(int a)
    {
        base1int = a; 

    }



};
class base2{
    protected : 
    int base2int;
    public: 
    void set_base2int(int a){
        base2int = a;
         
    }

};

class base3{
    protected : 
    int base3int;
    public: 
    void set_base3int(int a){
        base3int = a;
         
    }

};
class derived : public base1 , public base2 , public base3
{
public : void show (){
cout<<"The value of base1 is"<<base1int<<endl;
cout<<"The value of base2 is"<<base2int<<endl;
cout<<"The value of base3 is"<<base3int<<endl;
cout<<"The sum of these values is"<<base1int + base2int + base3int <<endl;

}
};


int main  ( ){
    derived prince;
    prince.set_base1int(89);
    prince.set_base2int(49);
    prince.set_base3int(9);
    prince.show();


    return 0; 



}