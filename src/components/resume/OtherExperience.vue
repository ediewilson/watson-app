<template>
    <div>
        <h4>Other Experiences</h4>
        <ul>
             <li class="experience-card" v-for="item in otherExperiences" :key="item.id">
            {{ item.jobTitle }}
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OtherExperience',
    data() {
        return {
            otherExperiences: [
                {
                id: 0,
                jobTitle: 'Director of Chapter Events at Alpha Phi Sorority',
                jobDescription: 'hi'
                },
                {
                id: 1,
                jobTitle: 'Sports columnist for The Dartmouth',
                jobDescription: 'hi'
                },
                {
                id: 2,
                jobTitle: 'Division 1 track athlete',
                jobDescription: 'hi'
                },
                {
                id: 3,
                jobTitle: 'Graduate of the Management and Leadership Development Program at Dartmouth College',
                jobDescription: 'hi'
                },
                {
                id: 4,
                jobTitle: 'Member of the Dartmouth Entrepreneurship LLC',
                jobDescription: 'hi'
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>
<style>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  padding: 0 12px 0 12px;
  margin: 0 12px 0 12px;
}
li {
  align-self: center;
}
</style>