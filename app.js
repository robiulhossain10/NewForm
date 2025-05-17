function userData() {
  const Name = document.getElementById("names").value.trim();
  const passWord = document.getElementById("passWord").value.trim();
  const remarks = document.getElementById("remarks").value.trim();
  const gender = document.querySelector('input[name="gen"]:checked');
  const locate = document.getElementById("locate").value;
  const course = document.querySelectorAll('input[name="course"]:checked');

  const selectedCourse = Array.from(course)
    .map((course) => course.value)
    .join(", ");

  let valid = true;

  valid = validateName();
  valid = validatePass ();
  valid = validateRemarks();
  valid = validateGender();
  valid = validateCourse();
   valid = validateLocate();

  if (valid == false) {
    return false;
  }

  let output = `<h2>Trainee User Data</h2>
                <p><strong>Name:</strong> ${Name} </p>
                <p><strong>Password:</strong> ${passWord} </p>
                <p><strong>Remarks:</strong> ${remarks} </p>
                <p><strong>Gender:</strong> ${gender.value} </p>
                <p><strong>Location:</strong> ${locate} </p>
                <p><strong>Course:</strong> ${selectedCourse} </p>`;

  let newWindow = window.open("", "_blank", "width=600,height=500");
  newWindow.document.writeln(output);
}


//All addEvent Listener List

document.getElementById("names").addEventListener("input", validateName);
document.getElementById("passWord").addEventListener("input", validatePass);
document.getElementById("remarks").addEventListener("input", validateRemarks);
document.querySelectorAll('input[name="gen"]').forEach((radio) => {
  radio.addEventListener("click", validateGender);
});
document.querySelectorAll('input[name="course"]').forEach((checkbox) => {
  checkbox.addEventListener("click", validateCourse);
});
document.getElementById("locate").addEventListener("click", validateLocate);

//Validate Name

function validateName() {
  const Name = document.getElementById("names").value.trim();
  const errorMSG = document.getElementById("errorMSG");

  if (Name !== Name.toUpperCase()) {
    errorMSG.innerHTML = "নাম অবশ্যই বড় হাতের অক্ষরে হতে হবে";
    errorMSG.style.color = "red";
    document.getElementById("names").style.border = "1px solid red";
    return false;
  } else if (Name.length < 8 || Name.length > 20) {
    errorMSG.innerHTML = "নাম অবশ্যই ৮-১৬ অক্ষর হতে হবে";
    errorMSG.style.color = "red";
    document.getElementById("names").style.border = "1px solid red";
    return false;
  } else {
    errorMSG.innerHTML = "নাম সঠিক";
    errorMSG.style.color = "green";
    document.getElementById("names").style.border = "1px solid green";
    return false;
  }
}

//Validate Password

function validatePass () {
  const Pass = document.getElementById('passWord').value.trim();
  const PassStyle = document.getElementById('passWord');
  const errorPass = document.getElementById('errorPass');

  if(!Pass) {
    errorPass.innerHTML = 'Password Required';
    errorPass.style.color = 'orangered'
    PassStyle.style.border = '1px solid red'
    return false;
  } else if (Pass.length < 8 || Pass.length > 25) {
    errorPass.innerText = 'Minimum 8 to 15 characters';
    errorPass.style.color = 'red';
    PassStyle.style.border = '1px solid red';
    return false;
  }
  else{
    errorPass.innerText = 'Password is Valid';
    errorPass.style.color = 'green'
    PassStyle.style.border = '1px solid green'
    return false;
  }
}

    
//Validate Gender


function validateGender() {
  const gender = document.querySelector('input[name="gen"]:checked');
  const errorGEN = document.getElementById("errorGEN");

  if (!gender) {
    errorGEN.innerHTML = "দয়া করে লিঙ্গ নির্বাচন করুন";
    errorGEN.style.color = "red";
    return false;
  } else {
    errorGEN.innerText = "সঠিক";
    errorGEN.style.color = "green";
    return false;
  }
}

//Remarks Validation

function validateRemarks(){
  const remarks = document.getElementById('remarks').value.trim();
  const remarksSTYLE = document.getElementById('remarks');
  const errorRMS = document.getElementById('errorRMS');

  if(!remarks) {
    errorRMS.innerText = 'Please Insert Fill'
    errorRMS.style.color = 'red'
    remarksSTYLE.style.border = '1px solid red';
    return false;
  } else if (remarks.length < 8 || remarks.length > 16) {
    errorRMS.innerText = 'Minimum 8 to 16 characters Only';
    errorRMS.style.color = 'red';
    return false;
  }
  else{
    errorRMS.innerText = 'Success'
    errorRMS.style.color = 'green'
    remarksSTYLE.style.border = '1px solid green';
    return false;
  }
}

