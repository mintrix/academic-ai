# ---------------- SQLite DB Initialization ----------------
# Optional: init_db.py (executed once to create the database)

import sqlite3

conn = sqlite3.connect('academicia.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    grades TEXT,
    goals TEXT,
    feedback TEXT,
    data_creacao TEXT
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rol TEXT,
    email TEXT UNIQUE,
    nome TEXT,
    password TEXT,
    data_creacao TEXT
)
''')

conn.commit()
conn.close()
