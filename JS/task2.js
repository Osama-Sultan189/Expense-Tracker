dateTimeSet();
document.getElementById("sub").addEventListener("click",function(){
    const entry=new Array();
    entry.push(document.getElementById("summary").value);
    entry.push(document.getElementById("des").value);
    entry.push(document.getElementById("price").value);
    entry.push(document.getElementById("type").value);
    entry.push(document.getElementById("date").value);
    var len=localStorage.length;
    var maxKey=localStorage.key(0);
    for(var k=1;k<len;k++)
        if(localStorage.key(k)>maxKey)
            maxKey=localStorage.key(k)
    if(maxKey==null)
        localStorage.setItem(1,JSON.stringify(entry));
    else
        localStorage.setItem(parseInt(maxKey)+1,JSON.stringify(entry));
});
function dateTimeSet()
{
    const weekDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    var i=(d.getDate()+1)+'/'+((d.getMonth())+1)+'/'+(d.getFullYear())+" "+weekDay[d.getDay()]+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    document.getElementById("date").value=i;
}