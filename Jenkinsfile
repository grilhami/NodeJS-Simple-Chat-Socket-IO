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
                sh "export JENKINS_NODE_COOKIE=dontKillMe && pm2 restart SimpleChat"
            }
        }
    }
    post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}