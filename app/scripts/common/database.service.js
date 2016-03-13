(function() {
    'use strict';
    app.factory('$StorageDB', function ($q, $dbConfig) {
        var self = this;
        self.db = null;

        self.init = function () {
            self.db = new ydn.db.Storage($dbConfig.name, $dbConfig.schema, $dbConfig.options);
            console.log('Database Initialized.');
        };
    });
}());