function check()
{   
    var uname=document.getElementById("UNAME");
    var pass=document.getElementById("PASS");
    console.log(uname +" is "+pass);
    if(uname.value=="RAJA" && pass.value=="12345"){
        alert("HELLO "+uname.value+" YOU ARE SUCCESSFULLY SIGNED IN!!");
        window.close();
        window.open("page2.html");
                }
    else {     
            alert("USERNAME/PASSWORD MISMATCHED!!"); 
            window.close();
            window.open("homepage.html");
           
        }
   
}
