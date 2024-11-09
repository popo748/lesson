<template>
    <h2>Select user role</h2>
            <v-btn @click="setUserAndRedirect('admin', '/middleware/admin')">Admin</v-btn>
        
            <v-btn @click="setUserAndRedirect('premiumUser', '/middleware/premiumuser')">Premium User</v-btn>

            <v-btn @click="setUserAndRedirect('regularUser', '/middleware/regularUser')">Regular User</v-btn>
       
   

  
</template>
<script>

    export default {
  methods: {
    setUserAndRedirect(role, path) {
        //must be the same key name you set in getItem 'roles' then the role will be the data you declared to the "roles" key'
      localStorage.setItem('roles', role);
        const baseUrl = window.location.origin;
        window.location.href = baseUrl + path; 
    }
  }
};



</script>