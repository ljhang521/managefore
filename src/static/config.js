const serverUrl = "http://localhost:9080/test"
//const serverUrl = "https://www.intell-traffic.com:8444"
global.constants = {
    // create by ljh ---begin
    projectListByMid: serverUrl + '/project/getProjectByManagerId',
    progressList: serverUrl + '/progress/getProgressList',
    addProgress: serverUrl + '/progress/addProgressList',
    updateProgress: serverUrl + '/progress/updateProgressList',
    deleteProgress: serverUrl + '/progress/deleteProgressList',
    projectDetail: serverUrl + '/porject/projectDetail',
    technologySelect:serverUrl + '/technology/selectTechnology',
    updateTechnology:serverUrl + '/technology/updateTechnology',
    insertTechnology:serverUrl + '/technology/insertNewTechnology',
    deleteTechnology:serverUrl + '/technology/deleteNewTechnology',
    rightsList:serverUrl + '/manage/setRight',
    // create by ljh ---end

    //gsl用到的后端接口
    projectList: serverUrl + '/project2/projectList',
    addProject:serverUrl+'/project1/addProject',
    deleteProject: serverUrl+'/project1/deleteProject',
    changeProject:serverUrl+'/project1/changeProject',
    getProject:serverUrl+ '/project1/getProject',

// <<<<<<< HEAD
//    董志涵
    login:serverUrl+'web/login',
    sendCode:serverUrl+'web/sendCode',
    codeMaching:serverUrl+'web/codeMaching',
    logout:serverUrl+'web/logout',

// =======
    organizationChart : serverUrl + '/teamStructure/getTeamStructure'
// >>>>>>> 98b1cd2cf54e11cb115c694da2cc49d02eb2325e
};
