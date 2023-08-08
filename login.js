function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
let uname=document.getElementById("uname");
let pass=document.getElementById("pass");
btn.onclick= () =>{
    if(uname.value=="Digha" && pass.value=="Fuchkawala@1"){
        sessionStorage.setItem('username',uname.value);
        window.location.replace('video.html');
    }
    else{
        swal("Opps!!", "Incorrect username/password", "error");
    }
}