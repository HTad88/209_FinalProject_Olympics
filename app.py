from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def Olympics():
    file='about9.jpg'
    return render_template('Olympics.html',file=file)

if __name__ == '__main__':
    app.run()
