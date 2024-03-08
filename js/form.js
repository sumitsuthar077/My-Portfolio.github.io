//this is popup
 //window.alert("welcome to my portfolio");
//end popup




function validation(){  
    var name=document.myform.name.value;  
    var email=document.myform.email.value;  
    var subject=document.myform.subject.value; 
    var message=document.myform.message.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
    document.getElementById("username").innerHTML="PLEASE ENTER YOUR NAME "
      return false;  
    } 
    else if(name.length<5){  
        //alert("Password must be at least 6 characters long."); 
        document.getElementById("username").innerHTML="NAME IS SHORT" 
        return false;  
        }  

    if ( email==""){  
       
        document.getElementById("gmail").innerHTML="ENTER YOUR E-MAIL"
          return false;  
        } 
        if ( subject==""){  
       
            document.getElementById("catagry").innerHTML="DEFINE A SUBJECT"
              return false;  
            } 
            if ( message==""){  
       
                document.getElementById("mesarea").innerHTML="ENTER YOUR MESSAGE"
                  return false;  
                }
                else if(message.length<20){  
                    alert("MESSAGE  MUST BE AT 20 WORD"); 
                    document.getElementById("mesarea").innerHTML="MESSAGE IS TOO SHORT" 
                    return false;  
                    }   
    
    }  