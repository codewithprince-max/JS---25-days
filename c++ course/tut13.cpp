#include <iostream>
using namespace std;
int main(){
    // Array Example
    int marks [] = {23, 32 , 45 , 54 , 67, } ;



    int PPsMarks[5]; 
    PPsMarks[0]=2247;
    PPsMarks[1]=22445;
    PPsMarks[2]=224767;
    PPsMarks[3]=9078;
    PPsMarks[4]=123;
     
    cout<< "these are PPsMarks"<<endl;
    
    cout<<PPsMarks[0]<<endl;
    cout<<PPsMarks[1]<<endl;
    cout<<PPsMarks[2]<<endl;
    cout<<PPsMarks[3]<<endl;
    cout<<PPsMarks[4]<<endl;

    // you can change the value of an array 
    PPsMarks[3] = 43234;
    cout<<"these are marks"<<endl; 
    cout<<PPsMarks[0]<<endl;
    cout<<PPsMarks[1]<<endl;
    cout<<PPsMarks[2]<<endl;
    cout<<PPsMarks[3]<<endl;
    cout<<PPsMarks[4]<<endl;
for (int  i = 0; i < 5; i++)
{
    
    cout<<"the value of marks" <<i<< " is " <<PPsMarks[i]<<endl;
}

// quick quiz : do the same using while and do-while loop ? 
//  pointers and aarays 
int* p = PPsMarks ; 
cout<<*(p++)<<endl; 
cout<<*(++p)<<endl; 
cout<<" the value of *p is "<<*p<<endl; 
cout<<" the value of *(p+1) is "<<*(p+1)<<endl; 
cout<<" the value of *(p+2) is "<<*(p+2)<<endl; 
cout<<" the value of *(p+3) is "<<*(p+3)<<endl; 
cout<<" the value of *(p+4) is "<<*(p+4)<<endl; 



    return 0; 

}