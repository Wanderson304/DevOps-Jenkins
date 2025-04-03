//Exemplo de um arquivo jenkisfile
//A extenção do arquivo não é .js coloquei apenas para ter uma formatação minima.

pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'echo "Teste step 1"'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh echo "Teste step 2"
            }
        }
        stage('Build Docker Image') {
            steps {
                sh echo "Teste step 3"
            }
        }
    }
}
