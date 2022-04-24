
import "./credentialsCard.scss";



  // const education = [
  //   { school: 'University of Denver',
  //     degree: 'Full Stack Coding Bootcamp',
  //    graduated: '2022',
  //    id: 1
    
  //   },
  //   { school: 'The Ohio State University', 
  //     degree: 'Bachelor of Science: Cell & Molecular Biology',
  //    graduated: '2008',
  //    id: 2,
   
  //   }];
  


  const education = [
    {title: 'The Ohio State University', body: 'BS - Cell Bio'}, 
    {title: 'Colorado State University', body: 'Biomedical Science'}
  ];
  

  export default function CredentialsCard() {
        return (
            <div>
              {education.map((education) => (
                <p>
                  {education.title} {education.body}
                </p>
              )
              )}
            </div> 
        )};

// export default function CredentialsCard() {
//     return (
//       <div>
//       {education.map((education, index) => (
//         <li key={index}>
//           {education}
//         </li>
//       ))}
//     </div>
//     );
//   }




// const CredentialsCard = () => {
//   const education = (
//     { school: 'University of Denver',
//       degree: 'Full Stack Coding Bootcamp',
//      graduated: '2022',
//      id: 1 
//     },
//     { school: 'The Ohio State University', 
//       degree: 'Bachelor of Science: Cell & Molecular Biology',
//      graduated: '2008',
//      id: 2
//     },
//     { school: 'The Ohio State University', 
//     degree: 'Bachelor of Arts: Anthropology',
//    graduated: '2008',
//    id: 3
//     },
//     { school: 'Colorado State University', 
//       degree: 'Master of Biomedical Science',
//       graduated: '2013',
//     id: 4
//     })
  


// return (
//   <div className="credentialsCard">
   

//     <CredentialsCard education={education}
//     />


//   </div>
// );
// }
// export default CredentialsCard;

