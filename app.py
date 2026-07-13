from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder='209_OlympicsHiddenCosts/site',
    static_url_path='/'
)

@app.route('/Olympics')
def Olympics():
    file='image.png'
    return render_template('Olympics.html',file=file)

@app.route('/tab')
def tab():  # Changed from 'embed' to 'tab'
    return render_template('test_tableau.html')

@app.route('/')
def home():
    return app.send_static_file('index.html')

# Dynamically routes paths like /dashboard.html or /help.html
@app.route('/<path:url_path>')
def serve_static_page(url_path):
    return app.send_static_file(url_path)

if __name__ == '__main__':
    app.run()
