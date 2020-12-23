<template>
    <div class="template">
        <img class="profile-pic" src="../../assets/img/headshot.jpg"/>
        <h5 class="name">Elizabeth (Edie) Wilson</h5>
        <div class="contact-card">
            <div class="display"><i @click="toggleEmail" class="fas fa-envelope-square contact"></i><p v-if="this.showEmail">ediewilson13@gmail.com</p></div>
            <div class="display"><i @click="togglePhone" class="fas fa-phone contact"></i><p v-if="this.showPhone">603-484-3709</p></div>
            <div class="display"><i @click="toggleAddress" class="fas fa-home contact"></i><p v-if="this.showAddress">4714 Hinman<br>Hanover, NH, 03755</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    
    data() {
        return {
            showEmail: true,
            showPhone: true,
            showAddress: true,

            school: "Dartmouth College",
            graduationYear: 2022,
            degree: "BA - Computer Science major, Environmental Science Minor",
            statement: "Computer science student-athlete at Dartmouth College. Looking for an internship in a software engineering or web development position to put my training to work in an exciting industry.",
        }
    },
    methods: {
        toggleEmail() {
            this.showEmail = !this.showEmail;
        },
        togglePhone() {
            this.showPhone = !this.showPhone;
        },
        toggleAddress() {
            this.showAddress = !this.showAddress;
        },
    }
}
</script>
<style lang="scss" scoped>
.contact-card {
    padding-left: 20%;
    padding-right: 20%;
    min-height: 170px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 195px;
    background-color: rgb(224,224,224);
    border-radius: 10%;
    margin: 10px;

    &:hover {

    }
}

.contact {
    padding-bottom: 4%;
    font-size: 3.2em;
}

.contact:hover{
    padding-top: 17%;
    padding-bottom: 4%;
    font-size: 3.7em;
    transition: 0.3s;
}

.profile-pic {
  max-height: 175px;
  border-radius: 100%;
  padding: 0 12px 12px 12px;
}

.name {
    margin: 8px, 0, 25px, 0;
}
</style>