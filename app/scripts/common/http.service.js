(function() {
    'use strict';

    app.service('$httpapi', function ($q, $http, $timeout, $log) {
            var request = function (request) {
                var deferred = $q.defer();

                var timeoutPromise = $timeout(function () {
                    deferred.reject('Request timed out');
                }, 30000);
                $http({
                        method: request.method,
                        url: request.url,
                        headers: request.headers
                    },
                    {
                        timeout: deferred.promise
                    }
                ).then(function (response) {
                        if (response && response.constructor === ({}).constructor) {
                            var status = response.status || 500;
                            var responseModel = response.data.responseModel || {};
                            if (status === 200 && (responseModel.status === 1)) {
                                $log.debug('HTTP '+request.method+':['+request.url+']:'+JSON.stringify(responseModel));
                                deferred.resolve(responseModel.data);
                            } else {
                                var error = responseModel.error || "";
                                var message = error || 'Invalid response';
                                deferred.reject(message);
                                $log.debug('HTTP '+request.method+':['+request.url+']:'+message);
                            }
                        } else {
                            deferred.reject('Invalid response');
                            $log.debug('HTTP '+request.method+':['+request.url+']:Invalid response');
                        }
                        $timeout.cancel(timeoutPromise);
                    }, function () {
                        $log.debug('HTTP '+request.method+':['+request.url+']:Invalid response');
                        deferred.reject('Invalid response');
                        $timeout.cancel(timeoutPromise);
                    });
                return deferred.promise;
            };

            return{
                get: function (url, data, headers) {
                    headers = headers || {};
                    headers['content-type'] = "application/json";

                    var query = '';
                    if (data) {
                        for (var i in data) {
                            if (data.hasOwnProperty(i)) {
                                query = (query === '') ? '?' : query + '&';
                                query += i + '=' + data[i];
                            }
                        }
                    }

                    return request({
                        method: 'GET',
                        url: /*$appConstant.API_URL + */url + query,
                        headers: headers
                    });
                },
                post: function (url, data, headers) {
                    headers = headers || {};
                    headers['content-type'] = "application/json";

                    return request({
                        method: 'POST',
                        url: /*$appConstant.API_URL + */url,
                        data: JSON.stringify(data || {}),
                        headers: headers
                    });
                }
            };
        }
    );
}());