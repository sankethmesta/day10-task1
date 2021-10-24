function User(user_name,user_sal,user_dept){
    (this.name=user_name);
    (this.sal=user_sal);
    (this.dept=user_dept);
    (this.hike=function(){
        console.log("hi"+" "+this.name+" your hike is "+" "+(this.sal+5000)+" "+"and your dept is"+" "+this.dept);
    });
}
var user1= new User("Ram",25000,"CSE");
var user2 = new User("Mohan",30000,"CIVIL");
console.log(user1.hike());
console.log(user2.hike());

var user3={
    name:"karna",
    sal:35000,
    dept:"mech",
    hike1:function(){
        console.log(this.sal+2500)
    }
};
var user4={
    name:"ashok",
    sal:40000,
    dept:"EC",
    hike1:function(){
        console.log(this.sal+2500)
    }
};
console.log(user3.hike1());
console.log(user4.hike1());

