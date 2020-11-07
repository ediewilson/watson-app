<template>
    <div class="experience-card">
        <p></p>
        <p>{{ statement }}</p>
    </div>
</template>

<script>
export default {
    name: 'PersonalProfile',
    data() {
        return {
            school: "Dartmouth College",
            graduationYear: 2022,
            degree: "BA - Computer Science major, Environmental Science Minor",
            statement: "Computer science student-athlete at Dartmouth College. Looking for an internship in a software engineering or web development position to put my training to work in an exciting industry."
        }
    },
    methods: {
        
    }
}
</script>
<style>

</style>