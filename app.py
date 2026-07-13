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

@app.route('/<path:path>')
def serve_spa(path):
    # If the request matches a real file in the dist folder (like a JS or CSS file), serve it
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    # Otherwise, always serve index.html so the SPA can handle the page URL internally
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
