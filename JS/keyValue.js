updateTable();
function updateTable()
{
    var localStorageData = new Array();
    for(var i=0;i<localStorage.length;i++)
        localStorageData[i]=localStorage.getItem(localStorage.key(i));
    for (var i =0; i<localStorage.length; i++)
    {
        let arr =JSON.parse(localStorageData[i]);
        var row=document.createElement("tr");
        var d=document.createElement("td");
        d.innerHTML=localStorage.key(i);
        var d1=document.createElement("td");
        d1.innerHTML=arr[1];
        var d2=document.createElement("td");
        d2.innerHTML=arr[2];
        var d3=document.createElement("td");
        d3.innerHTML=arr[3];
        var d4=document.createElement("td");
        d4.innerHTML=arr[4];
        var d0=document.createElement("td");
        d0.innerHTML=arr[0];
        row.appendChild(d);
        row.appendChild(d0);
        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
        var btnUpdate=document.createElement("button");
        var btnDelete=document.createElement("button");
        btnDelete.innerHTML="Delete";
        btnUpdate.innerHTML="Update";
        btnUpdate.id=localStorage.key(i)-1;
        btnDelete.id=localStorage.key(i);
        var g=i;
        btnUpdate.onclick=function(){
            updateData(parseInt(this.id)+1);
        }
        btnDelete.onclick=function(){
            localStorage.removeItem(this.id);
            location.reload();
        }
        var d5=document.createElement("td");
        d5.appendChild(btnUpdate);
        d5.appendChild(btnDelete);
        row.appendChild(d5);
        document.getElementById("genKey").appendChild(row);
     }
}
function updateData(key)
{
    document.getElementById("body").innerHTML+="<div id=\"upd\"><h1> Update</h1>"+
    "<form action=\"\" id=\"formU\"><table id=\"updateTable\"><tr>"+
    "<td class=\"col1\"><label for=\"summary\">Expense Summary:</label></td>"+
    "<td class=\"col2\"><input type=\"text\" id=\"summary\" placeholder=\"Expense Summary Here\"></td>"+
    "</tr><tr><td class=\"col1\"><label for=\"des\">Expense Description</label></td>"+
    "<td class=\"col2\"><input type=\"text\" id=\"des\" placeholder=\"Expense Description Here\"></td>"+
    "</tr><tr><td class=\"col1\"><label for=\"price\">Amount</label></td>"+
    "<td class=\"col2\"><input type=\"text\" id=\"price\" placeholder=\"Expense Amount Here\"></td>"+
    "</tr><tr><td class=\"col1\"><label for=\"type\">Type</label></td>"+
    "<td class=\"col2\"><input type=\"text\" id=\"type\" placeholder=\"Expense Type Here\"></td>"+
    "</tr><tr><td class=\"col1\"><label for=\"date\">Date</label></td>"+
    "<td class=\"col2\"><input type=\"datetime\" id=\"date\" disabled></td>"+
    "</tr></table>";
    var crtBtn=document.createElement("input");
    crtBtn.value="UPDATE";
    crtBtn.type="submit";
    crtBtn.id=key;
    crtBtn.className="upd"
    crtBtn.onclick=function()
    {
        const entry=new Array();
        entry.push(document.getElementById("summary").value);
        entry.push(document.getElementById("des").value);
        entry.push(document.getElementById("price").value);
        entry.push(document.getElementById("type").value);
        entry.push(document.getElementById("date").value);
        localStorage.setItem(parseInt(key),JSON.stringify(entry));
        document.getElementById("upd").remove();
        location.reload();
    }
    document.getElementById("formU").appendChild(crtBtn);
    dateTimeSet();
}
function dateTimeSet()
{
    const weekDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    var i=(d.getDate()+1)+'/'+((d.getMonth())+1)+'/'+(d.getFullYear())+" "+weekDay[d.getDay()]+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    document.getElementById("date").value=i;
}
