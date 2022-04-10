function setValue(val)
{
    var data = document.querySelector(".inp");
    var valueset = true;
    if(data.style.color === "red" && data.value === "Error" && valueset === true)
    {   
        valueset = false;
        return; 
    }
    else 
    {
        
        data.style.color = "black";
        data.value += val;
    }
}

function clearAll()
{
    document.querySelector(".inp").value = "";
}


function dispAns()
{
    var data = document.querySelector(".inp");
    try
    {
        data.value = data.value.replace(/x/g,"*");
        var result = eval(data.value);
        data.value = result; 
    }
    catch(err)
    {
        data.style.color = "red";
        data.value = "Error";
    }
    
}

function backSpace()
{
    var input = document.querySelector(".inp").value;
    var bs = input.substring(0,input.length-1);
    document.querySelector(".inp").value = bs;
}

let on = false;
function onoff()
{
    if(on === false)
    {
        var x = document.getElementsByClassName("control_button");
        for(var i = 0; i< x.length ; i++)
        {
            x[i].disabled = false;
            x[i].style.transition = "none";
        }
        document.querySelector(".inp").style.backgroundColor = "lightgreen";
        document.querySelector(".inp").style.border = "2px solid greenyellow";
        document.querySelector(".inp").style.boxShadow = "0 0 10px 5px rgba(10, 211, 111, 0.7)";
        document.querySelector(".inp").placeholder = "0";
        document.querySelector(".inp").style.transition = "none";
        
        
        on = true;
    }
    
    else
    {
        var x = document.getElementsByClassName("control_button");
        for(var i = 0; i< x.length ; i++)
        {
            x[i].disabled = true;
            x[i].style.transition = "2s";
        }
        document.querySelector(".inp").style.backgroundColor = "gray";
        document.querySelector(".inp").style.border = "none";
        document.querySelector(".inp").style.boxShadow = "none";
        document.querySelector(".inp").placeholder = "";
        document.querySelector(".inp").value = "";
        document.querySelector(".inp").style.transition = "2s";
        
        on = false;
    }
    
}

function sqrt()
{
    var num = document.querySelector(".inp").value;
    res = Math.sqrt(num);
    document.querySelector(".inp").value = res;

}