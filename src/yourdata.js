// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import pythonIcon from "./images/python.svg"
import javaIcon from "./images/java.svg"
import cppIcon from "./images/cpp.svg"
import htmlcssIcon from "./images/htmlcss.svg"
import jsIcon from "./images/js.svg"

// Social Icon
import mailIcon from "./images/mail.svg"
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  headerTagline: [
    "Jerry Liu",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a computer science student with a passion for software development and machine learning.",

  //Contact Email
  contactEmail: "jyl3xf@virginia.edu",

  // End Header Details -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a 3rd year student at UVA pursuing a Bachelor of Science in Computer Science. Ever since I learned how to program in high school, my dream has been to become an elite software engineer who creates awesome projects. I am always looking for new opportunities to grow and expand my skillset. Currently, I'm a teaching assistant for UVA's Computer Architecture class (CS 3330), and I'm actively looking for a 2022 summer internship.",

  //   End About Section ---------------------

  // Projects Section ------------------------
  projects: [
    {
      title: "2048 Clone", //Project Title - Add Your Project Title Here
      para:
        "My 2048 clone made using JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png",
      //Project URL - Add Your Project Url Here
      url: "https://jerryliu8.github.io/2048-clone/",
    },
    {
      title: "Typing Game", //Project Title - Add Your Project Title Here
      para:
        "A simple JavaScript Web App for practicing typing skills.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://lh3.googleusercontent.com/proxy/tsAMfE58tL_joZRS090fxUVhjHU9BcWD-7RkAGWuJHmZC2NsvNZLjABwpTjTv-c66Saht1KZANpbwUev7D4pcsPBQkRpvWlw3w",
      //Project URL - Add Your Project Url Here
      url: "https://jerryliu8.github.io/TypingGame/",
    },
    {
      title: "Automatic Chess Game Tracking", //Project Title - Add Your Project Title Here
      para:
        "Developed project on chess game tracking through computer vision and deep learning using a custom dataset and a Convolutional Neural Network. Implemented the Keras, TensorFlow, and OpenCV Python libraries.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/JerryLiu8/Senior-Research",
    },
    {
      title: "Old Website", //Project Title - Add Your Project Title Here
      para:
        "My first personal portfolio website", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://icon-library.com/images/web-icon-black/web-icon-black-3.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://jerryliu8.github.io/index.html",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Projects Section -----------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pythonIcon,
      para:
        "Python is my strongest programming language. It is by far the most common langauge I've used in my classes and projects. I have extensive knowledge of Python scripting, and I have experience with Python web frameworks like Django. Furthermore, I've used many Python libraries such as NumPy, Matplotlib, and TensorFlow in various data science and machine learning projects.",
    },
    {
      img: javaIcon,
      para:
        "Java is the first programming language I learned, back in 9th grade. Programming in Java has taught me much about Object-Oriented Design and the principles of abstraction, encapsulation, inheritance, and polymorphism. I've programmed using Java for several different projects and assignments.",
    },
    {
      img: cppIcon,
      para:
        "I have about 4 years of experience in C++ and C. These languages have taught me how to use pointers and how to manage memory in programs.",
    },
    {
      img: htmlcssIcon,
      para:
        "I have studied HTML and CSS on my own to better understand web development. My goal is to become a full-stack developer, so mastering front-end development is a high priority.",
    },
    {
      img: jsIcon,
      para:
        "I have around 3 years of experience programming in JavaScript.",
    },
    {
      img: reactIcon,
      para:
        "I used React.js in my last internship, and I'm currently learning more about React.js as well",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------
  social: [
    // Add Or Remove The Link Accordingly
    { img: mailIcon, url: "mailto:jyl3xf@virginia.edu" },
    { img: githubIcon, url: "https://github.com/JerryLiu8" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/jerry-liu-38080816b/" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
