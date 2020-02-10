// PC端模板
const PC_TEMPLATE = new Map([
    ['react', {
        url: 'https://github.com:kisurekeyvick/spicy-technology#master',
        description: 'react模板'
    }],
    ['vue', {
        url: '',
        description: 'vue模板'
    }],
    ['vue3', {
        url: '',
        description: 'vue3模板'
    }],
    ['angular', {
        url: '',
        description: 'angular模板'
    }],
    ['angularjs', {
        url: '',
        description: 'angular.js模板'
    }]
]);
// H5端模板
const H5_TEMPLATE = new Map([
    ['react', {
        url: 'https://github.com:kisurekeyvick/spicy-technology#master',
        description: 'react模板'
    }],
    ['vue', {
        url: '',
        description: 'vue模板'
    }],
    ['vue3', {
        url: '',
        description: 'vue3模板'
    }]
]);
// 模板集合
const templateList = new Map([
   ['pc', PC_TEMPLATE],
   ['h5', H5_TEMPLATE] 
]);

exports.templateList = templateList;
