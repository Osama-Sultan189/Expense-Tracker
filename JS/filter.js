document.getElementById("filterExpenses").addEventListener("click",function(){
    var type=document.getElementById("inTyp").value;
    var rangeTo=document.getElementById("RT").value;
    var rangeFrom=document.getElementById("RF").value;
    var localStorageData = new Array();
    for(var i=0;i<localStorage.length;i++)
        localStorageData[i]=localStorage.getItem(localStorage.key(i));
    for (var i =0; i<localStorage.length; i++)
    {
        let arr =JSON.parse(localStorageData[i]);
        if(arr[3]==type && arr[2]>=rangeFrom && arr[2]<=rangeTo)
        {
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
            document.getElementById("expnsetab").style.display="block";
        }
    }
});