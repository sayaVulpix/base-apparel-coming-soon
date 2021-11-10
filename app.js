function validEmail() {
 
    const email = document.querySelector('.email').value
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(email)){
        document.querySelector('.error-img').style.visibility="hidden";
        document.querySelector('.error-text').style.visibility="hidden";
    }else{
        document.querySelector('.error-img').style.visibility="visible";
        document.querySelector('.error-text').style.visibility="visible";
    }
};