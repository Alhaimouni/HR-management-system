'use strict';

const allEmployees=[];


function Employee(id,name,dep,level,image)
{

this.id=id;
this.name=name;
this.department=dep;
this.level=level;
this.image=image;
this.salary=this.netSalary();
allEmployees.push(this);
}

Employee.prototype.salaryWithoutTax= function()
{  
    let sal;
    if(this.level == "Senior") {sal =Math.floor(Math.random()*(2000-1500+1)+1500);}
    if(this.level == "Mid-Senior") {sal =Math.floor(Math.random()*(1500-1000+1)+1000);}
    if(this.level == "Junior") {sal = Math.floor(Math.random()*(1000-500+1)+500) ;}
    return sal;
}

Employee.prototype.netSalary = function()
{
    return Math.floor(this.salaryWithoutTax()*0.925);
}

let E1 = new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let E2 = new Employee(1001,"Lana Ali","Finance","Senior","./assets/Lana.jpg");
let E3 = new Employee(1002,"Tamara Ayoub","Markiting","Senior","./assets/Tamara.jpg");
let E4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg");
let E5 = new Employee(1004,"Omar Zaid","Development","Senior","./assets/Omar.jpg");
let E6 = new Employee(1005,"Rana Saleh","Development","Junior","./assets/Rana.jpg");
let E7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg"); 


Employee.prototype.employeeData = function()
{
    let par = document.createElement("p");
    par.textContent = "Name: "+this.name+" ID :"+this.id+" Level: "+this.level+"  Salary : " +this.salary+ " JD";

    let addImgElement = document.createElement("img");
    addImgElement.src = this.image;
    addImgElement.alt = "Employee Image";
    addImgElement.style.cssText ="width:20%; hieght:15%";

    let divPlace;
    switch(this.department)
    {
        case "Administration" :
            divPlace = document.getElementById("adm");
            break;
        case "Development" :
            divPlace = document.getElementById("dev");
            break;
        case "Markiting" :
            divPlace = document.getElementById("mar");
            break;
        case "Finance" :
            divPlace = document.getElementById("fin");
            break;
    }
   
    //=========================================================== With  Table ===========================================================//

    let card = document.createElement("table");
    let pic = document.createElement("tr");
    let dat = document.createElement("tr");
    let space = document.createElement("tr");
    let br = document.createElement("br");

    space.appendChild(br);
    pic.appendChild(addImgElement);
    dat.appendChild(par);
    card.appendChild(pic);
    card.appendChild(dat);
    card.appendChild(space);
    divPlace.appendChild(card);
    pic.setAttribute("class","cd");
    dat.setAttribute("class","cdd");
    card.setAttribute("class","card");
    //========================================================== With Out Table ===========================================================//

    /* divPlace.appendChild(addImgElement);
    divPlace.appendChild(par);  */
};

let divEl = document.getElementsByClassName("od");
divEl[0].style.cssText ="color:darkblue; font-style: oblique ; border-style: none none  groove; text-align : left ; border-color : gray";
divEl[1].style.cssText ="color:darkblue; font-style: oblique ; border-style: none none groove; text-align : left; border-color : gray";
divEl[2].style.cssText ="color:darkblue; font-style: oblique ; border-style: none none groove; text-align : left; border-color : gray";
divEl[3].style.cssText ="color:darkblue; font-style: oblique ; border-style: none none groove; text-align : left; border-color : gray ";

function render()
{
    for (let i=0;i<allEmployees.length;i++)
    {   
        allEmployees[i].employeeData();
    }
}

render();
