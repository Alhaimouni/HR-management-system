'use strict';

//============================================ Starting ============================================//

const allEmp =[];

function Employee(id,name,dep,level)
{

this.employeeid = id;
this.name = name;
this.department = dep;
this.level = level;
this.salary = this.calSalary();

allEmp.push(this);
}

Employee.prototype.calSalary = function()
{
    if (this.level==="Junior") this.salary= Math.floor(Math.random()*(1000-500+1))+500;
    if (this.level==="Mid-Senior") this.salary= Math.floor(Math.random()*(1500-1000+1))+1000;
    if (this.level==="Senior") this.salary= Math.floor(Math.random()*(2000-1500+1))+1500;

    return this.salary*0.925;
}

let E1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
let E2 = new Employee(1001,"Lana Ali","Finance","Senior");
let E3 = new Employee(1002,"Tamara Ayoub","Markiting","Senior");
let E4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let E5 = new Employee(1004,"Omar Zaid","Development","Senior");
let E6 = new Employee(1005,"Rana Saleh","Development","Junior");
let E7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");


for(let i=0 ;i<allEmp.length;i++)
{
console.log(allEmp[i]);
}
