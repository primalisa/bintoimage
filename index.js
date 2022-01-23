
const divs=document.querySelectorAll(".box");

divs.forEach(x =>
{
if(x.innerHTML==1)
{
  x.style.backgroundColor="gray";
}
else
{
    x.style.backgroundColor="white";
}

})

var inputElements = document.querySelectorAll(".box");

for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('click', function(event) {
      if (this.innerHTML==1)
    {
     this.innerHTML= "0";
     this.style.backgroundColor="white";
    }
  else
    {
    this.innerHTML = "1";
     this.style.backgroundColor="gray"
    }
    });
}





function show()
{

     var inputElements1 = document.querySelectorAll(".box");

    for (var i = 0; i < inputElements1.length; i++) {

          if (inputElements1[i].innerHTML==0)
        {
         inputElements1[i].innerHTML= "";
         inputElements1[i].style.backgroundColor="white";
         inputElements1[i].style.border="none";
        }
        else
        {
           inputElements1[i].innerHTML="";
           inputElements1[i].style.border="none";
        }

    }

}


document.getElementById("convert").addEventListener("click", function() {

  html2canvas(document.querySelector(".board")).then(canvas => {
      document.body.appendChild(canvas)
  });
 });





function myresetfunction() {
window.location.reload();
}
