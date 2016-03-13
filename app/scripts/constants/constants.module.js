(function() {
    'use strict';

    app.constant('$appConstant',
        {
            'API_URL': 'http://localhost:9000/egsairline/app/rest/',
            'API_TEST_URL': 'http://localhost:9000/rest/',
            'IS_TEST': false,
            'COMMON_UI_METADATA': ['ROLES_USER', 'ROLE_ADMIN'],
            'JOB_SCHEDULER': ['ROLES_USER', 'ROLE_ADMIN'],
            'USER_MANAGEMENT': ['ROLES_USER', 'ROLE_ADMIN']
        }
    );
}());