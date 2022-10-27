document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('from').value ='';
    document.getElementById('to').value ='';
    document.getElementById('number').innerText ='';
});

document.getElementById('generate').addEventListener('click',function(){
    let from =document.getElementById('from').value;
    let to =document.getElementById('to').value;

    if(from==''){
        alert('Please Enter a number in From field');
    }
    if(to==''){
        alert('Please Enter a number in To field');
    }
    else{
        from = parseInt(from);
        to =parseInt(to);
        let number = Math.random()*(to-from);
        number = Math.round(number+from);
        document.getElementById('number').innerText = number;
    }
});