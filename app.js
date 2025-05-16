function userData() {
    const Name = document.getElementById('names').value.trim();
    const passWord = document.getElementById('passWord').value.trim();
    const remarks = document.getElementById('remarks').value.trim();
    const gender = document.querySelector('input[name="gen"]:checked')
    const locate = document.getElementById('locate').value;
    const course = document.querySelectorAll('input[name="course"]:checked')

    const selectedCourse = Array.from(course).map(course => course.value).join(', ');

    let valid = true;

    if(Name === ""){
    document.getElementById('errorMSG').innerHTML = 'Please Fill Name'
    valid = false;
    }
    if(passWord === ""){
    document.getElementById('errorPass').innerHTML = 'Please Fill Password'
    valid = false;
    }
    if(remarks === ""){
    document.getElementById('errorRMS').innerHTML = 'Please Fill Remarks'
    valid = false;
    }
    if(course === ""){
    document.getElementById('errorCRS').innerHTML = 'Please Fill Course'
    valid = false;
    }
    if(!gender){
    document.getElementById('errorGEN').innerHTML = 'Please Fill Gender'
    valid = false;
    }
    if(locate === ""){
    document.getElementById('errorLC').innerHTML = 'Please Fill Location'
    valid = false;
    }

    if(valid == false) {
        return false;
    }


    let output = `<h2>Trainee User Data</h2>
                <p><strong>Name:</strong> ${Name} </p>
                <p><strong>Password:</strong> ${passWord} </p>
                <p><strong>Remarks:</strong> ${remarks} </p>
                <p><strong>Gender:</strong> ${gender.value} </p>
                <p><strong>Location:</strong> ${locate} </p>
                <p><strong>Course:</strong> ${selectedCourse} </p>`;


    let newWindow = window.open("","_blank","width=600,height=500");
    newWindow.document.writeln(output)






}