// Validate Course

function validateCourse() {
  const course = document.querySelectorAll('input[name="course"]:checked');
  const errorCRS = document.getElementById('errorCRS');

  if(!course.length) {
    errorCRS.innerHTML = 'Pleaes Select One Course'
    errorCRS.style.color = 'red';
    return false;
  } else {
    errorCRS.innerHTML = 'Success';
    errorCRS.style.color = 'green';
    return false;
  }
}

// vALIDATE Dropdown

function validateLocate() {
  const locate = document.getElementById('locate').value;
  const locateStyle = document.getElementById('locate');
  const errorLC = document.getElementById('errorLC');

  if (!locate) {
    errorLC.innerHTML = 'Please Select Location';
    errorLC.style.color = 'red';
    locateStyle.style.border = '1px solid red'
    return false;
  } else {
    errorLC.innerHTML = 'Location Valid';
    errorLC.style.color = 'green';
    locateStyle.style.border = '1px solid green'
    return false;
  }
}












  // if (!Name) {
  //     errorMSG.innerHTML = 'Please Fill Name';
  //     document.getElementById('names').style.border = '1px solid red';
  //     valid = false;
  // }

  // if (!passWord) {
  //   errorPass.innerHTML = "Please Fill Password";
  //   errorPass.style.color = "orangered";
  //   document.getElementById('passWord').style.border = '1px solid red';
  //   valid = false;
  // }

    // if (remarks === "") {
    //   document.getElementById("errorRMS").innerHTML = "Please Fill Remarks";
    //   document.getElementById("remarks").style.border = "1px solid red";
    //   valid = false;
    // }
    // if (!course.length) {
    //   document.getElementById("errorCRS").innerHTML = "Please Fill Course";
    //   errorCRS.style.color = "orangered";
    //   valid = false;
    // }
  // if (!gender) {
  //   document.getElementById("errorGEN").innerHTML = "Please Fill Gender";
  //   valid = false;
  // }
  // if (!locate) {
  //   document.getElementById("errorLC").innerHTML = "Please Fill Location";
  //   document.getElementById("locate").style.border = "1px solid red";
  //   valid = false;
  // }


// Names Validation

// document.getElementById("names").addEventListener("input", function () {
//   const Name = this.value;
//   const errorMSG = document.getElementById("errorMSG");
//   if (Name !== Name.toUpperCase()) {
//     errorMSG.innerHTML = "Please UpperCase Only";
//     errorMSG.style.color = "red";
//     this.style.border = "1px solid red";
//   } else if (Name.length <= 8 && Name.length <= 16) {
//     errorMSG.innerHTML = "Please Minimum 8 Characters";
//     errorMSG.style.color = "red";
//     this.style.border = "1px solid red";
//   } else {
//     errorMSG.innerHTML = "Name is Valid";
//     errorMSG.style.color = "green";
//     this.style.border = "1px solid green";
//   }
// });

// passWord Validation

// document.getElementById("passWord").addEventListener("input", function () {
//   const passWord = this.value;
//   const errorPass = document.getElementById("errorPass");

//   if (passWord.length >= 8 && passWord.length <= 16) {
//     errorPass.innerHTML = "Password Valid";
//     errorPass.style.color = "green";
//     this.style.border = "1px solid green";
//   } else {
//     errorPass.innerHTML = "Please password atleast 8 to 16";
//     errorPass.style.color = "orangered";
//     this.style.border = "1px solid red";
//   }
// });

// Remarks Validation

// document.getElementById("remarks").addEventListener("input", function () {
//   const remarks = this.value;
//   const errorRMS = document.getElementById("errorRMS");

//   if (remarks.length < 8 && remarks.length <= 50) {
//     errorRMS.innerHTML = "Please Minimum 8 Character Write";
//     errorRMS.style.color = "red";
//     this.style.border = "1px solid red";
//   } else {
//     errorRMS.innerHTML = "Success";
//     errorRMS.style.color = "green";
//     this.style.border = "1px solid green";
//   }
// });

// Course Validation

// // Get all course checkboxes
// const courseCheckboxes = document.querySelectorAll('input[name="course"]');

// // Add event listener to each checkbox
// courseCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener("input", function () {
//     validateCourses();

//     function validateCourses() {
//       const selectedCourses = document.querySelectorAll(
//         'input[name="course"]:checked'
//       );

//       if (selectedCourses.length === 0) {
//         errorCRS.innerHTML = "Please select at least one course";
//         errorCRS.style.color = "red";
//       } else {
//         errorCRS.innerHTML = "Success";
//         errorCRS.style.color = "green";
//       }
//     }


//   });
// });
