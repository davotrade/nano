function ShapeshiftConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.shapeshift', {
            url: '/shapeshift-buy-xem',
            controller: 'ShapeshiftCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/shapeshift/shapeshift.html',
            title: 'Convert to XEM'
        });

};

export default ShapeshiftConfig;
