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
                sh "export JENKINS_NODE_COOKIE=dontKillMe && pm2 start index.js --name SimpleChat"
            }
        }
    }
}