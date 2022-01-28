from flask import Flask, render_template, request
app = Flask(__name__)
app.config.from_object(__name__)


@app.route('/')
def welcome():
    return render_template('form.html')


@app.route('/showlist')
def welcome1():
    return render_template('donorlist.html')


if __name__ == '__main__':
    app.run(debug=True)
