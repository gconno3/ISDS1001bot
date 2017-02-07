const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;


function mainMenu() {
  const mainMenu = new fbTemplate.Generic();
  return mainMenu
    .addBubble('Menu')
      .addImage('https://s3.amazonaws.com/isds1001bot/home.jpg')
      .addButton('Course Schedule', 'SCHEDULE')
      .addButton('Resources', 'RESOURCES')
      .addButton('Contact Us', 'CONTACTUS')
    .get()
};

function schedule() {
  const schedule = new fbTemplate.Generic();
  return schedule
    .addBubble('Course Schedule')
      .addImage('https://s3.amazonaws.com/isds1001bot/schedule.png')
      .addButton('Classes', 'CLASSES')
      .addButton('Labs', 'LABS')
      .addButton('Exams and Check-ups', 'EXAMS')
    .get()
};

function contactUs() {
  const contactUs = new fbTemplate.Generic();
  return contactUs
    .addBubble('Contact Us')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/contactus.jpg')
      .addButton('Office hours', 'OFFICEHOUR')
      .addButton('E-mail', 'EMAIL')
      .addButton('Chat', 'CHAT')
    .get()
};


function resources() {
  const resources = new fbTemplate.Generic();
  return resources
    .addBubble('Resources')
      .addImage('https://s3.amazonaws.com/isds1001bot/resources.jpg')
      .addButton('Moodle', 'https://moodle3.lsu.edu/course/view.php?id=9228')
      .addButton('Excercise', 'EXCERCISE')
      .addButton('Video of the week', 'VIDEOWEEK')
    .get()
};

function video() {
    const video = new fbTemplate;
    return video
      .Video('https://www.youtube.com/watch?v=HNfRgSlhIW0&t=325s')
      .get()
};


const bot = botBuilder(function(message, originalApiRequest){

  if (message.text === 'Menu') {  
    return [
      mainMenu()
    ]
  }
  
  if (message.text === 'WELCOME') {
    return [
      'Hi there! Welcome to ISDS 1001! I\'m Victoria (aka Vicky 💁). I\'ll be you\'re personal tutor.',
      // 'This is my first experience ever as a tutor. 🆕🤷😨. You can try to challenge me, but please don\'t get frustrated if I don\'t understand',
      // 'I promise I\'ll get better 😀💪',
      'I\'ll work in team with Gabe, Biagio, and Joe',
      'You can go to the main menu in every moment by typing \'Menu\'',
      mainMenu()
    ]
  }  

  if (message.text === 'Help') {
    return [
      'Placeholder',
      message.sender,
      //originalApiRequest.env.facebookAccessToken,
      chatRepresentative(originalApiRequest)
    ]
  }

  if (message.text === 'SCHEDULE' || message.text === 'Schedule') {
    return schedule()
  }

  if (message.text === 'RESOURCES'  || message.text === 'Resources') {
    return resources()
  }

  if (message.text === 'CALLUS') {
    return callUs()
  }
 
  if (message.text === 'CONTACTUS') {
    return contactUs()
  }

  if (message.text === 'CLASSES') {
    return [
    'We meet on Tuesday and Thursday from 9:00 to 10:20'//,
    //'We do not track presence, but we do strongly suggest to come to class; it will help you to stay on track 🛣️'
    ]
  }
  
  if (message.text === 'LABS') {
    return [
    'Lab hours are dedicated to Microsoft Word and Excel. 💻',
    'However, feel free to meet us to discuss whatever topic you\'re interested about. Technology is our passion and we\'re happy to talk about it :)',
    'Lab sessions are in the afternoon from 5:00 to 7:00.',
    'See you there ;)'
    ]
  }

  if (message.text === 'EXAMS') {
    return [
    'Our next Check-up is from Monday 2/6 to Friday 2/10.',
    'It will cover Hardware.',
    'Remember to schedule your time to take the exam on the Testing Center webpage --> (https://www.cae.lsu.edu/menuframe.htm)',
    'Be prepared! 🎓🎓🎓'
    ]
  }

  if (message.text === 'VIDEOWEEK') {
    return [
    'This week\'s video presents a young Steve Jobs after he was forced out of Apple.',
    'After his resignation he founded Next Inc. in 1985.',
    'In this video he explains what Next\' strategy and value proposition was.',
    'In the video Jobs mentions some of the concepts about software and hardware that we discussed in class.',
    'Next was ultimately bought by Apple when Jobs retured to the company.',
    'https://www.youtube.com/watch?v=HNfRgSlhIW0&t=325s'//,
    //video()
    ]
  }

  if (message.text === 'EMAIL') {
    return [
    'These are our emails (manage with care 😬😬😬):',
    'Gabe: gpiccoli@lsu.edu',
    'Biagio: bpales1@lsu.edu',
    'Joe: jrod122@lsu.edu',
    'Vicky: don\' have one yet',
    ]
  }

  if (message.text === 'CHAT') {
    return [
    'Just write here. We\'ll reply ASAP 🏃💨'
    ]
  }
  if (message.text === 'OFFICEHOUR') {
    return [
    'We\'re usually available after classes.',
    'If you need a special timeslot contact us and we\'ll schedule an appointment.'
    ]
  }

});



module.exports = bot

