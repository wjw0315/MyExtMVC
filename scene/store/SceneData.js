Ext.define('MyDesktop.store.SceneData', {
    extend : 'Ext.data.Store',
    // fields: ['id','name', 'age','sex'],
    model : 'MyDesktop.model.Student',
    /*
     * data: [ {id:1,name: '张三', age: 30,sex:'男'}, {id:2,name: '李四',
     * age: 20,sex:'女'} ]
     */
    autoLoad: true,
    proxy : {
        type : 'ajax',
        api : {
            read : 'data/students.json',
            update : 'data/updateStudents.json'

        },
        reader : {
            type : 'json',
            root : 'students',
            successProperty : 'success'
        }
    }
});