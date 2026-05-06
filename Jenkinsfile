pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "car-rental-backend"
        DOCKER_IMAGE_FRONTEND = "car-rental-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    dir('backend') {
                        bat "docker build -t %DOCKER_IMAGE_BACKEND%:latest ."
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    dir('frontend') {
                        bat "docker build --build-arg VITE_API_URL=http://localhost:5001/api -t %DOCKER_IMAGE_FRONTEND%:latest ."
                    }
                }
            }
        }

        stage('Run Application') {
            steps {
                bat "docker-compose up -d"
            }
        }
        
        // Optional: Cleanup stage
        // stage('Cleanup') {
        //     steps {
        //         sh "docker image prune -f"
        //     }
        // }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
