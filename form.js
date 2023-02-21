const USERNAME  = 'Username';
const PASSWORD = 'Password';

document.getElementById('submitbtn').addEventListener("click", function(event){
    event.preventDefault();
    var uname = document.getElementById('input1').value;
    var pwd = document.getElementById('input2').value;
    
    if (uname == USERNAME){
        if (pwd == PASSWORD){
            document.getElementById('incorrect').style.display = 'none';
            document.getElementById('done').style.display = 'block';
        }else
        {
            document.getElementById('incorrect').style.display = 'block';
            document.getElementById('done').styledisplay = 'none';
        }
    }else
    {
        document.getElementById('incorrect').style.display = 'block';
        document.getElementById('done').style.display = 'none';
    }

    
})