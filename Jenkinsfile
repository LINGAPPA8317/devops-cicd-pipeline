pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/sharanabasava-dev/devops-cicd-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test Build') {
            steps {
                echo 'CI pipeline working successfully'
            }
        }
    }
}
