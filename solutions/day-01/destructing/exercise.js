/* Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.*/

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
  
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

function getPersonInfo(person) {
    const {firstName, lastName, age, country, job, skills, languages} = person
    const [s1, s2, s3, s4, s5, s6, s7, s8, s9] = skills
    const [l1, l2, l3] = languages

    return '${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${s1}, ${s2}, ${s3}, ${s4}, ${s5}, ${s6}, ${s7}, ${s8} and ${s9}. He speaks ${l1}, ${l2} and a little bit of ${l3}.'

}