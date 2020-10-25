<template>
    <ul> 
        <li v-for="item in experiences" :key="item.id">
            <ExperienceCard
                :item="item"
                :show="true"
            />
        </li>
    </ul>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue';

export default {
    name: 'Experiences',
    data() {
        return {
            experiences: [
                {
                id: 0,
                jobTitle: 'Web Development Assistant',
                company: 'PAN Magazine',
                duration: 'September 2020 - Present',
                jobDescription: 'Responsible for the maintenance and improvement of pan-mag.com. Worked on adding website analytics, implementing a new website theme, and getting an SSL certificate for the website, as of updating this CV. Future tasks include making the site even more user friendly and improving SEO.'
                },
                {
                id: 1,
                jobTitle: 'Software Engineering Intern',
                company: 'Alarm.com',
                duration: 'June 2020 - September 2020',
                jobDescription: 'Worked on the home automation team where I was singlehandedly responsible for the design and launch of frontend and backend components for a smart air conditioning feature. Worked in C# and SQL to create functionality and testing for the feature, as well as ASPX to create webpage compatibility. Gained experience in object oriented programming, databases, and working with legacy code.'
                },
                {
                id: 2,
                jobTitle: 'Teaching Assistant for Introductory Computer Science',
                company: 'Dartmouth College',
                duration: 'March 2020 - June 2020',
                jobDescription: 'As a TA for introductory programming, I lead a group of students through weekly programming exercises, as well as helping students put together larger coding assignments for the first time. I led 3 hours of office hours per week and was responsible for grading the assignments of 6 students. This has improved my skills in Python as well as my general knowledge and understanding of computer science.'
                },
                {
                id: 3,
                jobTitle: 'Student Researcher',
                company: 'Dartmouth Digital History Initiative',
                duration: 'December 2019 - Present',
                jobDescription: 'Working to develop a Text Encoding Initiative schema and encoding transcripts of oral interviews for the DDHI, and working on developing software to analyze oral histories. Built a website in Flask and created a python script and database to facilitate coordinate reconciliation in our collected data. Received the Dartmouth Sophomore Scholars Grant for $1000 in two consecutive terms and the Dartmouth Junior Scholars Grant to pursue this research for the following year.'
                },
                {
                id: 4,
                jobTitle: 'Freshmen Trips Program Orientation Leader',
                company: 'Dartmouth College',
                duration: 'September 2019',
                jobDescription: 'Worked for Dartmouth College and completed first aid and wilderness safety training to lead a group of 8 incoming freshmen on a 5 day hike in the White Mountains. I led team bonding programs to facilitate the group in their transition to college.'
                },
                {
                id: 5,
                jobTitle: 'Peer Tutor',
                company: 'Dartmouth College',
                duration: '2018-Present',
                jobDescription: 'Working with the Academic Skills Center at Dartmouth College to provide tutoring to 1-5 students per term in multivariable calculus (MATH 008), introductory computer science (COSC 001), and introduction to object oriented programming (COSC 010).'
                },
                {
                id: 6,
                jobTitle: 'Customer Data Analyst',
                company: 'Wilson\'s Security',
                duration: '2015 - 2019',
                jobDescription: 'Worked on transitioning the company’s paper contracts and customer files to a computer based system. Also worked with customer queries on Sedona to correct previous mistakes and to update customer information throughout the entire company database. Worked with the customer service team to schedule technician appointments as well as constructing spreadsheets to facilitate with new company acquisitions.'
                },
                {
                id: 7,
                jobTitle: 'Web Development Intern',
                company: 'Dash Hudson',
                duration: 'October 2020 - December 2020',
                jobDescription: 'Pending completion...'
                },
            ]
        }
    },
    components: {
        'ExperienceCard': ExperienceCard,
    }
}
</script>
<style>
    li {
        display: inline-block;
    }
</style>