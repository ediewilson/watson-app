<template>
    <div class="contact-card">
        <p>Elizabeth (Edie) Wilson</p>
        <i v-on:click="toggleEmail" class="fas fa-envelope-square"></i><p v-if="this.showEmail">ediewilson13@gmail.com</p>
        <i v-on:click="togglePhone" class="fas fa-phone"></i><p v-if="this.showPhone">603-484-3709</p>
        <i  v-on:click="toggleAddress" class="fas fa-home"></i><p v-if="this.showAddress">4714 Hinman<br>Hanover, NH, 03755<br>United States</p>
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
<style>

</style>