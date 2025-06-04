import sqlite3

DB_NAME = 'academicia.db'

def conexion():
    return sqlite3.connect(DB_NAME)

def init_db():
    conn = conexion()
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
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS historicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            metas TEXT ,
            feedback TEXT,
            analysisResult TEXT,
            data_creacao TEXT
        )
    ''')
    conn.commit()
    conn.close()

def insert_student(nome, grades, goals, feedback, data_creacao):
    conn = conexion()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO students (nome, grades, goals, feedback, data_creacao) VALUES (?, ?, ?, ?, ?)",
        (nome, grades, goals, feedback, data_creacao)
    )
    conn.commit()
    conn.close()

def get_all_students():
    conn = conexion()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")
    data = cursor.fetchall()
    conn.close()
    return data

def insert_user(rol, email, nome, password, data_creacao):
    conn = conexion()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (rol, email, nome, password, data_creacao) VALUES (?, ?, ?, ?, ?)",
        (rol, email, nome, password, data_creacao)
    )
    conn.commit()
    conn.close()

def get_all_users():
    conn = conexion()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    data = cursor.fetchall()
    conn.close()
    return data
