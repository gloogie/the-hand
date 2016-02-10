'user strict';

angular.module('terminator')
    .factory('ConfigService', [function () {

        var defaultSettings = {
            url: 'http://10.1.20.23:8081/fingers',
            handParams: {
                thumb: 'thumb',
                index: 'index',
                major: 'major',
                ringFinger: 'ringFinger',
                auricular: 'auricular'
            }
        };

        var ConfigService = {
            get: _get,
            save: _save
        };

        function _get() {
            var settings = angular.fromJson(localStorage.settings);
            if (!settings) {
                settings = defaultSettings;
            }
            return settings;
        }

        function _save(settings) {
            localStorage.settings = angular.toJson(settings);
        }

        return ConfigService;
    }]);