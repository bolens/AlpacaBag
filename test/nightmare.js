var Nightmare = require("nightmare");

  // Nightmare test with default survey values
  new Nightmare({ show: true })
  // Visit home page
  .goto("PUT OUR HEROKU SITE HERE")
  // Click our get started button
  .click("#pack")
  // Waits until our forms our loaded and ready
  .wait("#name")
  // Fill out our name and email form
  .type("#name", "Panda Squad")
  .type("email", "PandaSquad@Hotmail.com")
  // Click our submit button
  .click("#submit")
  // Give it 5 seconds to load
  .wait(5000)
  // Take a screenshot of our destination card.
  .screenshot("destination.png")
  // End Test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });


  // Nightmare test with changed survey values
  new Nightmare({ show: true })
  // Visit home page
  .goto("PUT OUR HEROKU SITE HERE")
  // Click our get started button
  .click("#pack")
  // Waits until our forms our loaded and ready
  .wait("#name")
  // Fill out our name and email form
  .type("#name", "Panda Squad")
  .type("email", "PandaSquad@Hotmail.com")
  // Select new values for our survey
  .select("#Q1", [value = 3])
  .select("#Q2", [value = 1])
  .select("#Q3", [value = 4])
  .select("#Q4", [value = 2])
  .select("#Q5", [value = 1])
  .select("#Q6", [value = 2])
  .select("#Q7", [value = 4])
  .select("#Q8", [value = 5])
  .select("#Q9", [value = 2])
  .select("#Q10", [value = 1])
  .select("#Q11", [value = 2])
  // Click our submit button
  .click("#submit")
  // Give it 5 seconds to load
  .wait(5000)
  // Take a screenshot of our destination card.
  .screenshot("random-destination.png")
  // End Test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });


//   describe("Codecademy", function() {
//   // The default tests in mocha is 2 seconds.
//   // Extending it to 30 seconds to have time to load the pages
//
//   this.timeout(30000);
//   it("should send user to the catalog page", function(done) {
//     // ID for the login button.
//     Nightmare({ show: true })
//       .goto("https://codecademy.com")
//       // Click the catalog link
//       .click("a[href='/learn/all']")
//       // Evaluate the title
//       .evaluate(function() {
//         return document.title;
//       })
//       // Asset the title is as expected
//       .then(function(title) {
//         expect(title).to.equal("Catalog | Codecademy");
//         done();
//       });
//   });
//
//   it("should present a link to course catalog after login", function(done) {
//     new Nightmare({ show: true })
//       .goto("https://www.codecademy.com/login")
//       // Enter username.
//       .type("#user_login", "ResilD")
//       // Enter password.
//       .type("#login__user_password", "dummy*password")
//       // Click the login button
//       .click("#user_submit")
//       // Evaluate the following selector
//       .evaluate(function() {
//         // Assert the "learn" link can be found
//         return document.querySelector("a[href='/learn']");
//       })
//       .then(function(link) {
//         expect(link).to.not.equal(undefined);
//         done();
//       });
//   });
//
//   it("should throw an error for fun", function() {
//     throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
//   });
// });
