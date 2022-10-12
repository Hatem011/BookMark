
var siteName=document.getElementById("siteName")
var url=document.getElementById("siteUrl")
var inputs=document.getElementsByClassName("form-control")
var Bookmarker=[]

if(localStorage.getItem('list')!=null)
{
    Bookmarker=JSON.parse(localStorage.getItem('list'))
    displayBook()
}
function addBook()
{
    var Book=
    {
        siteName:siteName.value,
        siteUrl:url.value,
    }
    Bookmarker.push(Book)
    localStorage.setItem("list",JSON.stringify(Bookmarker))
    displayBook()
    reset()
}



function displayBook()
{
    var Temp=''
    for(var i=0;i<Bookmarker.length;i++)

    {
        Temp+=` <tr>
        <td>${Bookmarker[i].siteName}</td>
       <td>    
    <a 

    class="btn btn-primary" href="${Bookmarker[i].siteUrl}" target="_blank" class="text-decoration-none">
   
    Visit
    
    </a>
       </td>
     <td>
     <button class="btn btn-danger" onclick="deleteBook(`+i+`)">Delete</button>
     </td>
    </tr>
        `
    }
    document.getElementById("tbody").innerHTML=Temp
}


function deleteBook(index)
{

Bookmarker.splice(index,1)
localStorage.setItem("list",JSON.stringify(Bookmarker))
displayBook()

}



function reset()
{
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value=''
    }
}

