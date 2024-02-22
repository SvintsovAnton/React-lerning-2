function Lesson20() {

    //типизация строк
    let someString: string="This is string";
    console.log(someString);
    someString = "This is changed string"
    console.log(someString);
   // someString=5; - так делать нельзя
   //let someString2: string = 10
   let someNumber: number =30;
   let numberWithDot: number = 110.375;

   let isActive: boolean=true;
   isActive=false;

   // массивы - string[]

   const animals: string[] =["cat","dog","lion"];
   animals.push("maus");
   const numbers2: number[] =[1,2,3,4];
//тип tupel - [string,number]
let arrayWithDifferentTypes: [string, string] =["name","john"];
  return <div>

  </div>;
  }
  
export default Lesson20;