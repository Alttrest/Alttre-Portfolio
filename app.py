from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    print("🚀 Portfolyo Başlatılıyor... http://127.0.0.1:5000 adresine git!")
    app.run(debug=True, host='0.0.0.0', port=5000)
