function userData() {
    const Name = document.getElementById('name').value.trim();
    const contact = document.getElementById('pass').value.trim();
    const remarks = document.getElementById('remarks').value.trim();
    const gender = document.querySelector('input[name="gen"]:checked');
    const locate = document.getElementById('locate').value;
    const course = document.querySelectorAll('input[name="course"]:checked');

    //Basic Validation //|| contact === "" || !gender || course.length === 0 || locate === "" || remarks === "") {
      //  alert("Please Fill All Fields Correctly"

    let valid = true;

    if(Name === ""){
        document.getElementById('nameError').innerHTML = "Name is Required";
        document.getElementById('name').style.border = '1px solid red';
        valid = false;
    } 
     if(contact === "") {
        document.getElementById('passError').innerHTML = "Password is Required";
        document.getElementById('pass').style.border = '1px solid red';
        valid = false;
    }
         if(remarks === "") {
        document.getElementById('remarksError').innerHTML = "Remarks is Required";
        document.getElementById('remarks').style.border = '1px solid red';
        valid = false;
    }
     if(!gender) {
        document.getElementById('genderError').innerHTML = "Gender is Required"
        valid = false;
    }
     if(course.length === 0) {
        document.getElementById('courseError').innerHTML = "Course is Required"
        document.querySelector('input[name="course"]').style.border = '1px solid red';
       valid = false;
    }
     if(locate === "") {
        document.getElementById('locateError').innerHTML = "Location is Required"
        document.getElementById('locate').style.border = '1px solid red';
        valid = false;
    }

    if(valid == false) {
        return false;
    }

    const selectedCourses = Array.from(course)
        .map(course => course.value)
        .join(', ');

    const output = `<h1>Trainee Data Summary</h1>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Courses:</strong> ${selectedCourses}</p>
        <p><strong>Location:</strong> ${locate}</p>
    `;

    console.log(output);
    
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.writeln(output);


    
}


