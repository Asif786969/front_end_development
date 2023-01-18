const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_e08e315adb184baed528a8976e81c5e07dbdedd2",
        options: {
            'sonar.login':'admin',
            'sonar.password':'Asif@2000',
            'sonar.projectName': 'React-testing',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'React-testing',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '**/node_modules/**',//,/coverage/lcov-report/*',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)