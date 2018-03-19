Ext.define('MyDesktop.controller.Students', {
    extend: 'Ext.app.Controller',
    views: [
        'student.List',
        'student.Edit'
    ],
    stores: ['Students'],
    models: ['Student'],
    init: function() {
        //console.log('初始化用户，在application启动前触发该事件!');
        //console.log("controller init trigger!");
    	this.control({
            /*'viewport > panel': {
                render: this.onPanelRendered
            }*/
    		'studentlist': {
                itemdblclick: this. editStudent
            },
            'studentedit button[action=save]': {
                click: this.updateStudent
            }

        });
    },
    onPanelRendered:function(){
       console.log("panel rendered!");
    },
    editStudent:function(grid,record){
    	var view = Ext.widget('studentedit');
        view.down('form').loadRecord(record);
        
    	//console.log("editStudent dbclicked!");
    	//console.log(aa);
    	//console.log(record);
    	//console.log('Double clicked on ' + record.get('age'));
    },
    updateStudent: function(button) {
        //console.log('clicked the Save button');
    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        win.close();
        this.getStudentsStore().sync();
    }
    
});