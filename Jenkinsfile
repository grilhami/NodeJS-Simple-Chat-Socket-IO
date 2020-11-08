pipeline {
    agent any 
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }

        stage('deploy') {
            steps {
                sh "BUILD_ID=dontKillMe pm2 start index.js --name SimpleChat"
            }
        }
    }
}