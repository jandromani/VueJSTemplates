<!-- Plantilla 73/100 TeamSection VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <section class="team-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ title }}</h2>
          <hr class="hr-primary">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="team-member">
            <img :src="members[0].image" class="img-fluid rounded-circle" alt="">
            <h4>{{ members[0].name }}</h4>
            <p class="text-muted">{{ members[0].title }}</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-member">
            <img :src="members[1].image" class="img-fluid rounded-circle" alt="">
            <h4>{{ members[1].name }}</h4>
            <p class="text-muted">{{ members[1].title }}</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="team-member">
            <img :src="members[2].image" class="img-fluid rounded-circle" alt="">
            <h4>{{ members[2].name }}</h4>
            <p class="text-muted">{{ members[2].title }}</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',
  props: {
    title: {
      type: String,
      default: 'Our Team'
    },
    members: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
 


