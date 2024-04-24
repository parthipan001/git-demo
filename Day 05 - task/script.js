//Class Movie

class Movie {
    
    constructor(title, studio, rating = "PG") {
      this.title = title; 
      this.studio = studio; 
      this.rating = rating; 
    }
  
    
    static getPG(movies) {
      
      return movies.filter((movie) => movie.rating === "PG");
    }
  }
  
  
  
  
  const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
  const movie2 = new Movie("Finding Nemo", "Pixar", "PG");
  const movie3 = new Movie("The Matrix", "Warner Bros.", "R");
  const movie4 = new Movie("Toy Story", "Pixar", "G");
  
  
  const movieArray = [movie1, movie2, movie3, movie4];
  
  
  const pgMovies = Movie.getPG(movieArray);
  
  console.log("PG-rated movies:", pgMovies); 
  
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log("Casino Royale movie:", casinoRoyale);


//Class circle

class Circle {
    
    constructor(radius = 1.0, color = "red") { 
      this.radius = radius;
      this.color = color;
    }
  
    
    getRadius() {
      return this.radius;
    }
  
    
    setRadius(newRadius) {
      this.radius = newRadius; 
    }
  
    
    getColor() {
      return this.color;
    }
  
    
    setColor(newColor) {
      this.color = newColor; 
    }
  
    
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    
    getArea() {
      return Math.PI * this.radius * this.radius; 
    }
  
    
    getCircumference() {
      return 2 * Math.PI * this.radius; 
    }
  }
  
  
  const c1 = new Circle(); 
  console.log(c1.toString()); 
  
  const c2 = new Circle(5); 
  console.log(c2.toString()); 
  
  const c3 = new Circle(10, "blue"); 
  console.log(c3.toString()); 
  
  console.log("Radius of c3:", c3.getRadius()); 
  c3.setRadius(12); 
  console.log("Updated radius of c3:", c3.getRadius()); 
  
  console.log("Color of c3:", c3.getColor()); 
  c3.setColor("green"); 
  console.log("Updated color of c3:", c3.getColor()); 
  
  console.log("Area of c3:", c3.getArea()); 
  console.log("Circumference of c3:", c3.getCircumference());


// Class Person

class Person {
    
    constructor(firstName, lastName, age, gender, address) {
      this.firstName = firstName; 
      this.lastName = lastName; 
      this.age = age; 
      this.gender = gender; 
      this.address = address; 
    }
  
    
    getFullName() {
      return `${this.firstName} ${this.lastName}`; 
    }
  
    
    getAge() {
      return this.age;
    }
  
    
    getGender() {
      return this.gender;
    }
  
    
    getAddress() {
      return this.address;
    }
  
    
    setAddress(newAddress) {
      this.address = newAddress; 
    }
  
    
    toString() {
      return `Person[Full Name=${this.getFullName()}, Age=${this.age}, Gender=${this.gender}, Address=${this.address}]`;
    }
  }
  
  
  const person1 = new Person("John", "Doe", 30, "Male", "123 Main St, Anytown, USA");
  console.log(person1.toString()); 
  
  const person2 = new Person("Jane", "Smith", 25, "Female", "456 Elm St, Othertown, USA");
  console.log(person2.toString()); 
  
  
  person1.setAddress("789 Oak St, Newcity, USA");
  console.log("Updated Address for Person 1:", person1.getAddress());

//Class Uber

class Uber {
         
    constructor(Distance_in_km, Price_per_km){

    this.Distance_in_km = Distance_in_km;
    this.Price_per_km = Price_per_km;
    }

    calculate_uber() {

        return this.Distance_in_km*this.Price_per_km;
    }


}

var U1 = new Uber(10,8);
console.log(U1.calculate_uber());

