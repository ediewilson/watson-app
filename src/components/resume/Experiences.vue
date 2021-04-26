<template>
    <div class="experiences">
        <h2>My Experiences...</h2>
        <ul> 
            <li v-for="item in experiences" :key="item.id">
                <ExperienceCard
                    class="experience-card"
                    :item="item"
                />
            </li>
        </ul>
    </div>
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
                jobTitle: 'Web Development Intern',
                company: 'Dash Hudson',
                duration: 'October 2020 - December 2020',
                jobDescription: 'Worked on front and back end projects, which included working with database, adding permissions for features, front end design, and adding activity timeouts. At Dash Hudson, I had lots of responsibility in learning to work without QEs and write detailed, effective, full coverage tests. Also gained experience doing code reviews.',
                logo: require('../../assets/img/dh.png'),
                website: 'https://dashhudson.com/',
                skills: ['Front end design', 'SCSS', 'Fullstack development', 'Databases', 'Component testing', 'Agile development', 'Scrums / Being a scrum master'],
                languages: ['Vue', 'Flask', 'Javascript', 'SQL'],
                accomplishments: ['Implemented a timeout on the admin site', 'Created a new calendar component for web application', 'Resolved dev support tickets', 'Worked on creating facebook analytics dashboard in front end and back end', 'Wrote full coverage tests for components'],
                },
                {
                id: 1,
                jobTitle: 'Software Engineering Intern',
                company: 'Alarm.com',
                duration: 'June 2020 - September 2020',
                jobDescription: 'Worked on the home automation team where I was singlehandedly responsible for the design and launch of frontend and backend components for a smart air conditioning feature. Worked in C# and SQL to create functionality and testing for the feature, as well as ASPX to create webpage compatibility. Gained experience in object oriented programming, databases, and working with legacy code.',
                logo: require('../../assets/img/adc.png'),
                website: 'https://www.alarm.com/',
                skills: ['End to end testing with hardware', 'Unit testing'],
                languages: ['C#', 'SQL', 'ASPX'],
                accomplishments: ['Wrote a smart thermostat feature', 'Modified permissions for smart thermostat feauture', 'Added compatibility for smart thermostat feature on website and email/text notifications'],
                },
                {
                id: 2,
                jobTitle: 'Web Development Assistant',
                company: 'PAN Magazine',
                duration: 'September 2020 - Present',
                jobDescription: 'Responsible for the maintenance and improvement of pan-mag.com. Worked on adding website analytics, implementing a new website theme, and getting an SSL certificate for the website, as of updating this CV. Future tasks include making the site even more user friendly and improving SEO.',
                logo: require('../../assets/img/panmag.png'),
                website: 'https://pan-mag.com/',
                skills: ['Project management', 'Managing a team', 'Wordpress', 'Website management'],
                languages: ['Javascript'],
                accomplishments: ['Obtained an SSL Certificate for the site and set it up', 'Significantly reduced bounce rate of the site', 'Changed wordpress themes'],
                },
                {
                id: 3,
                jobTitle: 'Teaching Assistant for Introductory Computer Science',
                company: 'Dartmouth College',
                duration: 'March 2020 - June 2021',
                jobDescription: 'As a TA for introductory programming, I lead a group of students through weekly programming exercises, as well as helping students put together larger coding assignments for the first time. I led 3 hours of office hours per week and was responsible for grading the assignments of 6 students. This has improved my skills in Python as well as my general knowledge and understanding of computer science.',
                logo: require('../../assets/img/dartmouth.png'),
                website: 'https://web.cs.dartmouth.edu/',
                skills: ['Managing a group', 'Debugging and code reviewing'],
                languages: ['Python'],
                accomplishments: ['The section that I lead all got 4.0s in the class!'],
                },
                {
                id: 4,
                jobTitle: 'Student Researcher',
                company: 'Dartmouth Digital History Initiative',
                duration: 'December 2019 - Present',
                jobDescription: 'Working to develop a Text Encoding Initiative schema and encoding transcripts of oral interviews for the DDHI, and working on developing software to analyze oral histories. Built a website in Flask and created a python script and database to facilitate coordinate reconciliation in our collected data. Received the Dartmouth Sophomore Scholars Grant for $1000 in two consecutive terms and the Dartmouth Junior Scholars Grant to pursue this research for the following year.',
                logo: require('../../assets/img/ddhi.png'),
                website: 'https://ddhi.dartmouth.edu/',
                skills: ['Group work', 'TEI', 'Named Entity Linking', 'Using Wikidata', 'Working with oral histories'],
                languages: ['Flask', 'Python', 'TEI/HTML tagging'],
                accomplishments: ['Worked with a team to help develop a new way of analyzing and visualizing oral histories'],
                },
                {
                id: 5,
                jobTitle: 'Peer Tutor',
                company: 'Dartmouth College',
                duration: '2018-Present',
                jobDescription: 'Working with the Academic Skills Center at Dartmouth College to provide tutoring to 1-5 students per term in multivariable calculus (MATH 008), introductory computer science (COSC 001), and introduction to object oriented programming (COSC 010).',
                logo: require('../../assets/img/dartmouth.png'),
                website: 'https://students.dartmouth.edu/academic-skills/',
                skills: ['Tutoring', 'Code / work reviews'],
                languages: ['Python', 'Java'],
                accomplishments: ['Helped multiple students improve their standing in a class'],
                },
                {
                id: 6,
                jobTitle: 'Customer Data Analyst',
                company: 'Wilsons Security',
                duration: '2015 - 2019',
                jobDescription: 'Worked on transitioning the company’s paper contracts and customer files to a computer based system. Also worked with customer queries on Sedona to correct previous mistakes and to update customer information throughout the entire company database. Worked with the customer service team to schedule technician appointments as well as constructing spreadsheets to facilitate with new company acquisitions.',
                logo: require('../../assets/img/wilsons.png'),
                website: 'https://www.wilsonssecurity.ca/',
                skills: ['Excel', 'Sedona Office', 'Customer service'],
                languages: ['SQL'],
                accomplishments: ['Migrated two company aquisitions into our database from physical customer files', 'Organized paper customer filing system'],
                },
            ]
        }
    },
    components: {
        'ExperienceCard': ExperienceCard,
    }
}
</script>
<style lang="scss" scoped>
.experiences {
    margin-top: 20px;
}

ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: 5%;
    margin-left: 5%;

    justify-content: center;
    align-content: center;
    list-style-type: none;
    padding: 0 12px 0 12px;
    margin: 0 12px 0 12px;
}
</style>