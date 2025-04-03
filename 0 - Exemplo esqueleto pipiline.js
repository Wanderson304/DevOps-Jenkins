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
    }
}
