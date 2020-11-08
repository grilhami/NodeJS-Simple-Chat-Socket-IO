pipeline {
    agent any 
    stages {
        stage('build') {
            steps {
                npm install
            }
        }

        stage('deploy') {
            steps {
                pm2 start index.js
            }
        }
    }
}