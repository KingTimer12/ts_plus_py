import os
import subprocess

cwd = os.getcwd()
PATH = os.path.join(os.getcwd(), '..', '..', 'build')

def create_restapi(project: str):
    project_path = os.path.join(PATH, project)
    if not os.path.exists(project_path):
        os.makedirs(project_path)
    try:
        # Mudar para o diretório especificado
        os.chdir(project_path)
        subprocess.run(['pnpm', 'init', '--y'], capture_output=True, text=True)
        subprocess.run(['pnpm', 'i', 'express'], capture_output=True, text=True)

        rest_code = f"""
const express = require('express');
const app = express();
const port = 3000;

// Rota de exemplo
app.get('/', (req, res) => {{
  res.send('Olá, mundo!');
}});

// Inicia o servidor
app.listen(port, () => {{
  console.log(`Servidor {project} rodando em http://localhost:${{port}}`);
}});
"""

        path_file = os.path.join(project_path, 'index.js')
        with open(path_file, 'w', encoding='utf-8') as file:
            file.write(rest_code)
    finally:
        os.chdir(cwd)