 document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector('.container');
    const btncopy=document.querySelector('#btncopy');
    const allborder=document.getElementById("all");
    const borderElement=document.getElementById("border");
    const allvalue=document.getElementById("all-value");
    const bordervalue=document.getElementById("border_value")
    const code=document.getElementById("codearea");
    const border_styleElement=document.getElementById("border_style")
    
    var all_radius=10;
    var border_style="dotted";
    var border_size=3;
    var coding="text";

    function allBorderUpdate(){
     all_radius=allborder.value;
     border_size=borderElement.value;
     allvalue.innerHTML=all_radius+"px";
     bordervalue.innerHTML=border_size+"px";
     coding=`border-radius:${all_radius}px; 
     border:${border_size}px ${border_style} red`;

     code.value=coding;
     container.style.cssText=coding;
    }

    function codeupdate(){

    }

    allborder.addEventListener("mousemove", allBorderUpdate);
    allborder.addEventListener("change", allBorderUpdate);
  
    borderElement.addEventListener("mousemove", allBorderUpdate);
    borderElement.addEventListener("change", allBorderUpdate);



    btncopy.addEventListener("click",()=>{
          
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert('codecopied');
    } );
    allBorderUpdate();
    // border style
    border_styleElement.addEventListener("change",function(){
        border_style=this.value;
        allBorderUpdate();
    })
});

    