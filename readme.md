# Movie Tracker

A Flask web application that allows users to search for movies, create watchlists, and track their watched movies using the OMDB API.

## Features

- User authentication (register/login/logout)
- Movie search using OMDB API
- Personal watchlist management
- Mark movies as watched/unwatched
- Responsive design using Bootstrap

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd movie-tracker
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

3. Install required packages:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory by duplicating the `.env.example` file:

```bash
cp .env.example .env
```

5. Fill in your OMDB API key in the `.env` file:

```
SECRET_KEY=YOUR_SECRET_KEY_HERE
OMDB_API_KEY=YOUR_OMDB_API_KEY_HERE
```

Note: You can get an OMDB API key from [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

## Database Setup

The application uses SQLite as its database. To initialize the database:

```bash
python initdb.py
```

## Running the Application

1. Make sure your virtual environment is activated
2. Run the Flask application:

```bash
flask run --host=0.0.0.0 --port=5000 # or any other available port
```

3. Open your web browser and navigate to `http://localhost:5000`

## Project Structure

```
movie-tracker/
├── app.py
├── routes.py
├── models.py
├── initdb.py
├── forms.py
├── requirements.txt
├── .env
├── .env.example
├── static/
│   └── style.css
│   └── script.js
└── templates/
    ├── base.html
    ├── login.html
    ├── profile.html
    ├── register.html
    ├── search.html
    └── watchlist.html
```

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Flask](https://flask.palletsprojects.com/)
- [OMDB API](https://www.omdbapi.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Jinja](https://jinja.palletsprojects.com/)
