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

  //Error Elements
  const errorMSG = document.getElementById("errorMSG");
  const errorPass = document.getElementById("errorPass");
  const errorRMS = document.getElementById("errorRMS");
  const errorCRS = document.getElementById("errorCRS");
  const errorGEN = document.getElementById("errorGEN");
  const errorLC = document.getElementById("errorLC");

  let valid = true;

  if (!Name) {
      errorMSG.innerHTML = 'Please Fill Name';
      document.getElementById('names').style.border = '1px solid red';
      valid = false;
  }

  if (!passWord) {
    errorPass.innerHTML = "Please Fill Password";
    errorPass.style.color = "orangered";
    document.getElementById('passWord').style.border = '1px solid red';
    valid = false;
  }

    if (remarks === "") {
      document.getElementById("errorRMS").innerHTML = "Please Fill Remarks";
      document.getElementById("remarks").style.border = "1px solid red";
      valid = false;
    }
    if (!course.length) {
      document.getElementById("errorCRS").innerHTML = "Please Fill Course";
      errorCRS.style.color = "orangered";
      valid = false;
    }
  if (!gender) {
    document.getElementById("errorGEN").innerHTML = "Please Fill Gender";
    valid = false;
  }
  if (!locate) {
    document.getElementById("errorLC").innerHTML = "Please Fill Location";
    document.getElementById("locate").style.border = "1px solid red";
    valid = false;
  }

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

// Names Validation

document.getElementById("names").addEventListener("input", function () {
  const Name = this.value;
  const errorMSG = document.getElementById("errorMSG");
  if (Name !== Name.toUpperCase()) {
    errorMSG.innerHTML = "Please UpperCase Only";
    errorMSG.style.color = "red";
    this.style.border = "1px solid red";
  } else if (Name.length <= 8 && Name.length <= 16) {
    errorMSG.innerHTML = "Please Minimum 8 Characters";
    errorMSG.style.color = "red";
    this.style.border = "1px solid red";
  } else {
    errorMSG.innerHTML = "Name is Valid";
    errorMSG.style.color = "green";
    this.style.border = "1px solid green";
  }
});

// passWord Validation

document.getElementById("passWord").addEventListener("input", function () {
  const passWord = this.value;
  const errorPass = document.getElementById("errorPass");

  if (passWord.length >= 8 && passWord.length <= 16) {
    errorPass.innerHTML = "Password Valid";
    errorPass.style.color = "green";
    this.style.border = "1px solid green";
  } else {
    errorPass.innerHTML = "Please password atleast 8 to 16";
    errorPass.style.color = "orangered";
    this.style.border = "1px solid red";
  }
});

// Remarks Validation

document.getElementById("remarks").addEventListener("input", function () {
  const remarks = this.value;
  const errorRMS = document.getElementById("errorRMS");

  if (remarks.length < 8 && remarks.length <= 50) {
    errorRMS.innerHTML = "Please Minimum 8 Character Write";
    errorRMS.style.color = "red";
    this.style.border = "1px solid red";
  } else {
    errorRMS.innerHTML = "Success";
    errorRMS.style.color = "green";
    this.style.border = "1px solid green";
  }
});

// Course Validation

// Get all course checkboxes
const courseCheckboxes = document.querySelectorAll('input[name="course"]');

// Add event listener to each checkbox
courseCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("input", function () {
    validateCourses();

    function validateCourses() {
      const selectedCourses = document.querySelectorAll(
        'input[name="course"]:checked'
      );

      if (selectedCourses.length === 0) {
        errorCRS.innerHTML = "Please select at least one course";
        errorCRS.style.color = "red";
      } else {
        errorCRS.innerHTML = "Success";
        errorCRS.style.color = "green";
      }
    }


  });
});
