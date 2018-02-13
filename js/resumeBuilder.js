/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

 var bio = {
   "name": "Reham Alblehid",
   "role": "Web Developer",
   "contacts": {
     "mobile": "555-555-5555",
     "email": "rehamalblehid@gmail.com",
     "github": "rehamalblehid",
     "location": "Saudi Arabia"
   },
   "welcomeMessage": "Lorem ipsum dolor sit amet etc etc.",
   "skills": ["Awesomeness", "Programming", "Design"],
   "biopic": "images/reham.jpg",
   display: function() {

     var formattedName = HTMLheaderName.replace(data, bio.name);
     var formattedRole = HTMLheaderRole.replace(data, bio.role);
     $("#header").prepend(formattedName + formattedRole);

     var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
     var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
     var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

     $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

     var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
     var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);

     $("#header").append(formattedWelcomeMsg);
     $("#header").append(formattedBioPic);

     $("#header").append(HTMLskillsStart);
     for(var i = 0; i < bio.skills.length; i++){

        var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkills);

     }
   }

 };

var work = {
  "jobs": [
    {
      "employer": "Saudi Misk",
      "title": "Designer",
      "location": "Riyadh, Saudi Arabia",
      "dates": "June 2016 - July 2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                     "In nibh orci, dapibus nec lobortis non, molestie eu est." +
                     "Vestibulum enim urna, consectetur quis tristique at," +
                     "posuere ut quam. Aliquam sit amet malesuada urna." +
                     "Donec ultrices sit amet sem vel vestibulum. Ut id est" +
                     "laoreet, eleifend ligula ut, semper ipsum."
    },
    {
      "employer": "Technology Company",
      "title": "Developer",
      "location": "Qassim, Saudi Arabia",
      "dates": "April 2016 - September 2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                     "In nibh orci, dapibus nec lobortis non, molestie eu est." +
                     "Vestibulum enim urna, consectetur quis tristique at," +
                     "posuere ut quam. Aliquam sit amet malesuada urna." +
                     "Donec ultrices sit amet sem vel vestibulum. Ut id est" +
                     "laoreet, eleifend ligula ut, semper ipsum."
    }
  ],
    display: function() {
      if(work.jobs.length > 0){
        $("#workExperience").append(HTMLworkStart);
        for(var i = 0; i < work.jobs.length; i++){

          var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
          var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
          var formattedDate = HTMLworkDates.replace(data, work.jobs[i].dates);
          var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
          var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

          $(".work-entry:last").append(formattedEmployer + formattedTitle);
          $(".work-entry:last").append(formattedDate);
          $(".work-entry:last").append(formattedLocation);
          $(".work-entry:last").append(formattedDescription);

        }
      }
    }
};


var projects = {
    projects: [
      {
        "title": "Userinterface Challenge",
        "dates": "2017",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                       "In nibh orci, dapibus nec lobortis non, molestie eu est." +
                       "Vestibulum enim urna, consectetur quis tristique at," +
                       "posuere ut quam. Aliquam sit amet malesuada urna." +
                       "Donec ultrices sit amet sem vel vestibulum. Ut id est" +
                       "laoreet, eleifend ligula ut, semper ipsum.",
        "images": ["images/ui1.png", "images/ui2.png"],
      }
    ],
  display: function(){
    if(projects.projects.length > 0){
      $("#projects").append(HTMLprojectStart);
      for(var i = 0; i < projects.projects.length; i++){

        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        var formattedProjectDate = HTMLprojectDates.replace(data, projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data,projects.projects[i].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDate);
        $(".project-entry:last").append(formattedProjectDescription);

        for(var j = 0;  j < projects.projects[i].images.length; j++){

          var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
          $(".project-entry:last").append(formattedProjectImage);

        }
      }
    }
  }
};




var education = {
  schools: [
    {
      "name": "Qassim University",
      "location": "Qassim, Saudi Arabia",
      "degree": "B.S",
      "majors": ["Information Technology"],
      "dates": "2017"
    }
  ],
  onlineCourses: [
    {
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "dates": "2018",
      "url": "www.udacity.com"
    }
  ],
  display: function(){
    if(education.schools.length > 0){

      $("#education").append(HTMLschoolStart);

      for(var i = 0; i < education.schools.length; i++){

        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);

        for(var m = 0; m < education.schools[i].majors.length; m++){

          var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[m]);
          $(".education-entry:last").append(formattedSchoolMajor);

        }

      }
    }
    if(education.onlineCourses.length > 0 ){

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      for(var j = 0; j < education.onlineCourses.length; j++){

        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[j].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

      }
    }
  }
};

 bio.display();
 projects.display();
 education.display();
 work.display();
 $("#mapDiv").append(googleMap);
