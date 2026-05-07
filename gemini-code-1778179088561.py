from flask import Flask, render_template

app = Flask(__name__)

# Rota principal (Home do seu site educativo)
@app.route('/')
def index():
    # Aqui você poderia buscar dados de um banco de dados no futuro
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)