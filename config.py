import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "7bf27771")
    SQLALCHEMY_DATABASE_URI = os.getenv("http://www.omdbapi.com/?i=tt3896198&apikey=7bf27771", "sqlite:///database.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    OMDB_API_KEY = os.getenv("OMDB_API_KEY", "7bf27771")
