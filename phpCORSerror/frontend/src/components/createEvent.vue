<template>
  <div>
    <h2>Create Event</h2>
    <form @submit.prevent="createEvent">
      <input v-model="title" placeholder="Event Title" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <input type="date" v-model="date" />
      <input v-model="location" placeholder="Location" />
      <button type="submit">Create Event</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      description: "",
      date: "",
      location: "",
      message: "",
    };
  },
  methods: {
    async createEvent() {
      try {
        const response = await axios.post(
          "http://localhost/api/createEvent.php",
          {
            title: this.title,
            description: this.description,
            date: this.date,
            location: this.location,
          }
        );
        this.message =
          response.data.status === "success"
            ? "Event created successfully."
            : "Failed to create event.";
      } catch (error) {
        this.message = "Error occurred while creating the event.";
      }
    },
  },
};
</script>
