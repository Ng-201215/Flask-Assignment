class Config(object):
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///../databases/userdata.sqlite3'
    SECRET_KEY = "thisissectorarea"
    SECURITY_PASSWORD_SALT = "thisissugarandsalt"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_ENABLED = False
    SECURITY_TOKEN_AUTHENTICATION_HEADER = 'Authentication-Token'
    SECURITY_EMAIL_VALIDATOR_ARGS = { "check_deliverability" : False }
