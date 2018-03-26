var Nightmare = require("nightmare");

  // Nightmare test with default survey values
  new Nightmare({ show: true })
  // Visit home page
  .goto("http://localhost:3000")
  // Click our get started button
  .click("#pack")
  // Waits until our forms our loaded and ready
  .wait("#name")
  // Fill out our name and email form
  .type("#name", "Panda Squad")
  .type("#email", "PandaSquad@Hotmail.com")
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
  .goto("http://localhost:3000")
  // Click our get started button
  .click("#pack")
  // Waits until our forms our loaded and ready
  .wait("#name")
  // Fill out our name and email form
  .type("#name", "Panda Squad")
  .type("#email", "PandaSquad@Hotmail.com")
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
  // Allow 3 seconds to see our new values
  .wait(3000)
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
