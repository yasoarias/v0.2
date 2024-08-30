<template>
  <div>
    <h2>Event List</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p>Date: {{ event.date }}</p>
        <p>Location: {{ event.location }}</p>
        <button @click="registerForEvent(event.id)">Register</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get(
          "http://localhost/ems-test/api/getEvents.php"
        );
        this.events = response.data; // Assuming the response is directly the events array
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    async registerForEvent(eventId) {
      try {
        await axios.post("http://localhost/ems-test/api/registerEvent.php", {
          event_id: eventId,
          user_id: 1, // This should be dynamic based on the logged-in user
        });
        alert("Successfully registered for the event");
      } catch (error) {
        console.error("Error registering for the event:", error);
        alert("Failed to register for the event");
      }
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>
