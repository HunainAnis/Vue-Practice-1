const app = Vue.createApp({
  //   template: "<h1>Hello {{firstName}}</h1>",
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      const [theUser] = results;
      this.firstName = theUser.name.first;
      this.lastName = theUser.name.last;
      this.email = theUser.email;
      this.picture = theUser.picture.large;
      this.gender = theUser.gender;
      console.log(results);
    },
  },
});

app.mount("#app");
