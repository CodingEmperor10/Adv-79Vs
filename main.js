nameofthepreciouskids=[];
function submit()
{
var name1 = document.getElementById("Student1").value;
var name2 = document.getElementById("Student2").value;
var name3 = document.getElementById("Student3").value;
var name4 = document.getElementById("Student4").value;


nameofthepreciouskids.push(name1);
nameofthepreciouskids.push(name2);
nameofthepreciouskids.push(name3);
nameofthepreciouskids.push(name4);

console.log(nameofthepreciouskids);

document.getElementById("display_preciousname").innerHTML = nameofthepreciouskids
document.getElementById("submit_buttonlife").style.display="none";
document.getElementById("sort_preciousnames").style.display="inline-block";

}

function sorting()
{
    nameofthepreciouskids.sort();
console.log(nameofthepreciouskids);
document.getElementById("display_preciousname").innerHTML = nameofthepreciouskids;

}

