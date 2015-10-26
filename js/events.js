function validation_for_signup()
{

                var check_email = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6}$/;
                var check_firstname = /^[a-zA-Z0-9_]{3,16}$/;
                var check_lastname = /^[a-zA-Z]{3,16}$/;

                               if(document.signup.firstname.value==="")
                                {
                                                alert("please enter first name");
                                                document.signup.firstname.focus();
                                                return false;
                                }
                                else if(check_firstname.test(document.signup.firstname.value) === false)
                                {
                                                alert('Invalid  firstname');
                                                document.signup.firstname.focus();
                                                return false;
                                }
                                 if(document.signup.lastname.value==="")
                                {
                                                alert("please enter last name");
                                                document.signup.lastname.focus();
                                                return false;
                                }
                                else if(check_lastname.test(document.signup.lastname.value) === false)
                                {
                                                alert('Invalid  lastname');
                                                document.signup.lastname.focus();
                                                return false;
                                }
                               if(document.signup.email.value==="")
                                {
                                                alert("please enter email");
                                                document.signup.email.focus();
                                                return false;
                                }
                                else if(check_email.test(document.signup.email.value) === false)
                                {
                                                alert('Invalid  email');
                                                document.signup.email.focus();
                                                return false;
                                }
                                if(document.signup.password.value==='')
                                {
                                                alert("Please enter Password.");
                                                document.signup.password.focus();
                                                return false;
                                }
                                else if(document.signup.password.value.length<6)
                                {
                                                alert("Password is too short.\nShould be atleast 6 characters");
                                                document.signup.password.focus();
                                                return false;
                                }
                                
}