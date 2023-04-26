# About the project
This is a working application for internship assignment.

# TECNOLOGIES USED :-
1. Python-Flask
2. SQLite Database (it is in the database folder in the backend folder containing data)
3. Vue-JS (for frontend)

# Python Libraries used:-
1. flask, flask-sqlalchemy
2. flask=security, flask-restful etc.

## Prerequisites

1. Python 3.7.9
3. WSL on Device or Linux system.
4. Visual Studio Code
5. Virtualenv
6. DBBrowser for SQLITE Database: for viewing database and observing changes in it.

## Run the application

(A) For setting the virtual environment :-
1. first change directory by "cd backend", then create virtualenv "pip install virtualenv".
2. After this create virtualenv venv by command "virtualenv venv".
3. Enable the venv by command "source venv/bin/activate" and then install libraries by "pip -r requirements.txt".

(B) For running Backend (folder backend) :-
1. Open WSL Terminal in vscode , then chande directory to backend by command "cd backend".
2. Then enable virtual environment by command "source /bin/venv/activate".
3. Next run the script file local-run.sh for running background server.

(C) For running Frontend (folder frontend) :-
1. Open WSL Terminal in vscode , then chande directory to backend by command "cd frontend".
2. Run it by installing live-server by command "npm live-server".
3. After it run command 'live-server' for running frontend server.
