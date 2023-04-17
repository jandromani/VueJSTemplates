<!-- Plantilla 25/100: Calendarios VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="calendar">
    <div class="calendar-header">
      <button class="calendar-prev" @click="prevMonth">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="calendar-title">{{ monthName }} {{ year }}</div>
      <button class="calendar-next" @click="nextMonth">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div class="calendar-weekdays">
      <div class="calendar-weekday" v-for="day in days">{{ day }}</div>
    </div>
    <div class="calendar-days">
      <div v-for="(day, index) in daysInMonth" :key="index" class="calendar-day" :class="{ active: isSelected(day), today: isToday(day) }" @click="selectDate(day)">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth();
    },
    monthName() {
      return this.months[this.month];
    },
    daysInMonth() {
      const lastDay = new Date(this.year, this.month + 1, 0).getDate();
      return Array.from({ length: lastDay }, (_, i) => i + 1);
    },
    days() {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    },
  },
  methods: {
    isToday(day) {
      const today = new Date();
      return this.year === today.getFullYear() && this.month === today.getMonth() && day === today.getDate();
    },
    isSelected(day) {
      return this.selectedDate && this.year === this.selectedDate.getFullYear() && this.month === this.selectedDate.getMonth() && day === this.selectedDate.getDate();
    },
    selectDate(day) {
      const selectedDate = new Date(this.year, this.month, day);
      this.$emit('select', selectedDate);
    },
    prevMonth() {
      this.date = new Date(this.year, this.month - 1);
    },
    nextMonth() {
      this.date = new Date(this.year, this.month + 1);
    },
  },
  props: {
    selectedDate: {
      type: Date,
      default: null,
    },
  },
  watch: {
    selectedDate(newVal) {
      if (newVal) {
        this.date = new Date(newVal.getFullYear(), newVal.getMonth());
      }
    },
  },
  mounted() {
    if (this.selectedDate) {
      this.date = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth());
    }
  },
  computed: {
    months() {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    },
  },
};
</script>

<style scoped>
.calendar {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content
