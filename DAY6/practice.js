/*Question 1: The Flight Booking Data Cleaner

**Problem Statement:**

You are given a list of raw flight strings from a travel agency's database. 
The data is unformatted and needs to be standardized into objects for a front-end display.

**Requirements:**
 1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
 2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
 3. **Validation & Coercion:**
   * The price must be explicitly converted to a **Number**.
   * If the price is not a valid number or is missing, set the price to 0.
 4. **Filtering:** Create a new array containing only flights where the price is between 
 **$100 and $500** (inclusive).
 5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
 6. **Return:** Return the final array as a **JSON string**.

**Input Data Example:**
```javascript
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"

];*/

const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

const cleanedFlights = rawFlights
  .map(flight => {

    // Split route and price
    const [route, rawPrice] = flight.split(":");

    // Split from and to cities
    const [from, to] = route.split("-");

    // Convert price into number
    let price = Number(rawPrice);

    // If invalid, make it 0
    if (isNaN(price)) {
      price = 0;
    }

    // Create object
    return {
      from,
      to,
      price
    };
  })

  // Keep only flights between 100 and 500
  .filter(flight => flight.price >= 100 && flight.price <= 500)

  // Sort cheapest first
  .sort((a, b) => a.price - b.price);

// Convert into JSON string
const result = JSON.stringify(cleanedFlights, null, 2);

console.log(result);


/* Question 2: The E-Commerce Discount Applicator
**Problem Statement:**
You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) 
that calculates which items qualify for a specific discount.
**Requirements:**

 1. **The Pipeline:** The applyPromo function should accept an array of product objects and a callback function.
 2. **The Callback (isEligible):** You must define a separate callback function to be passed in. This callback should return 
 true only if a product belongs to the **"Electronics"** category **AND** has a price greater than **$200**.
 3. **Transformation:**
   * Use the callback to identify eligible items.
   * For those items, reduce their price by **10%**.
   * Add a new property to **all** items in the array called isDiscounted (set to true for eligible items and false for others).
 4. **Final Summary:** Once the processing is complete, use a **Template Literal**
  to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
 5. **Delayed Return:
 ** Wrap the final return statement in a setTimeout of **1000ms** to simulate a server calculation, returning the updated cart array.

**Input Data Example:**

```javascript

const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
]; */

const cart = [

  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];


// Function to check if product is eligible
function isEligible(product) {

  return (
    product.category === "Electronics" &&
    product.price > 200
  );

}

// Main function
function applyPromo(cart, promoCallback) {

  // Total savings starts from 0
  let totalSavings = 0;

  // Discounted items count starts from 0
  let discountedCount = 0;


  // Check every product one by one
  const updatedCart = cart.map(product => {

    // Check if product is eligible
    if (promoCallback(product)) {

      // Calculate 10% discount
      const discount = product.price * 0.10;

      // Add discount into total savings
      totalSavings += discount;

      // Increase discounted product count
      discountedCount++;

      // Return updated product
      return {

        // Copy old product data
        ...product,

        // Update price after discount
        price: product.price - discount,

        // Mark as discounted
        isDiscounted: true

      };

    }

    // For products that are NOT eligible
    return {

      // Copy old product data
      ...product,

      // Mark as not discounted
      isDiscounted: false

    };

  });


  // Print final summary
  console.log(
    `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`
  );


  // Wait 1 second before showing updated cart
  setTimeout(() => {

    console.log(updatedCart);

  }, 1000);

}


// Run the function
applyPromo(cart, isEligible);


/*Question 3: The Movie Stream Analytics

**Problem Statement:**

You are given an array of raw strings representing movie data from a streaming platform.
 You need to convert this raw data into a structured format to identify top-performing content.
**Requirements:**

 1. Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT".
 2. Convert each string into an object with properties for name, genre, and views.
 3. Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0.
 4. Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views.
 5. Sort the final list by views in descending order (highest views first).
 6. Return the final array as a JSON string.

**Input Data Example:**

```javascript

const rawMovies = [

  "Inception|Sci-Fi|12000",

  "The Lion King|Animation|8000",

  "Mad Max|Action|invalid",

  "The Matrix|Sci-Fi|15000",

  "Gladiator|Action|4500"

];

```*/

const rawMovies = [

  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000"
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];


const cleanedMovies = rawMovies

  // Go through every movie
  .map(movie => {

    // Split movie data
    const [name, genre, rawViews] = movie.split("|");

    // Convert views into number
    let views = Number(rawViews);

    // Handle invalid data
    if (isNaN(views)) {
      views = 0;
    }

    // Create object
    return {
      name,
      genre,
      views
    };

  })

  // Keep only matching movies
  .filter(movie =>

    (movie.genre === "Action" ||
     movie.genre === "Sci-Fi") &&

     movie.views > 5000
  )

  // Highest views first
  .sort((a, b) => b.views - a.views);


// Convert into JSON string
const result = JSON.stringify(cleanedMovies, null, 2);


// Print final result
console.log(result);


/* Question 4: The Automated Payroll Processor

**Problem Statement:**

You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback)
 that applies tax deductions and calculates final payouts.
**Requirements:**

 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.
 2. The calculatePayroll function should use this callback to process each employee.
 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".
 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."
 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.

**Input Data Example:**

```javascript

const employees = [

  { id: 101, name: "Alice", salary: 6000 },

  { id: 102, name: "Bob", salary: 3500 },

  { id: 103, name: "Charlie", salary: 5200 }

];
*/

 
 const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];


// Tax callback function
function taxLogic(employee) {

  // Salary greater than 5000
  if (employee.salary > 5000) {
    return 0.20;
  }

  // Otherwise
  return 0.10;

}


// Main function
function calculatePayroll(employees, taxCallback) {

  // Start payout from 0
  let totalNetPayout = 0;


  // Process every employee
  const processedEmployees = employees.map(employee => {

    // Get tax rate
    const taxRate = taxCallback(employee);

    // Calculate tax
    const tax = employee.salary * taxRate;

    // Calculate net salary
    const netSalary = employee.salary - tax;

    // Add into total payout
    totalNetPayout += netSalary;

    // Decide employee status
    const status =
      netSalary > 4000 ? "Premium" : "Standard";


    // Return updated employee
    return {

      // Copy old employee data
      ...employee,

      // Add new properties
      tax,
      netSalary,
      status

    };

  });


  // Print final summary
  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
  );


  // Wait 2 seconds before showing result
  setTimeout(() => {

    console.log(processedEmployees);

  }, 2000);

}


// Run the function
calculatePayroll(employees, taxLogic);