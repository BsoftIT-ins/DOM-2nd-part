const student_form = document.getElementById('student_form');
const msg = document.querySelector('.msg');

student_form.onsubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);

    const { name, email, cell, username, gender, course } = Object.fromEntries(form_data.entries());
    if( !name || !email || !cell || !username || !gender || !course ){
        msg.innerHTML = setAlert('All fields are required');

    }else{
        msg.innerHTML = setAlert('Data Stable', 'success');
    }

    
}