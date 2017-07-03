/**
 * Created by Ioana.Popescu on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        var ret = [];
                        for (var i in data) {
                            if (data[i].managerId !== null) {
                                for (var j in data) {
                                    if (data[i].managerId === data[j].employeeId) {
                                        ret.push(data[j]);
                                    }
                                }
                            }
                        }
                        return ret;
                    })
                    .error(function (err) {
                        return err;
                    });
            },
            findDepartments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            },
            findJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        };
    }]
);
