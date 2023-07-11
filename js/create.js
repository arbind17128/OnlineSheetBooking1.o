var inputName=document.getElementById('name');
var inputAge=document.getElementById('age');
var inputRoll=document.getElementById('roll');
var form=document.getElementById('form-id');
var button=document.getElementById('btn');
var oldDiv=document.getElementById('show')

const students = JSON.parse(localStorage.getItem("student1")) || [];
console.log(students);

function addStudent1(name,age,roll){
    students.push({
        name,
        age,
        roll
    })
  localStorage.setItem('student1', JSON.stringify(students));

    return {name,age,roll}

}


function createElement({name,age,roll}) {
    var newDiv=document.createElement('div');
    var innerName=document.createElement('h1');
    var innerAge=document.createElement('p');
    var innerRoll=document.createElement('p');

    innerName.innerText=`Student name ${name}`;
    innerAge.innerText=`Student age ${age}`;
    innerRoll.innerText=`Student roll ${roll}`;

    newDiv.append(innerName,innerAge,innerRoll);
    oldDiv.appendChild(newDiv);
    }

    students.forEach(createElement);
    // console.log(students);

   button.addEventListener('click', onsubmit)
    function onsubmit(e) {
        e.preventDefault();
        var newStudent =addStudent1(
            inputName.value,
            inputAge.value,
            inputRoll.value
      )
      createElement(newStudent);
      inputName.value='';
      inputAge.value='';
      inputRoll.value='';
    
    }
    


