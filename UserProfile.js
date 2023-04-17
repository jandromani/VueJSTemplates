<!-- Plantilla 29/100 User Profile VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <img :src="user.picture" :alt="user.name" class="img-fluid rounded-circle" />
        </div>
        <div class="col-md-8">
          <h4 class="card-title">{{user.name}}</h4>
          <p class="card-text">{{user.bio}}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Email:</strong> {{user.email}}</li>
            <li class="list-group-item"><strong>Teléfono:</strong> {{user.phone}}</li>
            <li class="list-group-item"><strong>Dirección:</strong> {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}, {{user.address.zipcode}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-body {
  padding: 15px;
}

.card-title {
  margin-top: 0;
  margin-bottom: 10px;
}

.list-group-item {
  border: none;
}
</style>
