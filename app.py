from flask import Flask, render_template
import os

app = Flask(
    __name__,
    static_folder=os.path.abspath('209_OlympicsHiddenCosts/site'),
)

@app.route('/')
def Olympics():
    file='image.png'
    return render_template('Olympics.html',file=file)

@app.route('/tab')
def tab():  # Changed from 'embed' to 'tab'
    return render_template('test_tableau.html')


if __name__ == '__main__':
    app.run()
