//My resume in JSON format

const resume = {
    "name": "Parthipan G",
    "contact": {
      "email": "amail2parthivijay@gmail.com",
      "phone": "+91-8667206496",
      "address": {
        "street": "30th street kannigapuram, Guindy",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "postalCode": "600032",
        "country": "India"
      }
    },
    "objective": "To obtain a challenging position in a dynamic organization where I can contribute my skills and experience to achieve organizational goals while continuing to grow professionally.",
    "experience": [
      {
        "jobTitle": "Associate consultant",
        "company": "Atos Syntel",
        "location": "Chennai",
        "startDate": "2021-05",
        "endDate": "Present",
        "responsibilities": [
          "Collaborated with cross-functional teams to deliver high-quality software solutions.",
          "Implemented unit tests and automated testing to ensure code quality."
        ]
      },
      {
        "jobTitle": "Associate CS internet",
        "company": "Sutherland Global Services",
        "location": "Chennai",
        "startDate": "2020-08",
        "endDate": "2020-12",
        "responsibilities": [
          "Resolved queries of Amazon.in users through voice calls/chats",
          "Gained knowledge on the logistics procedure".
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Technology in Information Technology",
        "institution": "Jerusalem college of engineering",
        "location": "Chennai, Tamil Nadu",
        "graduationDate": "2016-2020"
      }
    ],
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Agile methodologies"
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Fluent"
      },
      {
        "language": "Tamil"
        "proficiency" : "Fluent"
      }
    ],
    "interests": [
      "Open-source software",
      "Photography",
      "Dancing"
    ]
  }

// Using a simple for loop to iterate through skills
 const skills = resume.skills;

for (let i = 0; i < skills.length; i++) {
    console.log("Skill:", skills[i]);
  }

// Using for-in to loop through object properties
const contact = resume.contact;

for (let key in contact) {
    if (contact.hasOwnProperty(key)) { // Check if property belongs to the object itself
      console.log(key, ":", contact[key]);
    }
  }

  // Using for-of to iterate through array elements

  const experiences = resume.experience;

for (const exp of experiences) {
  console.log("Company:", exp.company);
  console.log("Job Title:", exp.jobTitle);
  console.log("Start Date:", exp.startDate);
  console.log("End Date:", exp.endDate);
  console.log("---");
}


// Using forEach to iterate through array elements with a callback

const languages = resume.languages;

languages.forEach(language => {
  console.log("Language:", language.language);
  console.log("Proficiency:", language.proficiency);
});

