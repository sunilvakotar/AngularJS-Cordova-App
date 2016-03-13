(function() {
    'use strict';
    app.constant('$dbConfig',
        {
            name: 'ekPlatinumCard',
            options: {mechanisms: ['sqlite', 'indexeddb', 'websql']},
            staticPageTable: 'staticpage',
            schema: {
                stores: [
                    {
                        name: 'staticpage',
                        keyPath: 'pageId',
                        indexes: [
                            {
                                keyPath: 'pageName'
                            },
                            {
                                keyPath: 'content'
                            },
                            {
                                keyPath: 'downloadTimestamp'
                            },
                            {
                                keyPath: 'userId'
                            }
                        ]
                    }
                ]
            }
        }
    );
}());