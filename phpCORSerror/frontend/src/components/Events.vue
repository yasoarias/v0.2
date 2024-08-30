<template>
  <div>
    <h2>Available Events</h2>
    <div v-if="events.length">
      <div v-for="event in events" :key="event.event_id" class="event-item">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p><strong>Date:</strong> {{ event.date }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <button @click="registerForEvent(event.event_id)">Register</button>
      </div>
    </div>
    <p v-else>No events available at the moment.</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [],
      message: "",
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost/api/getEvents.php");
      this.events = response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  },
  methods: {
    async registerForEvent(eventId) {
      try {
        const response = await axios.post(
          "http://localhost/api/registerEvent.php",
          {
            event_id: eventId,
          }
        );
        this.message =
          response.data.status === "success"
            ? "Successfully registered for the event."
            : "Registration failed.";
      } catch (error) {
        this.message = "Error occurred while registering.";
      }
    },
  },
};
</script>
