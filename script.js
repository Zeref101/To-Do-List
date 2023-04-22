const inputText = document.getElementById("input-text");
const lists = document.querySelector(".lists");
const addButton = document.querySelector(".add-btn");


addButton.addEventListener('click',function(){
    if(inputText.value === '')
    {
        alert("You need to type something");
    }
    else
    {
        let li = document.createElement("li");  
        li.innerHTML = inputText.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputText.value = "";
    saveData();
});
lists.addEventListener('click', function(e){
    if(e.target.tagName === "LI" || e.target.tagName === "SPAN")
    {
        e.target.classList.toggle("checked");
        e.target.addEventListener("transitionend", function(){
            e.target.remove();
            saveData();
        });
        
    }

});
function saveData()
{
    localStorage.setItem("data", lists.innerHTML);
}
function showData()
{
    lists.innerHTML = localStorage.getItem("data");

}
showData();