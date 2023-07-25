{
  type Text = string;
  const name: Text = "kim";

  type Num = number;
  const age: Num = 123;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "kim",
    age: 123,
  };

  // String Literal Types
  type Name = "name";
  let kimName: Name;
  kimName = "name"; // let kimName에는 오직 "name"만 할당할 수 있다.

}
