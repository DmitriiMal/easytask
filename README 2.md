## Table of Contents

- [About Project](#about-project)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Views](#views)
- [Routes](#routes)
- [PHP Functions](#php-functions)
  - [Services Functions](#services-functions)
  - [EventRequest Functions](#eventrequest-functions)
  - [Controller Functions](#controller-functions)
- [JavaScript Functions](#javascript-functions)

## About Project

This project involves developing a web application using the Laravel framework, designed specifically for managing event venues in German-speaking regions. The key components of the project include:

- Administrative Interface for Venues. CRUD Operations: Create, Read, Update, Delete functionalities for managing event venues.

- Detail View for Venues.

  - Accessible via a link from the list of all venues.
  - Provides a organized display of all venue details.
  - Includes a Google Maps integration to display the venue's location.

- An API to fetch venue details in JSON format.

## Built With

<p align="center">
    <a href="https://angular.dev/" target="_blank"><img src="https://img.shields.io/badge/Angular-%23E90463.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular"></a>
    <a href="https://www.w3schools.com/css/" target="_blank"><img src="https://img.shields.io/badge/css-%231A6FB4.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://jquery.com" target="_blank"><img src="https://img.shields.io/badge/html-%23E75E24.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html5"></a>
  
  
</p>

## Installation

To get a copy of this project up and running on your local machine, follow these simple steps.

1. **Clone the repository**:
   ```sh
   git clone https://github.com/DmitriiMal/laravel-event-venues.git
   ```
2. **Install dependencies**:
   ```sh
   composer install
   npm install
   ```
3. **Set up the environment**:
   - Rename `.env.example` to `.env`.
   - Update your `.env` file with your database and other configurations, as well as GOOGLE_MAPS_API_KEY.
4. **Generate application key**:
   ```sh
   php artisan key:generate
   ```
5. **Run migrations**:
   ```sh
   php artisan migrate
   ```

## Usage

To start the development server, run:

```sh
php artisan serve
```

Visit http://localhost:8000 in your browser to see the application in action.

## Views

**index.blade.php**

The main view that displays a table of event venues and includes a modal for viewing and editing details.

## Routes

**web.php**\
_routes/web.php_

- **Route::get('/')** - Loads the main index view.

**api.php**\
_routes/api.php_

- **Route::get('/eventsRoute')** - Returns a list of all venues.
- **Route::get('/eventDetailsRoute/{id}')** - Returns details of a specific event venue.
- **Route::post('/createEventRoute')** - Creates a new event venue.
- **Route::put('/updateEventRoute')** - Updates an event venue.
- **Route::delete('/deleteEventRoute')** - Deletes an event venue.

## PHP Functions

### Services Functions

**GeoService.php**\
_app/Services/GeoService.php_

- **getLocation(zip, city, street, house_number)**
  - Fetches the geolocation coordinates for a given address using a geocoding API.\
    Retuns an array with latitude and longitude.

### EventRequest Functions

_app/Http/Requests/EventRequest.php_

- **rules()**

  - Returns the validation rules that apply to the request.

- **messages()**

  - Returns custom messages for validation errors.

- **sanitize(array $data)**

  - Sanitizes the input data by applying various filters to ensure that the data is clean and safe to use. This function takes an array of data and returns a sanitized version of it.

### Controller Functions

**Controller.php**\
_app/Http/Controllers/Controller.php_

- **index()**

  - Returns the main view of the application.

- **events()**

  - Retrieves all event venues and returns them as a JSON response, filtering the data to include only `id`, `name`, `city`, and `availability`.

- **eventDetails($id)**

  - Retrieves details for a specific venue by its `id` and returns them as a JSON response.

- **createEvent(Request $request)**

  - Creates a new venue with data from the request, calls getLocation function to get the geolocation coordinates and saves it to the database. Returns a JSON response indicating success.

- **updateEvent(Request $request)**

  - Updates an existing venue with data from the request, calls getLocation function if the address was changed. Returns a JSON response indicating success.

- **deleteEvent(Request $request)**
  - Deletes an event venue by its `id`. Returns a JSON response indicating success.

## JavaScript Functions

**ajax.js**\
_public/js/ajax.js_

- **getEvents()**

  - Fetches all event venues and updates the table in the view.

- **toggleForm()**

  - Toggles between showing the venue details and the form.

- **hideForm()**

  - Hides the form and shows the venue details.

- **showCreateForm()**

  - Prepares the modal for creating a new event venue by clearing the form and showing it.

- **loadDetails(id)**

  - Loads the details of an event venue into the modal for viewing or editing.

- **checkValidationMessage()**

  - Displays all receiving messages from EventRequest.php if the validation didn't pass\
    If there are no errors - hides error messages and show static labels

- **addHttps()**

  - Takes the input value from the website input, adds "https://" if it's missing, and updates hidden input field with modified URL.

- **sanitizePhone()**

  - Sanitizes the input to retain only digits, +, (, ), and /, allowing + only at the beginning. Updates the phone input field immediately.

**map.js**\
_public/js/map.js_

- **initMap(location)**
  - Initializes the Google Map centered on the provided location.
